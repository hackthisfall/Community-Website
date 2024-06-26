import {
  Box,
  useBreakpointValue,
  Heading,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const journey = [
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
  {
    title: 'February 2024',
    eventName: 'Hack This Fall 2024',
    eventImage: '/images/about/journeyEvent.png',
    teamImage: '/images/about/journeyTeam.png',
    description:
      'We emphasize the importance of cultivating a flexible and open approach to problem-solving. We emphasize the importance of cultivating a flexible and open approach to problem-solving.',
  },
];

const JourneySection = () => {
  const isMd = useBreakpointValue({ md: true, xl: false });

  const scrollContainer = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollContainer });

  const xScroll = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', isMd ? '-78.5%' : '-69%'],
  );
  return (
    <Flex ref={scrollContainer} height="400vh" position="relative" w="full">
      <Flex
        flexDir="column"
        position="sticky"
        h="fit-content"
        pb={{ base: '4rem', md: '4rem', lg: '4rem' }}
        top="9vh"
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems="center"
          h="fit-content"
          justifyContent="space-between"
          mb={{ base: '4rem', lg: '5rem' }}
          gap={{ base: '2rem', lg: '10rem' }}
          maxW={{ base: '85vw', lg: 'min(1200px, 92.2vw)' }}
        >
          <Heading
            w={{ base: '100%', lg: '29%', xl: '25%' }}
            fontSize={{ base: '2rem', md: '3rem' }}
            fontFamily="var(--font-outfit)"
            fontWeight="500"
          >
            Our Journey so far...
          </Heading>
          <Text
            textAlign={{ base: 'left', lg: 'right' }}
            w={{ base: '100%', lg: '45%' }}
            fontSize="1.125rem"
            fontWeight="400"
          >
            We emphasize the importance of cultivating a flexible and open
            approach to problem-solving. We emphasize the importance of
            cultivating a flexible and open approach to problem-solving.
          </Text>
        </Flex>
        <motion.div style={{ x: xScroll }} className="flex gap-16">
          {journey.map(
            (
              { title, eventName, eventImage, teamImage, description },
              index,
            ) => (
              <Flex
                w={{ base: '100vw', md: '500px' }}
                key={index}
                flexDir="column"
              >
                <Heading
                  fontSize="1.5rem"
                  fontWeight="500"
                  fontFamily="var(--font-outfit)"
                  mb="2rem"
                >
                  {title}
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap="1rem">
                  <GridItem position="relative">
                    <Flex
                      h="41px"
                      w="41px"
                      borderRadius="full"
                      justifyContent="center"
                      alignItems="center"
                      bg="#FFF1D1"
                      position="absolute"
                      top="-10px"
                      right="-8px"
                      transform="rotate(-15deg)"
                    >
                      🧡
                    </Flex>
                    <Image src={eventImage} alt={eventName} />
                  </GridItem>
                  <GridItem display="flex" flexDir="column" gap="1.5rem">
                    <Heading
                      fontSize="1.5rem"
                      fontWeight="500"
                      fontFamily="var(--font-outfit)"
                    >
                      {eventName}
                    </Heading>
                    <Text textAlign="justify" fontSize="1rem" fontWeight="400">
                      {description}
                    </Text>
                  </GridItem>
                </Grid>
                <Flex mt="-2rem" flexDir="column">
                  <Flex
                    justifyContent="flex-end"
                    alignItems="center"
                    mb="0.5rem"
                  >
                    <Flex
                      h="41px"
                      w="41px"
                      borderRadius="full"
                      justifyContent="center"
                      alignItems="center"
                      bg="#FFF1D1"
                    >
                      🙌
                    </Flex>
                    <Heading
                      fontSize="1.5rem"
                      fontWeight="500"
                      fontFamily="var(--font-outfit)"
                      ml="0.5rem"
                    >
                      Team
                    </Heading>
                  </Flex>
                  <Image w="full" src={teamImage} alt={eventName} />
                </Flex>
              </Flex>
            ),
          )}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default JourneySection;
