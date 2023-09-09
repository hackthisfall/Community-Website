import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import CalIcon from '../icons/Cal';
import StarIcon from '../icons/Star';
import ClockIcon from '../icons/Clock';
import LocationIcon from '../icons/Location';
import ScrollIcon from '../icons/Scroll';

interface HeroSectionProps {
  startTimestamp: moment.Moment | undefined;
  endTimestamp: moment.Moment | undefined;
  heading: string | undefined;
  location: string | undefined;
  description: string | undefined;
}

const HeroSection = ({
  startTimestamp,
  endTimestamp,
  heading,
  location,
  description,
}: HeroSectionProps) => {
  return (
    <Flex w="60%" flexDir="column" alignItems="center" justifyContent="center">
      <Heading
        fontSize="4.2rem"
        fontFamily="var(--font-poppins)"
        fontWeight="600"
        color="black"
        textAlign="center"
        lineHeight="150%"
      >
        Hack This Fall Chandigarh City Meetup
      </Heading>
      <Flex alignItems="center" justifyContent="center" my="2rem" gap="0.5rem">
        <CalIcon />
        <Text>{startTimestamp?.format('Do MMMM,YYYY')}</Text>
        <StarIcon />
        <ClockIcon />
        <Text>
          {`${startTimestamp?.format('H:mm A')} to
                ${endTimestamp?.format('H:mm A')}`}
        </Text>
        <StarIcon />
        <LocationIcon />
        <Text>Venue: {location}</Text>
      </Flex>
      <Text
        fontSize="1.15rem"
        fontFamily="var(--font-poppins)"
        fontWeight="400"
        color="black"
        w="90%"
        align="center"
      >
        {description}
      </Text>
      <Button
        my="2rem"
        px="2rem"
        w="fit-content"
        borderRadius="1.875rem"
        backgroundColor="#B281FE !important"
        color="white"
        display="inline-flex"
        height="3.2rem"
        justifyContent="center"
        alignItems="center"
        fontSize="1.1rem"
        fontWeight="700"
        _hover={{
          background: '#B281FE',
          color: 'white',
        }}
      >
        Register for the event
      </Button>
      <ScrollIcon />
    </Flex>
  );
};

export default HeroSection;
