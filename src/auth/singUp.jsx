import { useState } from "react"
import LoginUser from "../lib/postDetails"

function SignUp({ onSwitch, setToken }) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [passwd, setPassword] = useState('')
  const [confPass, setConfirmPass] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function HandleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (passwd !== confPass) {
      setError("Passwords do not match!")
      setLoading(false)
      return
    }

    try {
      const role = 'user'
      const res = await LoginUser({ firstName, secondName, email, passwd, role }, 'signup')

      if (res.userExistsErr || res.invalidCredsErr) {
        setError(res.userExistsErr||res.invalidCredsErr)
        setLoading(false)
        return
      }
      await setToken(res)
      onSwitch()

    } catch (err) {
      console.error(err)
      setError("Signup failed, please try again later")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="minor-cont">
      <div className='descrip-logo'>
        <h2 className='descr-logo'>AsTec Academy</h2>
      </div>
      <form className='signup-form' onSubmit={HandleSubmit}>
        <input className="input" type='text' placeholder='First Name' required
          value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input className="input" type='text' placeholder='Second Name' required
          value={secondName} onChange={(e) => setSecondName(e.target.value)} />
        <input className="input" type='email' placeholder='someone@gmail.com' required
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" type='password' placeholder='Password' required
          value={passwd} onChange={(e) => setPassword(e.target.value)} />
        <input className="input" type='password' placeholder='Confirm Password' required
          value={confPass} onChange={(e) => setConfirmPass(e.target.value)} />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className='sign-up-btn' type='submit' disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>
        <button
          type="button"
          className='btn back-login'
          onClick={onSwitch}
          disabled={loading}
        >
          Back to Login
        </button>
      </form>
    </div>
  )
}

export default SignUp