// AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

interface AuthContextType {
   currentUser: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [currentUser, setCurrentUser] = useState<User | null>(null);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setCurrentUser(user);
      });
      return () => unsubscribe(); // Cleanup subscription on unmount
   }, []);

   return (
      <AuthContext.Provider value={{ currentUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext);
   if (!context) throw new Error("useAuth must be used within an AuthProvider");
   return context;
};
