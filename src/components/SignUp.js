import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input 
          type='email'
          name='email'
          placeholder='enter your email'
        />
        <input 
          type='text'
          name='username'
          placeholder='enter username'
        />
        <input 
          type='password'
          name='password'
          placeholder='enter password'
        />
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp