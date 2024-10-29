import { Button } from '@chakra-ui/react';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';



export const SignOut = () =>{
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            //alert('User signed out successfully');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }
    return (
        <div>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
    )      
};
