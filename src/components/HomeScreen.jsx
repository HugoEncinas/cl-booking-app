import { useEffect } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useEvent } from '@contexts/EventContext'
import { fetchEvents } from '@services/eventService'

const HomeScreen = () => {
  const { events, setEvents } = useEvent()
  const navigate = useNavigate()

  useEffect(() => {
    const loadEvents = async () => {
      const eventsData = await fetchEvents()
      setEvents(eventsData)
    }

    loadEvents()
  }, [setEvents])

  const handleFilter = (criteria) => {
    if (criteria === 'date') {
      // sort by events occurring first
      setEvents([...events].sort((a, b) => new Date(a.date) - new Date(b.date)))
    } else if (criteria === 'location') {
      // sort by events' city alphabetically
      setEvents(
        [...events].sort((a, b) => a.location.localeCompare(b.location))
      )
    }
  }

  const handleDetails = (eventId) => {
    navigate(`/event/${eventId}`) // Navigate to event details
  }

  return (
    <Box w="100%" p={6}>
      <Heading as="h1" size="xl" mb={6}>
        Upcoming Events
      </Heading>
      <ButtonGroup spacing={4} mb={8}>
        <Button colorScheme="teal" onClick={() => handleFilter('date')}>
          Sort by Date
        </Button>
        <Button colorScheme="teal" onClick={() => handleFilter('location')}>
          Sort by Location
        </Button>
      </ButtonGroup>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {events.map((event) => (
          <Box
            key={event.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
          >
            <Image
              src={event.image}
              alt={event.title}
              borderRadius="md"
              mb={4}
            />
            <Heading as="h3" size="md" mb={2}>
              {event.title}
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={4}>
              {event.date} - {event.location}
            </Text>
            <Button colorScheme="blue" onClick={() => handleDetails(event.id)}>
              View Details
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default HomeScreen
