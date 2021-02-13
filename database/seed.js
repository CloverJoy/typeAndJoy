const mongoose = require('mongoose');
const { bulk } = require('./controller.js');

mongoose.connect('mongodb://localhost:/typeandjoy', { useNewUrlParser: true, useUnifiedTopology: true })

const EI = 'https://loremflickr.com/320/240/party,home';
const SN = 'https://loremflickr.com/320/240/technician,chess';
const TF = 'https://loremflickr.com/320/240/negotiate,thinker';
const JP = 'https://loremflickr.com/320/240/judge,chill';


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
];

bulk(datas)
  .then(() => mongoose.connection.close());
