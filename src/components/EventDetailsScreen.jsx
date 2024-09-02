import { useParams } from 'react-router-dom'
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Button,
  SimpleGrid,
  Divider,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { useEvent } from '@contexts/EventContext'
import { useBooking } from '@contexts/BookingContext'

const EventDetailsScreen = () => {
  const { id } = useParams() // Get the event ID from the URL params
  const { events } = useEvent()
  const { addBooking } = useBooking()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  // Find the event that matches the ID from the URL
  const event = events.find((event) => event.id === parseInt(id))

  if (!event) {
    return <Text>Event not found.</Text> // Handle case where the event isn't found
  }

  const handleBooking = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target) // Create a FormData object from the form

    // Extract values from formData
    const bookingData = {
      id: uuidv4(),
      eventId: event.id,
      ticketType: formData.get('ticketType'),
      attendeeName: formData.get('attendeeName'),
      attendeeEmail: formData.get('attendeeEmail'),
    }

    addBooking(bookingData)
    onClose()
    toast({
      title: 'Booking Successful!',
      description: `You have successfully booked a ${bookingData.ticketType} ticket for ${bookingData.attendeeName}.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Box w="100%" p={6}>
      <Flex justify="center" align="center" minHeight="100vh">
        <VStack spacing={8} align="center">
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="lg"
            bg="white"
          >
            <Box mb={4}>
              <Heading as="h1" size="2xl" mb={2} color="teal.600">
                {event.title}
              </Heading>
              <Text fontSize="lg" color="gray.600" fontStyle="italic">
                {event.date} - {event.location}
              </Text>
            </Box>

            <Image
              src={event.image}
              alt={event.title}
              borderRadius="md"
              objectFit="cover"
              aspectRatio={16 / 9}
              mb={4}
              boxShadow="md"
              width="600px"
              height="350px"
            />

            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bg="gray.50"
              boxShadow="sm"
            >
              <Text fontSize="md" lineHeight="1.6" color="gray.700">
                {event.description}
              </Text>
            </Box>
          </Box>

          <Box w="100%">
            <Heading as="h2" size="lg" mb={4}>
              Schedule
            </Heading>
            <SimpleGrid columns={[1, 2]} spacing={4}>
              {event.schedule.map((item, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="md"
                  p={4}
                  bg="gray.50"
                  boxShadow="lg"
                  transition="transform 0.2s, box-shadow 0.2s"
                  _hover={{
                    boxShadow: 'lg',
                    transform: 'scale(1.05)',
                  }}
                  borderColor="blue.300"
                >
                  <Text fontWeight="bold" fontSize="lg">
                    {item.time}
                  </Text>
                  <Text fontSize="md">{item.activity}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box w="100%">
            <Heading as="h2" size="lg" mb={4}>
              Ticket Types
            </Heading>
            <SimpleGrid columns={[1, 3]} spacing={4}>
              {event.ticketTypes.map((ticket, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="md"
                  p={4}
                  bg="white"
                  boxShadow="lg"
                  transition="transform 0.2s, box-shadow 0.2s"
                  _hover={{
                    boxShadow: 'lg',
                    transform: 'scale(1.05)',
                  }}
                  borderColor="teal.300"
                >
                  <Text fontWeight="bold" fontSize="lg">
                    {ticket.type}
                  </Text>
                  <Text fontSize="md">{ticket.price}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Divider />

          <Button colorScheme="blue" mt={4} onClick={onOpen}>
            Book Now
          </Button>
        </VStack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleBooking}>
              <FormControl mb={4}>
                <FormLabel>Ticket Type</FormLabel>
                <Select name="ticketType">
                  {event.ticketTypes.map((ticket, index) => (
                    <option key={index} value={ticket.type}>
                      {ticket.type} - {ticket.price}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Attendee Name</FormLabel>
                <Input name="attendeeName" placeholder="Enter your name" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Attendee Email</FormLabel>
                <Input
                  name="attendeeEmail"
                  type="email"
                  placeholder="Enter your email"
                />
              </FormControl>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Confirm Booking
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default EventDetailsScreen
