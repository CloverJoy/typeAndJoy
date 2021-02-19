// RANDOM IMAGE FOR QUESTIONS
const EI = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image101.jpg';
const SN = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image102.jpg';
const TF = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image103.jpg';
const JP = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image104.jpg';

// MBTI QUESTIONS STORAGE
const mbtiQuestions = [
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
// console.log(mbtiQuestions);

export default mbtiQuestions;

// const generateAnswer = (question, isTrue) => {
//   const {type, answer} = question;
//   if (isTrue) {
//     return answer;
//   } else return type.replace('/', '').replace(answer, '');
// };

// console.log(generateAnswer(mbtiQuestions[0], true));