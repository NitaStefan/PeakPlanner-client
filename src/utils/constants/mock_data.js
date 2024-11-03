let planId = 0
let activityId = 0
let stepId = 0

const workdayPlan = {
  id: planId++,
  title: "Workday",
  type: "daily",
  activities: [
    {
      id: activityId++,
      startTime: "9:10",
      endTime: "12:00",
      name: "morning routine",
      priority: "high",
      steps: [
        {
          id: stepId++,
          duration: "45m",
          description: "Take a shower, wash my face and brush my teeth", // here we can add references to the project steps
        },
        {
          id: stepId++,
          duration: "1h 15m",
          description: "Take a walk, drink coffee and have breakfast",
        },
        // 50 min left from this activity but it's ok
      ],
    },
    {
      id: activityId++,
      startTime: "12:30",
      endTime: "14:00",
      name: "work block 1",
      priority: "high",
      steps: [
        {
          id: stepId++,
          duration: "1h",
          description: "Focus on project A",
        },
        {
          id: stepId++,
          duration: "30m",
          description: "Reply to emails and messages",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "14:15",
      endTime: "15:00",
      name: "afternoon exercise",
      priority: "medium",
      steps: [
        {
          id: stepId++,
          duration: "15m",
          description: "Stretching and warm-up",
        },
        {
          id: stepId++,
          duration: "30m",
          description: "Jogging",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "15:30",
      endTime: "17:30",
      name: "work block 2",
      priority: "high",
      steps: [
        {
          id: stepId++,
          duration: "1h 30m",
          description: "Focus on project B",
        },
        {
          id: stepId++,
          duration: "30m",
          description: "Team meeting",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "18:00",
      endTime: "19:00",
      name: "evening routine",
      priority: "optional",
      steps: [
        {
          id: stepId++,
          duration: "30m",
          description: "Dinner preparation",
        },
        {
          id: stepId++,
          duration: "30m",
          description: "Eat dinner and relax",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "19:30",
      endTime: "21:00",
      name: "learning and personal growth",
      priority: "medium",
      steps: [
        {
          id: stepId++,
          duration: "45m",
          description: "Read a book on personal development",
        },
        {
          id: stepId++,
          duration: "45m",
          description: "Practice coding challenges",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "21:30",
      endTime: "22:00",
      name: "winding down",
      priority: "light",
      steps: [
        {
          id: stepId++,
          duration: "30m",
          description: "Meditate and review the day",
        },
      ],
    },
  ],
}

const weekdayPlan = {
  id: planId++,
  title: "Planning the weekend",
  type: "daily",
  activities: [],
}

const germanPlan = {
  id: planId++,
  title: "Achieve C1 Level in German",
  type: "goal",
  activities: [
    {
      id: activityId++,
      startTime: "2024-10-30",
      endTime: "2024-11-15",
      name: "Beginner Grammar and Vocabulary",
      priority: "high",
      steps: [
        {
          id: stepId++,
          duration: "5d", // Duration in days
          description: "Learn basic grammar rules and sentence structure",
        },
        {
          id: stepId++,
          duration: "10d",
          description: "Memorize 500 essential German words",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "2024-11-16",
      endTime: "2024-12-15",
      name: "Listening and Pronunciation Practice",
      priority: "medium",
      steps: [
        {
          id: stepId++,
          duration: "15d",
          description: "Daily listening practice with German podcasts",
        },
        {
          id: stepId++,
          duration: "15d",
          description: "Practice pronunciation using language learning apps",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "2025-01-10",
      endTime: "2025-02-28",
      name: "Intermediate Grammar and Conversation",
      priority: "high",
      steps: [
        {
          id: stepId++,
          duration: "20d",
          description: "Study intermediate grammar, including verb tenses",
        },
        {
          id: stepId++,
          duration: "10d",
          description: "Practice conversational German with a tutor",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "2025-03-01",
      endTime: "2025-04-30",
      name: "Reading and Comprehension",
      priority: "medium",
      steps: [
        {
          id: stepId++,
          duration: "15d",
          description: "Read short stories and articles in German",
        },
        {
          id: stepId++,
          duration: "15d",
          description: "Summarize and discuss reading materials",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "2025-05-01",
      endTime: "2025-06-30",
      name: "Writing Practice",
      priority: "medium",
      steps: [
        {
          id: stepId++,
          duration: "20d",
          description: "Write essays and daily journal entries in German",
        },
        {
          id: stepId++,
          duration: "10d",
          description: "Get feedback on writing from a language exchange partner",
        },
      ],
    },
    {
      id: activityId++,
      startTime: "2025-07-01",
      endTime: "2025-09-30",
      name: "Advanced Conversation and Test Preparation",
      priority: "high",
      steps: [
        {
          id: stepId++,
          duration: "30d",
          description: "Intensive conversation practice with a C1 tutor",
        },
        {
          id: stepId++,
          duration: "30d",
          description: "Prepare for the C1 German exam with mock tests",
        },
      ],
    },
  ],
}

const somePlan = {
  id: planId++,
  title: "Not much of a plan",
  type: "goal",
  activities: [],
}

export default [workdayPlan, weekdayPlan, germanPlan, somePlan]

// const durationString = "5d 3h 20m"; // Example duration

// // Regex to capture days, hours, and minutes
// const customRegex = /(?:(\d+)d)?\s*(?:(\d+)h)?\s*(?:(\d+)m)?/;
// const matches = durationString.match(customRegex);

// const days = matches[1] ? parseInt(matches[1]) : 0;
// const hours = matches[2] ? parseInt(matches[2]) : 0;
// const minutes = matches[3] ? parseInt(matches[3]) : 0;

// console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}`);

//   "2024-10-30T15:45" // Time + hour
