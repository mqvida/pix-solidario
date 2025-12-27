'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [donations, setDonations] = useState([])
  const total = donations.reduce((sum, d) => sum + Number(d.amount), 0)

  useEffect(() => {
    supabase
      .from('donations')
      .select('amount, repassed')
      .order('created_at', { ascending: false })
      .then(({ data }) => setDonations(data || []))
  }, [])

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">💚 Ação Solidária Pix</h1>
      <p className="mb-4">Total arrecadado:</p>

      <div className="text-xl font-semibold mb-6">
        R$ {total.toFixed(2)}
      </div>

      {donations.map((d, i) => (
        <div key={i} className="flex justify-between border p-3 rounded mb-2">
          <span>R$ {Number(d.amount).toFixed(2)}</span>
          <span className={d.repassed ? 'text-green-600' : 'text-red-600'}>
            {d.repassed ? 'Repassado' : 'Pendente'}
          </span>
        </div>
      ))}
    </main>
  )
}