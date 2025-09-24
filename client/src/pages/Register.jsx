import React from 'react'
import Header from '../components/Header'
import AuthForm from '../components/AuthForm'

export default function Register(){
  const onSubmit = async ({email,password}) => {
    const res = await fetch('/auth/register', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email,password})})
    const text = await res.text()
    if (!res.ok) return text
    return text
  }

  return (
    <div>
      <Header />
      <AuthForm mode="register" onSubmit={onSubmit} />
    </div>
  )
}
