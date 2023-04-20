import { createContext, useEffect, useState } from 'react'

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { Navigate } from 'react-router-dom'

export const AuthContext = createContext(null)
export const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '' })
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false)

  //createUser is a function that will be called when the user clicks the sign up button
  const createUser = (email, password, displayName) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName }
        setUser(newUser)
        // save user to the database
        saveUser(email, displayName, 'POST')
        setAuthError('')

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName,
        })
        // navigate to home page
        Navigate('/')
      })

      .catch((error) => {
        setAuthError(error.message)
        console.log(error)
      })
      .finally(() => setLoading(false))
  }

  //sign in is a function that will be called when the user clicks the sign in button
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        //if the user is signed in, then set the authError to empty string to remove the error message
        setAuthError('')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        setAuthError(error.message)
      })
      .finally(() => setLoading(false))
  }

  //signInUsingGoogle is a function that will be called when the user clicks the sign in with google button
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
        saveUser(user.email, user.displayName, 'PUT')
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message)
      })
  }
  //onAuthStateChanged is a listener that will be called whenever the user's sign-in state changes
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid
        setUser(user)
      } else {
        setUser({})
      }
      setLoading(false)
    })
    return () => unsubscribed
  }, [])

  // for admin panel
  useEffect(() => {
    fetch(`https://mylibraryserver.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin))
  }, [user.email])

  //signOutUser is a function that will be called when the user clicks the sign out button
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setLoading(false))
  }
  //saveUser is a function that will be called when the user clicks the sign up button

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch('https://mylibraryserver.vercel.app/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then()
  }

  const authInfo = {
    user,
    admin,
    loading,
    createUser,
    signIn,
    signOutUser,
    authError,
    signInUsingGoogle,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
