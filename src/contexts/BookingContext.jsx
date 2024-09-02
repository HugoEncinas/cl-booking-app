import { createContext, useState, useContext, useEffect } from 'react'

const BookingContext = createContext()

export const useBooking = () => useContext(BookingContext)

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    // Retrieve bookings from localStorage if available
    const savedBookings = localStorage.getItem('bookings')
    return savedBookings ? JSON.parse(savedBookings) : []
  })

  const addBooking = (booking) => {
    const updatedBookings = [...bookings, booking]
    setBookings(updatedBookings)
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
  }

  const cancelBooking = (bookingId) => {
    const updatedBookings = bookings.filter((b) => b.id !== bookingId)
    setBookings(updatedBookings)
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
  }

  // Sync bookings with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings))
  }, [bookings])

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  )
}
