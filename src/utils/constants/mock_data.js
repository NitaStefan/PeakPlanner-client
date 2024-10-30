const daily = {
  workday: [
    {
      id: 1,
      startTime: "9:10",
      endTime: "12:00",
      name: "morning routine",
      priority: "high",
      steps: [
        {
          duration: "45m",
          description: "Take a shower, wash my face and brush my teeth", // here we can add references to the project steps
        },
        {
          duration: "1h 15m",
          description: "Take a walk, drink coffee and have breakfast",
        },
        // 50 min left from this activity but it's ok
      ],
    },
    {
      id: 2,
      startTime: "12:30",
      endTime: "14:00",
      name: "work block 1",
      priority: "high",
      steps: [
        {
          duration: "1h",
          description: "Focus on project A",
        },
        {
          duration: "30m",
          description: "Reply to emails and messages",
        },
      ],
    },
    {
      id: 3,
      startTime: "14:15",
      endTime: "15:00",
      name: "afternoon exercise",
      priority: "medium",
      steps: [
        {
          duration: "15m",
          description: "Stretching and warm-up",
        },
        {
          duration: "30m",
          description: "Jogging",
        },
      ],
    },
    {
      id: 4,
      startTime: "15:30",
      endTime: "17:30",
      name: "work block 2",
      priority: "high",
      steps: [
        {
          duration: "1h 30m",
          description: "Focus on project B",
        },
        {
          duration: "30m",
          description: "Team meeting",
        },
      ],
    },
    {
      id: 5,
      startTime: "18:00",
      endTime: "19:00",
      name: "evening routine",
      priority: "optional",
      steps: [
        {
          duration: "30m",
          description: "Dinner preparation",
        },
        {
          duration: "30m",
          description: "Eat dinner and relax",
        },
      ],
    },
    {
      id: 6,
      startTime: "19:30",
      endTime: "21:00",
      name: "learning and personal growth",
      priority: "medium",
      steps: [
        {
          duration: "45m",
          description: "Read a book on personal development",
        },
        {
          duration: "45m",
          description: "Practice coding challenges",
        },
      ],
    },
    {
      id: 7,
      startTime: "21:30",
      endTime: "22:00",
      name: "winding down",
      priority: "light",
      steps: [
        {
          duration: "30m",
          description: "Meditate and review the day",
        },
      ],
    },
  ],
  weekday: {},
}

const achieveC1InGerman = [
  {
    id: 1,
    startDate: "2024-10-30",
    endDate: "2024-11-15",
    name: "Beginner Grammar and Vocabulary",
    priority: "high",
    steps: [
      {
        duration: 5, // Duration in days
        description: "Learn basic grammar rules and sentence structure",
      },
      {
        duration: 10,
        description: "Memorize 500 essential German words",
      },
    ],
  },
  {
    id: 2,
    startDate: "2024-11-16",
    endDate: "2024-12-15",
    name: "Listening and Pronunciation Practice",
    priority: "medium",
    steps: [
      {
        duration: 15,
        description: "Daily listening practice with German podcasts",
      },
      {
        duration: 15,
        description: "Practice pronunciation using language learning apps",
      },
    ],
  },
  {
    id: 3,
    startDate: "2025-01-10",
    endDate: "2025-02-28",
    name: "Intermediate Grammar and Conversation",
    priority: "high",
    steps: [
      {
        duration: 20,
        description: "Study intermediate grammar, including verb tenses",
      },
      {
        duration: 10,
        description: "Practice conversational German with a tutor",
      },
    ],
  },
  {
    id: 4,
    startDate: "2025-03-01",
    endDate: "2025-04-30",
    name: "Reading and Comprehension",
    priority: "medium",
    steps: [
      {
        duration: 15,
        description: "Read short stories and articles in German",
      },
      {
        duration: 15,
        description: "Summarize and discuss reading materials",
      },
    ],
  },
  {
    id: 5,
    startDate: "2025-05-01",
    endDate: "2025-06-30",
    name: "Writing Practice",
    priority: "medium",
    steps: [
      {
        duration: 20,
        description: "Write essays and daily journal entries in German",
      },
      {
        duration: 10,
        description: "Get feedback on writing from a language exchange partner",
      },
    ],
  },
  {
    id: 6,
    startDate: "2025-07-01",
    endDate: "2025-09-30",
    name: "Advanced Conversation and Test Preparation",
    priority: "high",
    steps: [
      {
        duration: 30,
        description: "Intensive conversation practice with a C1 tutor",
      },
      {
        duration: 30,
        description: "Prepare for the C1 German exam with mock tests",
      },
    ],
  },
]
const goals = [achieveC1InGerman]

// const durationString = "5d 3h 20m"; // Example duration

// // Regex to capture days, hours, and minutes
// const customRegex = /(?:(\d+)d)?\s*(?:(\d+)h)?\s*(?:(\d+)m)?/;
// const matches = durationString.match(customRegex);

// const days = matches[1] ? parseInt(matches[1]) : 0;
// const hours = matches[2] ? parseInt(matches[2]) : 0;
// const minutes = matches[3] ? parseInt(matches[3]) : 0;

// console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}`);

//   "2024-10-30T15:45" // date + hour
