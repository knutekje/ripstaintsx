// SignIn.tsx
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { signin } from './authService';

const SignIn: React.FC = () => {
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   const handleSignIn = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         await signin(email, password);
         //alert("Signed in successfully!");
      } catch (error) {
         console.error("Error signing in:", (error as Error).message);
      }
   };

   return (
    <Box maxW="sm" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
    <Heading as="h2" size="lg" textAlign="center" mb={6}>
      Sign In
    </Heading>
    <form onSubmit={handleSignIn}>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="full">
          Sign In
        </Button>
      </Stack>
    </form>
  </Box>
   );
};

export default SignIn;
