// start time of the first activity should be the current date then use utility function to calculate the rest
export default {
  title: "Learn a New Language",
  type: "GOAL",
  activities: [
    {
      startTime: "2024-12-01",
      endTime: "2024-12-07",
      name: "Learn Basic Vocabulary",
      priority: "HIGH",
      steps: [
        { duration: "2d", description: "Memorize 50 common words and their meanings" },
        { duration: "3d", description: "Practice words in sentences through writing" },
        { duration: "2d", description: "Review and practice flashcards" },
      ],
    },
    {
      startTime: "2024-12-08",
      endTime: "2024-12-14",
      name: "Practice Basic Conversations",
      priority: "MEDIUM",
      steps: [
        { duration: "3d", description: "Learn essential phrases for greetings and small talk" },
        { duration: "3d", description: "Practice conversations with a language partner or app" },
        { duration: "1d", description: "Record and listen to your own speaking practice" },
      ],
    },
    {
      startTime: "2024-12-15",
      endTime: "2024-12-21",
      name: "Master Basic Grammar Rules",
      priority: "HIGH",
      steps: [
        { duration: "2d", description: "Understand sentence structure and word order" },
        { duration: "3d", description: "Practice grammar exercises and drills" },
        { duration: "2d", description: "Apply grammar in writing and speaking" },
      ],
    },
    {
      startTime: "2024-12-22",
      endTime: "2024-12-28",
      name: "Develop Listening Skills",
      priority: "LIGHT",
      steps: [
        { duration: "3d", description: "Listen to beginner podcasts or dialogues" },
        { duration: "2d", description: "Watch videos with subtitles in the target language" },
        { duration: "2d", description: "Practice shadowing audio clips to mimic pronunciation" },
      ],
    },
    {
      startTime: "2024-12-29",
      endTime: "2025-01-04",
      name: "Practice Reading and Writing",
      priority: "MEDIUM",
      steps: [
        { duration: "2d", description: "Read short articles or children's books" },
        { duration: "3d", description: "Write daily journal entries in the target language" },
        { duration: "2d", description: "Learn to recognize and write common idioms" },
      ],
    },
  ],
}
