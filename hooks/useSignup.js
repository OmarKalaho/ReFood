import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useRouter } from 'next/router'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const router = useRouter()

  const signup = async (email, password,userType) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/user/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password,userType })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      router.push('/')

    }
  }

  return { signup, isLoading, error }
}