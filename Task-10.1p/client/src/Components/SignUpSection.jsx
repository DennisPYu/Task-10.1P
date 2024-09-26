import { Box, Flex, Input, Button, Heading } from '@chakra-ui/react';
import { useState } from 'react';

export default function SignUpSection() {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      setResponseMessage('Email is required');
      return;
    }

    const data = { email };

    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }
      setResponseMessage(result.message);
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Box p="4" bg="#f7f7f7" textAlign="center">
      <Heading as="h2" size="lg" mb="4">SIGN UP FOR OUR DAILY INSIDER</Heading>
      <Flex align="center" justify="center">
        <Input
          type="email"
          placeholder="Enter your email"
          size="md"
          borderRadius="md"
          border="2px solid white"
          _hover={{ border: "2px solid #3182ce" }}
          _focus={{ border: "2px solid #3182ce" }}
          w="300px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button colorScheme="blue" ml={2} onClick={handleSubscribe}>Subscribe</Button>
      </Flex>
      {responseMessage && <Box mt="4">{responseMessage}</Box>}
    </Box>
  );
}
