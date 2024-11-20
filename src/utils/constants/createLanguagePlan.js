import addDaysToDate from "../addDaysToDate"
import getCurrentDate from "../getCurrentDate"

const currentDate = getCurrentDate()

export default {
  title: "Learn a New Language",
  type: "GOAL",
  activities: [
    {
      startTime: currentDate,
      endTime: addDaysToDate(currentDate, 7),
      name: "Learn Basic Vocabulary",
      priority: "HIGH",
      steps: [
        { duration: "3d", description: "Memorize 50 common words and their meanings" },
        { duration: "3d", description: "Practice words in sentences through writing" },
        { duration: "2d", description: "Review and practice flashcards" },
      ],
    },
    {
      startTime: addDaysToDate(currentDate, 8),
      endTime: addDaysToDate(currentDate, 16),
      name: "Practice Basic Conversations",
      priority: "MEDIUM",
      steps: [
        { duration: "4d", description: "Learn essential phrases for greetings and small talk" },
        { duration: "3d", description: "Practice conversations with a language partner or app" },
        { duration: "2d", description: "Record and listen to your own speaking practice" },
      ],
    },
    {
      startTime: addDaysToDate(currentDate, 17),
      endTime: addDaysToDate(currentDate, 26),
      name: "Master Basic Grammar Rules",
      priority: "HIGH",
      steps: [
        { duration: "2d", description: "Understand sentence structure and word order" },
        { duration: "5d", description: "Practice grammar exercises and drills" },
        { duration: "3d", description: "Apply grammar in writing and speaking" },
      ],
    },
    {
      startTime: addDaysToDate(currentDate, 27),
      endTime: addDaysToDate(currentDate, 36),
      name: "Develop Listening Skills",
      priority: "LIGHT",
      steps: [
        { duration: "6d", description: "Listen to beginner podcasts or dialogues" },
        { duration: "2d", description: "Watch videos with subtitles in the target language" },
        { duration: "2d", description: "Practice shadowing audio clips to mimic pronunciation" },
      ],
    },
    {
      startTime: addDaysToDate(currentDate, 37),
      endTime: addDaysToDate(currentDate, 50),
      name: "Practice Reading and Writing",
      priority: "MEDIUM",
      steps: [
        { duration: "8d", description: "Read short articles or children's books" },
        { duration: "3d", description: "Write daily journal entries in the target language" },
        { duration: "3d", description: "Learn to recognize and write common idioms" },
      ],
    },
  ],
}
