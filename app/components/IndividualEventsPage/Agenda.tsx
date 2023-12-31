import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import TimelineIcon from '@/app/components/icons/Timeline';

interface AgendaSectionProps {
  description: string | undefined;
  agenda: string[][] | undefined;
}

const AgendaSection = ({ description, agenda }: AgendaSectionProps) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mb="4rem"
      w="full"
      flexDir="column"
      display="flex"
    >
      <Heading
        fontSize="3.5rem"
        fontFamily="var(--font-poppins)"
        fontWeight="600"
        color="black"
        textAlign="center"
        lineHeight="150%"
      >
        Agenda
      </Heading>
      <Text
        mt="3rem"
        mb="3.5rem"
        fontSize="1.15rem"
        fontFamily="var(--font-poppins)"
        fontWeight="400"
        color="black"
        w={{ base: '90%', lg: '50%' }}
        align="center"
      >
        {description}
      </Text>
      {!isMobile ? (
        <Flex>
          <Flex gap={{ base: '2rem', md: '4rem' }} flexDir="column">
            {agenda?.map((item, index) => {
              return (
                <Flex
                  fontSize="1rem"
                  fontFamily="var(--font-poppins)"
                  fontWeight="500"
                  color="black"
                  alignItems="center"
                  h="37px"
                  key={index}
                >
                  {item[0]}
                </Flex>
              );
            })}
          </Flex>
          <Flex
            gap={{ base: '2rem', md: '4rem' }}
            mx={{ base: '2rem', md: '4rem' }}
            position="relative"
            flexDir="column"
          >
            {agenda?.map((_, index) => {
              return <TimelineIcon key={index} />;
            })}
            <Box
              left="50%"
              transform="translate(-50%, 0)"
              position="absolute"
              borderLeft="2px solid #CDCDCD"
              h="full"
              zIndex="-1"
            />
          </Flex>
          <Flex gap={{ base: '2rem', md: '4rem' }} flexDir="column">
            {agenda?.map((item, index) => {
              return (
                <Flex
                  fontSize="1rem"
                  fontFamily="var(--font-poppins)"
                  fontWeight="500"
                  color="black"
                  alignItems="center"
                  h="37px"
                  key={index}
                >
                  {item[1]}
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      ) : (
        <Flex gap='2rem' w='full' justifyContent='center'>
          <Flex
            gap={{ base: '2rem', md: '4rem' }}
            position="relative"
            flexDir="column"
          >
            {agenda?.map((_, index) => {
              return <TimelineIcon key={index} />;
            })}
            <Box
              left="50%"
              transform="translate(-50%, 0)"
              position="absolute"
              borderLeft="2px solid #CDCDCD"
              h="full"
              zIndex="-1"
            />
          </Flex>
          <Flex gap={{ base: '2rem', md: '4rem' }} flexDir="column">
            {agenda?.map((item, index) => {
              return (
                <Flex
                  fontSize="1rem"
                  fontFamily="var(--font-poppins)"
                  fontWeight="500"
                  color="black"
                  alignItems="center"
                  h="37px"
                  key={index}
                >
                  {item[0]}
                  <br />
                  {item[1]}
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default AgendaSection;
