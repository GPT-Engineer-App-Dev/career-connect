import { Box, Container, VStack, Text, Heading, Flex, Link, HStack, Spacer, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const jobListings = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      description: "Develop and maintain web applications."
    },
    {
      title: "Product Manager",
      company: "Innovate Ltd.",
      location: "New York, NY",
      description: "Lead product development teams to success."
    },
    {
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      description: "Create user-friendly interfaces and experiences."
    }
  ];

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <HStack spacing="24px">
          <Link href="/" fontSize="xl" fontWeight="bold">Home</Link>
          <Link href="#job-listings" fontSize="xl" fontWeight="bold">Job Listings</Link>
          <Link href="#contact" fontSize="xl" fontWeight="bold">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container centerContent maxW="container.md" height="60vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Find Your Dream Job</Heading>
        <Text fontSize="lg">Explore thousands of job opportunities from top companies around the world.</Text>
      </Container>

      {/* Job Listings Section */}
      <Container id="job-listings" maxW="container.md" py={10}>
        <Heading as="h2" size="xl" mb={6}>Job Listings</Heading>
        <VStack spacing={8}>
          {jobListings.map((job, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{job.title}</Heading>
              <Text mt={4}><strong>Company:</strong> {job.company}</Text>
              <Text><strong>Location:</strong> {job.location}</Text>
              <Text mt={4}>{job.description}</Text>
            </Box>
          ))}
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.500" color="white" py={10} mt={10}>
        <Container maxW="container.md">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Text>&copy; 2023 JobFinder. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
              <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
              <Link href="https://linkedin.com" isExternal><FaLinkedin size="24px" /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;