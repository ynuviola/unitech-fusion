import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  currentImage: string;
  onImageChange: (imageUrl: string) => void;
  token: string;
}

export default function ImageUploader({ currentImage, onImageChange, token }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState(currentImage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar que sea un archivo JPG
    if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
      setError('Solo se permiten imágenes en formato JPG');
      return;
    }

    // Crear un objeto FormData
    const formData = new FormData();
    formData.append('image', file);

    setIsUploading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al subir la imagen');
      }

      // Actualizar la URL de la imagen
      setPreviewUrl(data.imageUrl);
      onImageChange(data.imageUrl);
    } catch (err: any) {
      console.error('Error al subir la imagen:', err);
      setError(err.message || 'Error al subir la imagen');
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Imagen del artículo *
      </label>
      
      <div className="flex flex-col items-center">
        {previewUrl && (
          <div className="mb-4 relative w-full max-w-md h-48 rounded-lg overflow-hidden">
            <Image 
              src={previewUrl} 
              alt="Vista previa" 
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        )}
        
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={triggerFileInput}
            disabled={isUploading}
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isUploading ? 'Subiendo...' : 'Seleccionar imagen JPG'}
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg"
            onChange={handleUpload}
            className="hidden"
          />
          
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          
          <p className="text-gray-500 text-xs mt-2">
            Solo se permiten imágenes en formato JPG. Tamaño máximo: 5MB
          </p>
        </div>
      </div>
    </div>
  );
}