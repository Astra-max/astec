import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { signUp } from "../store/authSlice"


function SignUp({ onSwitch, setToken }) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [passwd, setPassword] = useState('')
  const [confPass, setConfirmPass] = useState('')

  const dispatch = useDispatch()
  const { loading, error } = useSelector((state)=>state.auth)

  
  function validateInputs() {
    if (!/^[A-Za-z]{2,}$/.test(firstName)) {
      return "First name must have at least 2 letters and contain only alphabets"
    }

    if (!/^[A-Za-z]{2,}$/.test(secondName)) {
      return "Second name must have at least 2 letters and contain only alphabets"
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address"
    }

    if (
      passwd.length < 8 ||
      !/[A-Z]/.test(passwd) ||
      !/[a-z]/.test(passwd) ||
      !/[0-9]/.test(passwd) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(passwd)
    ) {
      return "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    }

    if (passwd !== confPass) {
      return "Passwords do not match"
    }

    return null
  }

  const role = 'user'

  async function HandleSubmit(e) {
    e.preventDefault()
    dispatch(signUp({firstName,secondName,email,passwd,role}))

    const validationError = validateInputs()
    if (validationError) {
      return
    }
    onSwitch()
  }

  return (
    <div className="minor-cont">
      <div className='descrip-logo'>
        <h2 className='descr-logo'>AsTec Academy</h2>
      </div>
      <form className='signup-form' onSubmit={HandleSubmit}>
        <input
          className="input"
          type='text'
          placeholder='First Name'
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="input"
          type='text'
          placeholder='Second Name'
          required
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <input
          className="input"
          type='email'
          placeholder='someone@gmail.com'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type='password'
          placeholder='Password'
          required
          value={passwd}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input"
          type='password'
          placeholder='Confirm Password'
          required
          value={confPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

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
