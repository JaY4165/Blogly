"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  User,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

// interface AuthContextType = {};

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) throw Error("No user found");
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    };

    return () => unSubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
