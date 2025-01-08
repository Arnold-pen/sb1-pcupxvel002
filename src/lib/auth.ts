import { useState, useEffect } from 'react';
import { supabase } from './supabase';

export async function login(password: string): Promise<boolean> {
  try {
    const { data: { session }, error } = await supabase.auth.signInWithPassword({
      email: 'admin@example.com',
      password: password
    });

    if (error) {
      console.error('Auth error:', error);
      return false;
    }

    return !!session;
  } catch (err) {
    console.error('Login error:', err);
    return false;
  }
}

export function isAuthenticated(): boolean {
  return !!supabase.auth.getSession();
}

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuth(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuth(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { isAuth, login };
}