'use client'
import { supabase } from '../../lib/supabase'

export default function Admin() {
  async function login(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (!error) window.location.href = '/admin/dashboard'
    else alert('Erro no login')
  }

  return (
    <form onSubmit={login} className="max-w-sm mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <input name="email" placeholder="Email" className="border p-2 w-full mb-2" />
      <input name="password" type="password" placeholder="Senha" className="border p-2 w-full mb-2" />
      <button className="bg-black text-white p-2 w-full">Entrar</button>
    </form>
  )
}