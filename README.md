# Event Booking Application

This is a simple event booking application built using React and Vite. The application allows users to view events, book tickets, and manage their bookings.

## Live Demo

Check out the live demo of the application [here](https://event-booking-me8t4qp86-hugo-encinas-projects.vercel.app/).

## Installation

1. **Clone the Repository**: Clone this repository to your local machine using Git:

   ```
   git clone https://github.com/HugoEncinas/cl-booking-app.git
   ```

2. **Navigate to the Project Directory**: Change into the directory of the cloned repository:

   ```
   cd cl-booking-app
   ```

3. **Install Dependencies**: Install the required dependencies using npm:

   ```
   npm install
   ```

4. **Run app**:
   ```
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) with your browser to see the page.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides an optimized development environment for modern web applications.
- **Chakra UI**: A simple, modular, and accessible component library for React.

## Description

Objective: Create a simple event booking app where users can browse events, view details, and book tickets. The app should allow users to see upcoming events and manage their bookings.

Requirements:

**-Home Screen:**

Display a list of upcoming events with titles, dates, locations, and images.
Include a filter option to sort events by date or location.

**-Event Details Screen:**

Show detailed information about the event, including the description, schedule, and available ticket types.
Include a "Book Now" button that allows users to book tickets for the event.

**-Booking Flow:**

After clicking "Book Now," guide the user through a simple booking process:
Select ticket type (e.g., General Admission, VIP, etc.).
Enter attendee information (name, email).
Confirm booking.

**-My Bookings Screen:**

Display a list of events the user has booked.
Each booking should show the event name, date, and a button to view or cancel the booking.

**-State Management:**

Use React's context API or a state management library (like Redux) to manage the application's state, especially for user bookings and event data.

**-Booking Cancellation:**

Allow users to cancel a booking from the "My Bookings" screen.
Confirm cancellation with a dialog box.

**-Constraints:**

Emphasize clean, maintainable code with comments explaining key parts.
Candidates should not rely on external APIs for event data; they can hardcode a small set of events within the app.

---
