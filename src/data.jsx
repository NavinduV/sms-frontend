import GalleryImg1 from './assets/img/gallery/1.png';
import GalleryImg2 from './assets/img/gallery/2.png';
import GalleryImg3 from './assets/img/gallery/3.png';
import GalleryImg4 from './assets/img/gallery/4.png';
import GalleryImg5 from './assets/img/gallery/5.png';
import GalleryImg6 from './assets/img/gallery/6.png';
import GalleryImg7 from './assets/img/gallery/7.png';
import GalleryImg8 from './assets/img/gallery/8.png';
import {IoMdArrowForward} from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


export const galleryData = {
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'Colombo office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'A108 Main Street, Colombo, Sri Lanka',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+94 778 670 303',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'tattoostudio@developer101.com',
      }
    },
    // {
    //   title: 'NYC office',
    //   subtitle:
    //     'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    //   address: {
    //     icon: <FaMapMarkerAlt />,
    //     name: '1630 Elm Drive, New York City',
    //   },
    //   phone: {
    //     icon: <FaPhoneAlt />,
    //     number: '+49 34 36573355',
    //   },
    //   email: {
    //     icon: <FaEnvelope />,
    //     address: 'contact@yourcompany.com',
    //   },
    //   link: 'Get location',
    // },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};