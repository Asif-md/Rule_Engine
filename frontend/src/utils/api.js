var quizQuestions = [
  {
    question: "Are you a permanent resident in the United States?",
    answers: [
      {
        type: 5000,
        content: "Yes",
      },
      {
        type: 0,
        content: "No",
      },
    ],
  },
  {
    question: "Are you a working professional?",
    answers: [
      {
        type: 5000,
        content: "Yes",
      },
      {
        type: 0,
        content: "No",
      },
    ],
  },
  {
    question: "Are you an active smoker?",
    answers: [
      {
        type: -2000,
        content: "Yes",
      },
      {
        type: 0,
        content: "No",
      },
    ],
  },
  {
    question: "Have you met with an accident in last 5 years?",
    answers: [
      {
        type: -1000,
        content: "Yes",
      },
      {
        type: 0,
        content: "No",
      },
    ],
  },
  {
    question:
      "Have you been diagnosed with any serious illnesses in the last 5 years?",
    answers: [
      {
        type: -750,
        content: "Yes",
      },
      {
        type: 0,
        content: "No",
      },
    ],
  },
  {
    question: "Have you been convicted of any crime in the last 10 years?",
    answers: [
      {
        type: -750,
        content: "Yes",
      },
      {
        type: 0,
        content: "No",
      },
    ],
  },
  {
    question:
      "Have you been charged with any speeding tickets in the last 3 years?",
    answers: [
      {
        type: -500,
        content: "Yes",
      },
      {
        type: 0,
        content: "No",
      },
    ],
  },
  {
    question: "Press yes to check your covered Amount",
    answers: [
      {
        type: 0,
        content: "Yes",
      },
    ],
  },
];

export default quizQuestions;
