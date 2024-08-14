import { auth } from 'firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
  }, []);
  return (
    <authContext.Provider value={{ signup, signin, user, signout }}>
      {children}
    </authContext.Provider>
  );
}
