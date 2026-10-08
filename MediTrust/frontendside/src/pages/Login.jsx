import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Login') // 'Sign Up', 'Login', 'Forgot Password', 'Reset Password'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } 
      else if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } 
      else if (state === 'Forgot Password') {
        const { data } = await axios.post(backendUrl + '/api/user/forgot-password', { email })
        if (data.success) {
          toast.success(data.message)
          setState('Reset Password') // Move to OTP & New Password screen
        } else {
          toast.error(data.message)
        }
      } 
      else if (state === 'Reset Password') {
        const { data } = await axios.post(backendUrl + '/api/user/reset-password', { email, otp, newPassword })
        if (data.success) {
          toast.success(data.message)
          setState('Login')
          setPassword('')
          setOtp('')
          setNewPassword('')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
          {state === 'Sign Up' && 'Create Account'}
          {state === 'Login' && 'Login'}
          {state === 'Forgot Password' && 'Forgot Password'}
          {state === 'Reset Password' && 'Reset Password'}
        </p>
        <p>
          {state === 'Sign Up' && 'Please sign up to book appointment'}
          {state === 'Login' && 'Please log in to book appointment'}
          {state === 'Forgot Password' && 'Enter your email to receive a reset OTP'}
          {state === 'Reset Password' && 'Enter the OTP from your backend console & new password'}
        </p>

        {/* Full Name (Sign Up only) */}
        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
        )}

        {/* Email (Shown for Login, Sign Up, Forgot, Reset) */}
        {state !== 'Reset Password' && (
          <div className='w-full'>
            <p>Email</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
          </div>
        )}

        {/* Password (Sign Up & Login only) */}
        {(state === 'Sign Up' || state === 'Login') && (
          <div className='w-full'>
            <p>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
          </div>
        )}

        {/* Reset Password Fields (OTP & New Password) */}
        {state === 'Reset Password' && (
          <>
            <div className='w-full'>
              <p>Email (Confirmation)</p>
              <input value={email} disabled className='border border-[#DADADA] bg-gray-100 rounded w-full p-2 mt-1 text-gray-500' type="email" />
            </div>
            <div className='w-full'>
              <p>6-Digit OTP (Check Backend Console)</p>
              <input onChange={(e) => setOtp(e.target.value)} value={otp} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" placeholder="Enter 6-digit OTP" required />
            </div>
            <div className='w-full'>
              <p>New Password</p>
              <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" placeholder="Min. 8 characters" required />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>
          {state === 'Sign Up' && 'Create account'}
          {state === 'Login' && 'Login'}
          {state === 'Forgot Password' && 'Send OTP'}
          {state === 'Reset Password' && 'Update Password'}
        </button>

        {/* State Toggle Links */}
        {state === 'Sign Up' && (
          <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
        )}

        {state === 'Login' && (
          <div className='flex flex-col gap-2 w-full'>
            <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
            <p>Forgot your password? <span onClick={() => setState('Forgot Password')} className='text-primary underline cursor-pointer'>Reset here</span></p>
          </div>
        )}

        {(state === 'Forgot Password' || state === 'Reset Password') && (
          <p>Remembered your password? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
        )}
      </div>
    </form>
  )
}

export default Login