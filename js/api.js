const API_URL = 'https://sua-api.com'; // Substitua pela URL real do backend
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://SEU-PROJETO.supabase.co', 'SUA-CHAVE-API');

export async function register(email, senha) {
  const { data, error } = await supabase.auth.signUp({ email, password: senha });
  if (error) return { success: false, error: error.message };
  return { success: true, data };
}

export async function login(email, senha) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha });
  if (error) return { success: false, error: error.message };
  return { success: true, data };
}

export async function login(email, senha) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Erro ao fazer login.' };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: 'Erro de conexão com o servidor.' };
  }
}

export async function register(email, senha) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Erro ao cadastrar usuário.' };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: 'Erro de conexão com o servidor.' };
  }
}
