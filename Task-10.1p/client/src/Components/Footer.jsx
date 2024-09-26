import { Box, Flex, Heading, Link, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <Box as="footer" bg="#333" color="white" p="4">
      <Flex justify="space-between" p="4">
        <Box>
          <Heading as="h4" size="md" mb="4">Explore</Heading>
          <Link href="/" color="white" display="block" mb="2">Home</Link>
          <Link href="/questions" color="white" display="block" mb="2">Questions</Link>
          <Link href="/articles" color="white" display="block" mb="2">Articles</Link>
          <Link href="/tutorials" color="white" display="block" mb="2">Tutorials</Link>
        </Box>
        <Box>
          <Heading as="h4" size="md" mb="4">Support</Heading>
          <Link href="/faqs" color="white" display="block" mb="2">FAQs</Link>
          <Link href="/help" color="white" display="block" mb="2">Help</Link>
          <Link href="/contact" color="white" display="block" mb="2">Contact Us</Link>
        </Box>
        <Box>
          <Heading as="h4" size="md" mb="4">Stay Connected</Heading>
          <HStack spacing="4" justify="center" mb="4">
            <Link href="https://twitter.com" isExternal>
              <Box className="social-icon">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Box>
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Box className="social-icon">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Box>
            </Link>
            <Link href="https://facebook.com" isExternal>
              <Box className="social-icon">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Box>
            </Link>
          </HStack>
        </Box>
      </Flex>
      <Box textAlign="center" mt="4">
        <Heading as="h4" size="md" mb="4">DEV@Deakin</Heading>
        <HStack justify="center" spacing="4" mt="2">
          <Link href="/privacy" color="white">Privacy Policy</Link>
          <Link href="/terms" color="white">Terms</Link>
          <Link href="/code-of-conduct" color="white">Code of Conduct</Link>
        </HStack>
      </Box>
    </Box>
  );
}
