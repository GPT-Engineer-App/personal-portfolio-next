import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Link, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box as="header" textAlign="center" py={8}>
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="xl">Full Stack Developer</Text>
        </Box>

        {/* About Section */}
        <Box as="section" id="about" py={8}>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">I am a passionate full stack developer with experience in building web applications using modern technologies. I love to learn and explore new tools and frameworks.</Text>
        </Box>

        {/* Projects Section */}
        <Box as="section" id="projects" py={8}>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Heading as="h3" size="md">
                Project 1
              </Heading>
              <Text mt={2}>Description of project 1.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Heading as="h3" size="md">
                Project 2
              </Heading>
              <Text mt={2}>Description of project 2.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box as="section" id="contact" py={8}>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md">Feel free to reach out to me via the following platforms:</Text>
          <HStack spacing={4} mt={4}>
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="mailto:email@example.com" isExternal>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
