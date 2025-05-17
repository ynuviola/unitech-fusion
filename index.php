<?php
// Configuración de errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// URL de la aplicación Node.js
$node_url = 'http://127.0.0.1:3000';

// Obtener la ruta solicitada
$request_uri = $_SERVER['REQUEST_URI'];

// Función para realizar la solicitud proxy con cURL
function proxyRequest($url, $method, $headers, $data = null) {
    $ch = curl_init($url);
    
    // Configurar opciones de cURL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    // Si hay datos en la solicitud (POST, PUT, etc.)
    if ($data && ($method == 'POST' || $method == 'PUT')) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }
    
    // Ejecutar la solicitud
    $response = curl_exec($ch);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    // Separar encabezados y cuerpo
    $headers = substr($response, 0, $header_size);
    $body = substr($response, $header_size);
    
    return [
        'status' => $status_code,
        'headers' => $headers,
        'body' => $body
    ];
}

// Preparar encabezados para la solicitud
$request_headers = [];
foreach ($_SERVER as $key => $value) {
    if (substr($key, 0, 5) === 'HTTP_') {
        $header = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($key, 5)))));
        if ($header != 'Host') { // No enviar el encabezado Host original
            $request_headers[] = "$header: $value";
        }
    }
}

// Obtener el cuerpo de la solicitud para métodos POST, PUT, etc.
$request_body = file_get_contents('php://input');

// Realizar la solicitud proxy
$response = proxyRequest($node_url . $request_uri, $_SERVER['REQUEST_METHOD'], $request_headers, $request_body);

// Si hay un error, mostrar página de error
if ($response['status'] >= 500) {
    header('HTTP/1.1 503 Service Unavailable');
    echo '<html><head><title>Error de servicio</title></head><body>';
    echo '<h1>Servicio temporalmente no disponible</h1>';
    echo '<p>El servidor está experimentando problemas técnicos. Por favor, inténtelo de nuevo más tarde.</p>';
    echo '</body></html>';
    exit;
}

// Procesar los encabezados de respuesta
$header_lines = explode("\r\n", $response['headers']);
foreach ($header_lines as $header_line) {
    if (strlen($header_line) > 0 && 
        !preg_match('/^Transfer-Encoding:/i', $header_line) &&
        !preg_match('/^Connection:/i', $header_line) &&
        !preg_match('/^Content-Length:/i', $header_line)) {
        header($header_line);
    }
}

// Enviar el cuerpo de la respuesta
echo $response['body'];
?>