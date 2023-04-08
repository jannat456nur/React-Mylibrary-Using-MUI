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
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')

  //createUser is a function that will be called when the user clicks the sign up button
  // const createUser = (email, password, name) => {
  //   setLoading(true)
  //   return createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       //if the user is signed in, then set the authError to empty string to remove the error message
  //       setAuthError('')
  //       const newUser = { email, displayName: name }
  //       setUser(newUser)
  //       //save user to database
  //       saveUser(email,name,'POST')
  //       // update profile
  //       updateProfile(auth.currentUser, {
  //         displayName: name,
  //       })
  //         .then(() => {
  //           // Update successful
  //         })
  //         .catch((error) => {
  //           // An error occurred
  //           setAuthError(error.message)
  //         })
  //       Navigate('/')

  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       setAuthError(error.message)
  //       // ..
  //     })
  //     .finally(() => setLoading(false))
  // }

const createUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
              Navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setLoading(false));
    }

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



    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                
            }).catch((error) => {
                setAuthError(error.message);
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



      const saveUser = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
  

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signOutUser,
    authError,
    signInUsingGoogle,
  }

  // const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
