import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {

  const [state, setState] = useState('Admin') // 'Admin', 'Doctor', 'Doctor Forgot Password', 'Doctor Reset Password'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          setAToken(data.token)
          localStorage.setItem('aToken', data.token)
        } else {
          toast.error(data.message)
        }
      } 
      else if (state === 'Doctor') {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
        if (data.success) {
          setDToken(data.token)
          localStorage.setItem('dToken', data.token)
        } else {
          toast.error(data.message)
        }
      } 
      else if (state === 'Doctor Forgot Password') {
        const { data } = await axios.post(backendUrl + '/api/doctor/forgot-password', { email })
        if (data.success) {
          toast.success(data.message)
          setState('Doctor Reset Password')
        } else {
          toast.error(data.message)
        }
      } 
      else if (state === 'Doctor Reset Password') {
        const { data } = await axios.post(backendUrl + '/api/doctor/reset-password', { email, otp, newPassword })
        if (data.success) {
          toast.success(data.message)
          setState('Doctor')
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

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'>
          <span className='text-[#f26907]'>
            {state === 'Admin' && 'Admin'}
            {state === 'Doctor' && 'Doctor'}
            {state === 'Doctor Forgot Password' && 'Doctor Forgot'}
            {state === 'Doctor Reset Password' && 'Doctor Reset'}
          </span> Login
        </p>

        {/* Email Field */}
        {state !== 'Doctor Reset Password' && (
          <div className='w-full'>
            <p>Email</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
          </div>
        )}

        {/* Password Field (Admin & Doctor Login) */}
        {(state === 'Admin' || state === 'Doctor') && (
          <div className='w-full'>
            <p>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
          </div>
        )}

        {/* Reset Fields for Doctor */}
        {state === 'Doctor Reset Password' && (
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
        <button className='bg-[#f26907] text-white w-full py-2 rounded-md text-base'>
          {state === 'Admin' && 'Login'}
          {state === 'Doctor' && 'Login'}
          {state === 'Doctor Forgot Password' && 'Send OTP'}
          {state === 'Doctor Reset Password' && 'Update Password'}
        </button>

        {/* Navigation / Toggle Links */}
        {state === 'Admin' && (
          <div className='flex flex-col gap-2 w-full'>
            <p>Doctor Login? <span onClick={() => setState('Doctor')} className='text-primary underline cursor-pointer'>Click here</span></p>
          </div>
        )}

        {state === 'Doctor' && (
          <div className='flex flex-col gap-2 w-full'>
            <p>Admin Login? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer'>Click here</span></p>
            <p>Forgot your password? <span onClick={() => setState('Doctor Forgot Password')} className='text-primary underline cursor-pointer'>Reset here</span></p>
          </div>
        )}

        {(state === 'Doctor Forgot Password' || state === 'Doctor Reset Password') && (
          <p>Remembered your password? <span onClick={() => setState('Doctor')} className='text-primary underline cursor-pointer'>Login here</span></p>
        )}
      </div>
    </form>
  )
}

export default Login