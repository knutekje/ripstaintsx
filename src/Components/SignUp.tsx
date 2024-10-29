import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Alert,
  AlertIcon,
  Checkbox,
  Link,
  Text,
} from '@chakra-ui/react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleCreateUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully');
    } catch (error) {
      setError('Error creating user. Please try again.');
      console.log(error);
    }
  };

  return (
    <Box
      width="100%"
      maxWidth="400px"
      mx="auto"
      mt="10"
      p="8"
      boxShadow="lg"
      borderRadius="md"
    >
      <Heading as="h2" size="lg" textAlign="center" mb="6">
        Register your Account
      </Heading>

      {error && (
        <Alert status="error" mb="4" borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      )}

      <form onSubmit={handleCreateUser}>
        <VStack spacing="4">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              focusBorderColor="gray.400"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              focusBorderColor="gray.400"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              focusBorderColor="gray.400"
            />
          </FormControl>

          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              focusBorderColor="gray.400"
            />
          </FormControl>

          <FormControl id="terms" display="flex" alignItems="center">
            <Checkbox required mr="2" />
            <Text fontSize="sm">
              I agree to the{' '}
              <Link color="gray.500" href="#" textDecoration="underline">
                Terms and Conditions
              </Link>
            </Text>
          </FormControl>

          <Button type="submit" width="full" mt="4">
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignUp;
