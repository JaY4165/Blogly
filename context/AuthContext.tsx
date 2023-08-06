"use client";

import { auth, provider } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { UserCredential, User } from "firebase/auth";

interface AuthContextProps {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };

  const logOut = () => {
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
