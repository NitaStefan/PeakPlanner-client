export default [
  {
    title: "Workday",
    type: "ROUTINE",
    activities: [
      {
        name: "The beginning of the day",
        startTime: "07:30",
        endTime: "09:30",
        priority: "HIGH",
        steps: [
          {
            description: "drink enough water, wash your face and get dressed",
            duration: "20m",
          },
          {
            description:
              "go outside and get some light exposure\nperform the activity you prepared the night before (exercise, meditate or read a few pages)",
            duration: "30m",
          },
          {
            description: "cook a healthy meal and get your coffee intake",
            duration: "35m",
          },
        ],
      },
      {
        name: "Track my progress",
        startTime: "10:00",
        endTime: "10:45",
        priority: "MEDIUM",
        steps: [
          {
            description:
              "get ready for the day, reflect on personal goals and review today's planned activities",
            duration: "15m",
          },
          {
            description:
              "track your progress so far and review your performances to check your consistency",
            duration: "30m",
          },
        ],
      },
      {
        name: "My first working session",
        startTime: "10:46",
        endTime: "13:30",
        priority: "HIGH",
        steps: [
          {
            description: "continue working on <@task1>",
            duration: "2h 34m",
          },
          {
            description: "review to work done and leave TODOs",
            duration: "10m",
          },
        ],
      },
      {
        name: "Mindfulness",
        startTime: "13:31",
        endTime: "14:00",
        priority: "LIGHT",
        steps: [
          {
            description: "practice meditation and gratitude",
            duration: "29m",
          },
        ],
      },
      {
        name: "Lunch Time",
        startTime: "14:30",
        endTime: "15:00",
        priority: "HIGH",
        steps: [
          {
            description: "cook or order a meal rich in protein and healthy fats",
            duration: "29m",
          },
        ],
      },
      {
        name: "My second working session",
        startTime: "15:30",
        endTime: "18:25",
        priority: "HIGH",
        steps: [
          {
            description:
              "check the current task for <@task2> and make sure you eliminate disctractions",
            duration: "2h 54m",
          },
        ],
      },
      {
        name: "Have dinner",
        startTime: "18:26",
        endTime: "19:00",
        priority: "HIGH",
        steps: [
          {
            description:
              "Opt for a light meal to enhance the night's sleep quality\n Discuss with family members about their day",
            duration: "34m",
          },
        ],
      },
      {
        name: "Networking",
        startTime: "20:00",
        endTime: "20:30",
        priority: "OPTIONAL",
        steps: [
          {
            description: "Connect with people from your circle and discuss ideas",
            duration: "30m",
          },
        ],
      },
      {
        name: "Evening Routine",
        startTime: "20:31",
        endTime: "23:00",
        priority: "HIGH",
        steps: [
          {
            description: "watch your favorite podcast",
            duration: "1h 10m",
          },
          {
            description: "think about and plan the actions for the next day",
            duration: "25m",
          },
          {
            description: "read a few pages before sleep time",
            duration: "34m",
          },
        ],
      },
    ],
  },
  {
    title: "Weekend",
    type: "ROUTINE",
    activities: [
      {
        name: "The beginning of the day",
        startTime: "08:00",
        endTime: "10:00",
        priority: "HIGH",
        steps: [
          {
            description: "drink enough water, wash your face and get dressed",
            duration: "20m",
          },
          {
            description: "take a morning walk or do light stretching",
            duration: "30m",
          },
          {
            description: "have a relaxed breakfast, enjoy a cup of coffee or tea",
            duration: "40m",
          },
        ],
      },
      {
        name: "Personal Time",
        startTime: "10:30",
        endTime: "12:00",
        priority: "MEDIUM",
        steps: [
          {
            description: "do something creative or fun (art, hobby, or explore a new interest)",
            duration: "45m",
          },
          {
            description: "reflect on the week, jot down thoughts in a journal",
            duration: "30m",
          },
        ],
      },
      {
        name: "Leisure or Social Activity",
        startTime: "12:30",
        endTime: "14:00",
        priority: "HIGH",
        steps: [
          {
            description:
              "spend quality time with friends/family or engage in a fun activity (e.g., outing, watching a movie, cooking together)",
            duration: "1h 30m",
          },
        ],
      },
      {
        name: "Lunch Time",
        startTime: "14:30",
        endTime: "15:00",
        priority: "HIGH",
        steps: [
          {
            description: "prepare a leisurely meal or order something enjoyable",
            duration: "30m",
          },
        ],
      },
      {
        name: "Afternoon Rest",
        startTime: "15:30",
        endTime: "17:00",
        priority: "LIGHT",
        steps: [
          {
            description: "take a nap or relax with a good book",
            duration: "1h 30m",
          },
        ],
      },
      {
        name: "Second Leisure Activity",
        startTime: "17:30",
        endTime: "19:00",
        priority: "MEDIUM",
        steps: [
          {
            description: "take time for a creative pursuit, exercise, or learn something new",
            duration: "1h 30m",
          },
        ],
      },
      {
        name: "Have Dinner",
        startTime: "19:30",
        endTime: "20:30",
        priority: "HIGH",
        steps: [
          {
            description: "cook a light, enjoyable meal or order something comforting",
            duration: "1h",
          },
        ],
      },
      {
        name: "Evening Relaxation",
        startTime: "21:00",
        endTime: "22:30",
        priority: "HIGH",
        steps: [
          {
            description: "watch a movie, listen to music, or do something calming",
            duration: "1h",
          },
          {
            description: "prepare for bed, read a few pages from a book, or meditate",
            duration: "30m",
          },
        ],
      },
    ],
  },
]
