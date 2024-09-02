import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { BookingProvider } from '@contexts/BookingContext'
import { EventProvider } from '@contexts/EventContext'
import HomeScreen from '@components/HomeScreen'
import EventDetailsScreen from '@components/EventDetailsScreen'
import BookingsScreen from '@components/BookingsScreen'
import Navbar from '@components/Navbar'

function App() {
  return (
    <EventProvider>
      <BookingProvider>
        <ChakraProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/event/:id" element={<EventDetailsScreen />} />
              <Route path="/my-bookings" element={<BookingsScreen />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </BookingProvider>
    </EventProvider>
  )
}

export default App
