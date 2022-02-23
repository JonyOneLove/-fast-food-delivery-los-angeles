import { auth } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const useLogin = async (email, password) => {
  let user
  let error
  try {
    user = await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    error = err.message
  }
  return { user, error }
}

export default useLogin
