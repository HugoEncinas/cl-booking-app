import { useState } from 'react'

import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import { useEvent } from '@contexts/EventContext'
import { useBooking } from '@contexts/BookingContext'

const BookingsScreen = () => {
  const { events } = useEvent()
  const { bookings, cancelBooking } = useBooking()
  const toast = useToast()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedBookingId, setSelectedBookingId] = useState(null)

  const handleCancel = () => {
    if (selectedBookingId) {
      cancelBooking(selectedBookingId)
      toast({
        title: 'Booking Cancelled',
        description: 'Your booking has been successfully cancelled.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      })
      onClose()
    }
  }

  const handleViewEvent = (eventId) => {
    navigate(`/event/${eventId}`) // Navigate to event details
  }

  return (
    <Box w="100%" p={6}>
      <Heading as="h1" size="2xl" mb={6}>
        My Bookings
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {bookings.length > 0 ? (
          bookings.map((booking) => {
            // Find the corresponding event to get the event data
            const event = events.find((event) => event.id === booking.eventId)
            return (
              <Box
                key={booking.id}
                borderWidth="1px"
                borderRadius="md"
                p={4}
                bg="gray.50"
                boxShadow="md"
              >
                <Heading as="h2" size="lg" mb={2}>
                  {event ? event.title : 'Event not found'}
                </Heading>
                <Text fontSize="md" color="gray.600" mb={2}>
                  Date: {event ? event.date : 'Date not available'}
                </Text>
                <Text fontSize="md" color="gray.600" mb={2}>
                  Ticket Type: {booking.ticketType}
                </Text>
                <Text fontSize="md" color="gray.600" mb={2}>
                  Attendee Name: {booking.attendeeName}
                </Text>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => handleViewEvent(booking.eventId)}
                >
                  View
                </Button>
                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={() => {
                    setSelectedBookingId(booking.id)
                    onOpen()
                  }}
                >
                  Cancel
                </Button>
              </Box>
            )
          })
        ) : (
          <Text>No bookings found.</Text>
        )}
      </SimpleGrid>

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Cancellation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to cancel this booking?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleCancel}>
              Yes, Cancel
            </Button>
            <Button variant="ghost" onClick={onClose}>
              No, Keep Booking
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default BookingsScreen
