// authService.ts
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    UserCredential 
 } from 'firebase/auth';
import { auth } from '../config/firebase';
 
 // Sign up with email and password
 export const signup = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
 };
 
 // Sign in with email and password
 export const signin = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
 };
 
 // Sign out
 export const signout = (): Promise<void> => {
    return signOut(auth);
 };
 
