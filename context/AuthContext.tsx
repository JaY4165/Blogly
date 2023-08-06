"use client";

import { auth, provider } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { UserCredential, User } from "firebase/auth";

export interface AuthContextProps {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Sign-out error :", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
