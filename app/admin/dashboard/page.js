'use client'
import { useState } from 'react'
import { supabase } from '../../../lib/supabase'

export default function Dashboard() {
  const [repassed, setRepassed] = useState(false)

  async function save(e) {
    e.preventDefault()

    await supabase.from('donations').insert({
      name: e.target.name.value,
      amount: e.target.amount.value,
      repassed
    })

    e.target.reset()
    setRepassed(false)
    alert('Doação registrada')
  }

  return (
    <form onSubmit={save} className="max-w-sm mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Nova Doação</h2>

      <input name="name" placeholder="Nome do doador" className="border p-2 w-full mb-2" />
      <input name="amount" placeholder="Valor (R$)" className="border p-2 w-full mb-2" />

      <label className="flex items-center gap-2 mb-4">
        <input type="checkbox" checked={repassed} onChange={e => setRepassed(e.target.checked)} />
        Repassado
      </label>

      <button className="bg-green-600 text-white p-2 w-full">
        Salvar
      </button>
    </form>
  )
}