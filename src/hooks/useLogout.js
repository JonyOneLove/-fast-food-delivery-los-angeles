import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'

const UseLogout = async (email, password) => {
  let error
  try {
    await signOut(auth)
  } catch (err) {
    error = err.message
  }
  return { error }
}

export default UseLogout
