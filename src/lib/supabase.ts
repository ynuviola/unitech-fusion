import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Función para migrar datos de MySQL a Supabase
export async function migrateSubscriberToSupabase(email: string, name: string) {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email, name, created_at: new Date().toISOString() }]);
      
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error al migrar suscriptor a Supabase:', error);
    throw error;
  }
}

// Función para verificar si un email ya está registrado
export async function isEmailRegisteredInSupabase(email: string) {
  try {
    const { data, error, count } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact' })
      .eq('email', email);
      
    if (error) throw error;
    return count ? count > 0 : false;
  } catch (error) {
    console.error('Error al verificar email en Supabase:', error);
    throw error;
  }
}

// Función para obtener todos los suscriptores
export async function getSubscribersFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error al obtener suscriptores de Supabase:', error);
    throw error;
  }
}