import concertImg from '@assets/concert.avif'
import artImg from '@assets/art.avif'
import animeImg from '@assets/anime.avif'

export const fetchEvents = async () => {
  return [
    {
      id: 1,
      title: 'Concert',
      date: '2024-09-15',
      location: 'Monterrey',
      image: concertImg,
      description: 'A great concert!',
      schedule: [
        {
          time: '12:00 PM',
          activity: 'Opening Ceremony',
        },
        {
          time: '1:00 PM',
          activity: 'Live Performance by Artist A',
        },
        {
          time: '3:00 PM',
          activity: 'DJ Set',
        },
        {
          time: '5:00 PM',
          activity: 'Closing Performance by Artist B',
        },
      ],
      ticketTypes: [
        {
          type: 'General Admission',
          price: '$50',
        },
        {
          type: 'VIP Pass',
          price: '$150',
        },
      ],
    },
    {
      id: 2,
      title: 'Art Expo',
      date: '2024-09-20',
      location: 'Los Angeles',
      image: artImg,
      description: 'Explore art!',
      schedule: [
        {
          time: '10:00 AM',
          activity: 'Exhibition Opening',
        },
        {
          time: '12:00 PM',
          activity: 'Guided Tour: Highlights of the Expo',
        },
        {
          time: '3:00 PM',
          activity: 'Networking Event with Artists',
        },
      ],
      ticketTypes: [
        {
          type: 'General Admission',
          price: '$30',
        },
        {
          type: 'Student Pass',
          price: '$20',
        },
        {
          type: 'VIP Pass',
          price: '$100',
        },
      ],
    },
    {
      id: 3,
      title: 'Anime Convention',
      date: '2024-09-16',
      location: 'Los Angeles',
      image: animeImg,
      description:
        'Experience the celebration of anime culture at Anime Convention 2024!',
      schedule: [
        {
          time: '9:00 AM',
          activity: 'Doors Open',
        },
        {
          time: '10:00 AM',
          activity: 'Cosplay Contest Preliminaries',
        },
        {
          time: '12:00 PM',
          activity: 'Voice Actor Panel: Meet the Stars',
        },
        {
          time: '2:00 PM',
          activity: 'Exclusive Anime Screening',
        },
        {
          time: '4:00 PM',
          activity: 'Cosplay Contest Finals',
        },
        {
          time: '6:00 PM',
          activity: 'Closing Ceremony and Awards',
        },
      ],
      ticketTypes: [
        {
          type: 'General Admission',
          price: '$40',
        },
        {
          type: 'Weekend Pass',
          price: '$100',
        },
        {
          type: 'VIP Pass',
          price: '$200',
        },
      ],
    },
  ]
}
