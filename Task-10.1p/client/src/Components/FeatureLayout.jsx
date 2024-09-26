/* eslint-disable react/prop-types */
import { SimpleGrid, Box,Heading,Button  } from '@chakra-ui/react';
import ArticleCard from './ArticleCard';



// eslint-disable-next-line react/prop-types
export default function FeatureLayout({ heading, items, buttonText }) {
  return (
    <Box padding="4">
      <Heading as="h2" size="xl" mb="4" textAlign="center">{heading}</Heading>
      <SimpleGrid spacing={4} templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
        {items.map((item, index) => (
          <Box key={index} padding={4} maxWidth="300px" margin="auto">
            <ArticleCard
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              rating={item.rating}
              author={item.author}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt="4">
        <Button colorScheme="blue">{buttonText}</Button>
      </Box>
    </Box>
  );
}

