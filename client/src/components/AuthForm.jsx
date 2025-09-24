import React, { useState } from 'react'

export default function AuthForm({mode='login', onSubmit}){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [msg,setMsg] = useState('')

  const handle = async (e) => {
    e.preventDefault()
    setMsg('')
    if (!email) return setMsg('Nhập email')
    if (password.length < 8) return setMsg('Mật khẩu phải >= 8 ký tự')
    if (onSubmit) {
      const res = await onSubmit({email,password})
      setMsg(res)
    }
  }

  return (
    <form onSubmit={handle} className="auth-form">
      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password (min 8)" />
      <button>{mode === 'login' ? 'Login' : 'Register'}</button>
      <div className="msg">{msg}</div>
    </form>
  )
}
