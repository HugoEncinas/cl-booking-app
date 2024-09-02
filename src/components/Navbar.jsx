import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box bg="teal.600" p={4}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg" color="white">
          Event Booking
        </Heading>
        <Flex>
          <Link to="/">
            <Button
              colorScheme="teal"
              variant="outline"
              mr={4}
              color="white"
              _hover={{ bg: 'teal.500', color: 'white' }}
            >
              Home
            </Button>
          </Link>
          <Link to="/my-bookings">
            <Button
              colorScheme="teal"
              variant="outline"
              color="white"
              _hover={{ bg: 'teal.500', color: 'white' }}
            >
              My Bookings
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
