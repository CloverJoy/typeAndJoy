const mongoose = require('mongoose');
const { bulk } = require('./controller.js');

mongoose.connect('mongodb://localhost:/typeandjoy', { useNewUrlParser: true, useUnifiedTopology: true })

const EI = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image101.jpg';
const SN = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image102.jpg';
const TF = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image103.jpg';
const JP = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image104.jpg';


const datas = [
  {
    question: 'You enjoy vibrant social events with lots of people.',
    type: 'E/I',
    answer: 'E',
    pic: EI,
  },
  {
    question: 'You often spend time exploring unrealistic yet intriguing ideas.',
    type: 'S/N',
    answer: 'N',
    pic: SN,
  },
  {
    question: 'Your travel plans are more likely to look like a rough list of ideas than a detailed itinerary.',
    type: 'J/P',
    answer: 'P',
    pic: JP,
  },
  {
    question: 'If your friend is sad about something, your first instinct is to support them emotionally, not try to solve their problem.',
    type: 'T/F',
    answer: 'F',
    pic: TF,
  },
  {
    question: 'I prefer to follow a schedule',
    type: 'J/P',
    answer: 'J',
    pic: JP,
  },
   {
    question: 'I feel uncomfortable when I disagree with someone',
    type: 'T/F',
    answer: 'F',
    pic: TF,
  },
   {
    question: 'I enjoy philosophical discussions',
    type: 'S/N',
    answer: 'N',
    pic: SN,
  },
   {
    question: 'I like to spend my free time alone',
    type: 'E/I',
    answer: 'I',
    pic: EI,
  },
   {
    question: 'It would be a challenge for you to spend the whole weekend all by yourself without feeling bored.',
    type: 'E/I',
    answer: 'I',
    pic: EI,
  },
   {
    question: 'When it comes to making life-changing choices, you mostly listen to your heart rather than your head.',
    type: 'T/F',
    answer: 'F',
    pic: TF,
  },
   {
    question: 'You like discussing different views and theories on what the world could look like in the future.',
    type: 'S/N',
    answer: 'N',
    pic: SN,
  },
   {
    question: 'When starting to work on a project, you prefer to make as many decisions upfront as possible.',
    type: 'J/P',
    answer: 'J',
    pic: JP,
  },

];

bulk(datas)
  .then(() => mongoose.connection.close());
