import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Quiz from './components/Quiz';

var QUESTIONS = [

  {
    
    id: 1,
    text: 'Who is The Prime Minister Of INDIA ?',
    choices: [
      
      {
        
        id: 'a',
        text: 'Narendra Modi'
      },
      {
        id: 'b',
        text: 'Hitesh Choudhary'
      },
      {
        id: 'c',
        text: 'MS Dhoni'
       }
    ],
    correct: 'a'
  },
  {
    id: 2,
    text: 'Suresh Raina and which Indian Player Announced Retirement?',
    choices: [
      {
        id: 'a',
        text: 'Sachin Tendulkar'
      },
      {
        id: 'b',
        text: 'Munaf Patel'
      },
      {
        id: 'c',
        text: 'MS Dhoni'
       }
    ],
    correct: 'c'
  },

  {
    id: 3,
    text: 'Computer Science Branch is related to which Course?',
    choices: [
      {
        id: 'a',
        text: 'Cricket'
      },
      {
        id: 'b',
        text: 'Engineering'
      },
      {
        id: 'c',
        text: 'Tennis'
       }
    ],
    correct: 'b'
  },

  {
    id: 4,
    text: 'Full Form of TCS?',
    choices: [
      {
        id: 'a',
        text: 'Tata Cunsultancy Service'
      },
      {
        id: 'b',
        text: 'Tagore Consultancy Service'
      },
      {
        id: 'c',
        text: 'Tennis Consultancy Service'
       }
    ],
    correct: 'a'
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Quiz questions={QUESTIONS}/>
  </React.StrictMode>,
  document.getElementById('root')
);



