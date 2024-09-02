import { createContext, useState, useContext, useEffect } from 'react'

const EventContext = createContext()

export const useEvent = () => useContext(EventContext)

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    // Retrieve events from localStorage if available
    const savedEvents = localStorage.getItem('events')
    return savedEvents ? JSON.parse(savedEvents) : []
  })

  // Sync events with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  )
}
