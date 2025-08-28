import { faBook, faF, faG, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/login.css'
import { useState } from 'react'
import LoginUser from '../lib/postDetails'
import SignUp from './singUp'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [passwd, setPassword] = useState('')
  const [dbMessage, setDbMessage] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)


  async function HandleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setDbMessage('')
    try {
      const res = await LoginUser({ email, passwd }, 'login')
    
      if (res.errMessage) {
        setDbMessage(res.errMessage)
        setLoading(false)
        return
      }
      await setToken(res)
      window.location.href = '/'

    } catch (error) {
      setDbMessage("Server error, please try again later")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  function HandleEmail(e) {
    setEmail(e.target.value) 
  }
  function HandlePassword(e) {
    const val = e.target.value
    setPassword(val)
  }

  const passInput = {
    position: 'fixed',
    left: '536',
    paddingTop: '0.5rem',
    opacity: '0.7'
  }

  return (
    <div className='login-container'>
      {!isSignUp ? (
        <div className="minor-cont">
          <div className='descrip-logo'>
            <h2 className='descr-logo'>AsTec Academy</h2>
          </div>
          <div className="central-area">
            <p className='big-welcome'>Welcome Back</p>
            <p className="welcome-more">Please enter your details</p>
            <div className='login-sign'>
              <button type="button" className='btn login'>Login</button>
              <button
                type="button"
                className='btn signin'
                onClick={() => setIsSignUp(true)}
              >
                SignUp
              </button>
            </div>
            <form className='info-sect' onSubmit={HandleSubmit}>
              <span>
                <FontAwesomeIcon icon={faBook} style={passInput}/>
                <input
                className='input'
                type='email'
                placeholder='johndoe@gmail.com'
                value={email}
                onChange={HandleEmail}
                required
              />
              </span>
              <span>
                {<FontAwesomeIcon icon={faLock} style={passInput}/>}
                <input
                className='input'
                type='text'
                placeholder='*********'
                value={passwd}
                onChange={HandlePassword}
                required
              />
              </span>
              {dbMessage && <p style={{ color: "red" }}>{dbMessage}</p>}
              <button className='continue' type='submit' disabled={loading}>
                {loading ? "Loading..." : "Continue"}
              </button>
            </form>
          </div>
          <div className='or'>
            <span className='or-span'>or</span>
          </div>
          <div className="social-login">
            <span className='spans'><FontAwesomeIcon icon={faF} color='blue' /></span>
            <span className='spans'><FontAwesomeIcon icon={faG} color='black' /></span>
            <span className='spans'><FontAwesomeIcon icon={faG} color='gold' /></span>
          </div>
          <div className="motivationals">
            <p>
              Join millions of like-minded learners who are eager to learn new skills.
              Login to success!
            </p>
          </div>
        </div>
      ) : (
        <SignUp
          onSwitch={() => setIsSignUp(false)}
          setToken={setToken}
        />
      )}

      <div className='minor-cont2'>
        <img src='body_1.jpg' alt='login-pic' />
      </div>
    </div>
  )
}

export default Login