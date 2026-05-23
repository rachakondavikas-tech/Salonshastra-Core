'use client';
import { FormEvent, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMessage(error ? error.message : 'Magic link sent. Check your email.');
  };
  return <main className="main" style={{maxWidth:460, margin:'60px auto'}}><div className="card"><h1>Login</h1><form onSubmit={submit}><label>Email<input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} /></label><button className="button" type="submit">Send Magic Link</button></form><p>{message}</p></div></main>;
}
