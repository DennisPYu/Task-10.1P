/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Divider, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ArticleCard({ title, description, imageUrl, rating, author }) {
  return (
    <Card maxW="300px" m="auto">
      <CardHeader>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <Box display="flex" alignItems="center">
          <FontAwesomeIcon icon={faStar} color="gold" />
          <Text ml={2}>{rating}</Text>
          <Text ml={4}>{author}</Text>
        </Box>
      </CardFooter>
    </Card>
  );
}
