"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

type AuthContextType = {
  user: User | null;
  logOut: () => void;
  signInWithGoogle: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) throw new Error("No user found");
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logOut, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;
