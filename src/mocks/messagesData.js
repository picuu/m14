// when the message is sent by the current user, the sentBy attrib should be null

const conversationsData = [
  {
    id: 'efed4d0d-f44a-40e3-a239-1b10c57ae51b',
    from: {
      id: '60d0fe4f5311236168a109df',
      title: 'mrs',
      firstName: 'Anaelle',
      lastName: 'Dumas',
      picture: 'https://randomuser.me/api/portraits/med/women/25.jpg',
    },
    messages: [
      {
        messageId: '2c24dc78-b217-4fca-a4e2-e6bd27d3a77a',
        sentBy: '60d0fe4f5311236168a109df',
        content: 'Hey! How are you doing?',
        timestamp: '2025-04-08T14:37:20.950732Z',
      },
      {
        messageId: '44d24098-c8b9-42a6-a59d-1372862c3d12',
        sentBy: null,
        content: 'Pretty good! Just working on a few things. You?',
        timestamp: '2025-04-08T14:38:20.950732Z',
      },
      {
        messageId: '1823234a-a7a7-4c3d-b3e4-0962bad3f656',
        sentBy: '60d0fe4f5311236168a109df',
        content: 'Not much, just chilling. Have you seen the latest episode?',
        timestamp: '2025-04-08T14:39:20.950732Z',
      },
      {
        messageId: 'b3bbd7f8-7b49-475b-a587-3fc5b2faeee9',
        sentBy: null,
        content: 'Yes! It was so good!',
        timestamp: '2025-04-08T14:40:20.950732Z',
      },
      {
        messageId: 'f0fff2b7-7516-4602-812e-366af7155915',
        sentBy: '60d0fe4f5311236168a109df',
        content: 'I was thinking we should catch up sometime.',
        timestamp: '2025-04-08T14:41:20.950732Z',
      },
      {
        messageId: '01f0f7ff-d024-4c8d-9a8c-7bb52825b40c',
        sentBy: null,
        content: "Absolutely! Let's plan for this weekend.",
        timestamp: '2025-04-08T14:42:20.950732Z',
      },
      {
        messageId: '0a169e24-0e3c-47bf-af9c-27f2f14381c4',
        sentBy: '60d0fe4f5311236168a109df',
        content: 'Do you remember that trip we talked about?',
        timestamp: '2025-04-08T14:43:20.950732Z',
      },
      {
        messageId: '9c63cfdd-369c-45bd-8f0e-731e0bb3b62d',
        sentBy: null,
        content: "Yes! I'm still down for it.",
        timestamp: '2025-04-08T14:44:20.950732Z',
      },
    ],
  },
  {
    id: '735e2c5f-5d01-458b-a0ba-3531484cdcff',
    from: {
      id: '60d0fe4f5311236168a109e0',
      title: 'miss',
      firstName: 'Milly',
      lastName: 'Norman',
      picture: 'https://randomuser.me/api/portraits/med/women/31.jpg',
    },
    messages: [
      {
        messageId: 'afc0a551-507d-4152-8bd9-e0e4309d8d76',
        sentBy: '60d0fe4f5311236168a109e0',
        content: 'Hellooo',
        timestamp: '2025-04-08T15:37:20.950732Z',
      },
      {
        messageId: '198f4265-447f-412d-bd21-0e061c898600',
        sentBy: null,
        content: 'Hi!!',
        timestamp: '2025-04-08T15:38:20.950732Z',
      },
    ],
  },
  {
    id: '9bd5b364-876b-4452-8d61-4664a2b05df7',
    from: {
      id: '60d0fe4f5311236168a109e1',
      title: 'mr',
      firstName: 'James',
      lastName: 'Black',
      picture: 'https://randomuser.me/api/portraits/med/men/29.jpg',
    },
    messages: [
      {
        messageId: '3d0e56d0-769a-49cc-b22d-26dc321efb04',
        sentBy: '60d0fe4f5311236168a109e1',
        content: 'Hey! How are you doing?',
        timestamp: '2025-04-08T16:37:20.950732Z',
      },
      {
        messageId: '20f4e640-4bc4-4e7a-9b3a-38584d2c1937',
        sentBy: null,
        content: 'Pretty good! Just working on a few things. You?',
        timestamp: '2025-04-08T16:38:20.950732Z',
      },
      {
        messageId: '3465d653-0eae-476d-8a7a-db69c7780b33',
        sentBy: '60d0fe4f5311236168a109e1',
        content: 'Not much, just chilling. Have you seen the latest episode?',
        timestamp: '2025-04-08T16:39:20.950732Z',
      },
      {
        messageId: 'fdc330cc-9b06-40b9-964e-e233e85152fe',
        sentBy: null,
        content: 'Yes! It was so good!',
        timestamp: '2025-04-08T16:40:20.950732Z',
      },
      {
        messageId: 'fb9a029c-8929-406e-9d01-aa2b701493ed',
        sentBy: '60d0fe4f5311236168a109e1',
        content: 'I was thinking we should catch up sometime.',
        timestamp: '2025-04-08T16:41:20.950732Z',
      },
      {
        messageId: 'ace71363-8847-4fc9-90cf-5b57cf1d6a6f',
        sentBy: null,
        content: "Absolutely! Let's plan for this weekend.",
        timestamp: '2025-04-08T16:42:20.950732Z',
      },
      {
        messageId: 'df460814-e6f8-4c38-b4bc-1a90454dc4a9',
        sentBy: '60d0fe4f5311236168a109e1',
        content: 'Do you remember that trip we talked about?',
        timestamp: '2025-04-08T16:43:20.950732Z',
      },
      {
        messageId: '8f9fd67d-19c6-4ec6-9f2b-86ae54c6911e',
        sentBy: null,
        content: "Yes! I'm still down for it.",
        timestamp: '2025-04-08T16:44:20.950732Z',
      },
    ],
  },
  {
    id: '9ad4d455-84bd-428f-b553-f16c5889647e',
    from: {
      id: '60d0fe4f5311236168a109e2',
      title: 'mr',
      firstName: 'Heinz-Georg',
      lastName: 'Fiedler',
      picture: 'https://randomuser.me/api/portraits/med/men/81.jpg',
    },
    messages: [
      {
        messageId: '1d3644e2-0b52-490f-b182-c31abf394936',
        sentBy: '60d0fe4f5311236168a109e2',
        content: 'Hellooo',
        timestamp: '2025-04-08T17:37:20.950732Z',
      },
      {
        messageId: '9c002cd8-a734-4339-9d15-289cb263a610',
        sentBy: null,
        content: 'Hi!!',
        timestamp: '2025-04-08T17:38:20.950732Z',
      },
      {
        messageId: 'c4329ea1-6b9d-4370-a8c1-2ac546c72c08',
        sentBy: '60d0fe4f5311236168a109e2',
        content: 'Did you get my email?',
        timestamp: '2025-04-08T17:39:20.950732Z',
      },
      {
        messageId: '5b0e1589-49bc-4216-a785-4550904d3db8',
        sentBy: null,
        content: 'Yes! I\u2019ll reply in a sec.',
        timestamp: '2025-04-08T17:40:20.950732Z',
      },
      {
        messageId: 'bbf79953-9297-4ca3-aac3-2265519b39e5',
        sentBy: '60d0fe4f5311236168a109e2',
        content: 'Thanks, no rush!',
        timestamp: '2025-04-08T17:41:20.950732Z',
      },
      {
        messageId: '769e7314-eb66-4efe-a289-5ce0c5a78273',
        sentBy: null,
        content: 'Appreciate it :)',
        timestamp: '2025-04-08T17:42:20.950732Z',
      },
    ],
  },
  {
    id: '6896b08d-43d5-489a-9cbe-cd311db025a4',
    from: {
      id: '60d0fe4f5311236168a109e3',
      title: 'mr',
      firstName: 'Vetle',
      lastName: 'Aasland',
      picture: 'https://randomuser.me/api/portraits/med/men/97.jpg',
    },
    messages: [
      {
        messageId: '76672ba1-2d00-420f-8c11-4ba0d90d6c5a',
        sentBy: '60d0fe4f5311236168a109e3',
        content: 'Are you still awake?',
        timestamp: '2025-04-08T18:37:20.950732Z',
      },
      {
        messageId: 'c7240db0-d129-40f9-9f80-c9787974f374',
        sentBy: null,
        content: 'Barely \ud83d\ude34',
        timestamp: '2025-04-08T18:38:20.950732Z',
      },
      {
        messageId: 'a8e25e03-6e7f-4f5f-bde1-af7988e500b9',
        sentBy: '60d0fe4f5311236168a109e3',
        content: 'Haha same. Just scrolling endlessly.',
        timestamp: '2025-04-08T18:39:20.950732Z',
      },
      {
        messageId: '69c684c9-07fc-470e-8647-e82d2135c49b',
        sentBy: null,
        content: 'Classic.',
        timestamp: '2025-04-08T18:40:20.950732Z',
      },
    ],
  },
  {
    id: 'd16fb15e-f294-404a-80d5-b3d791ad6336',
    from: {
      id: '60d0fe4f5311236168a109e4',
      title: 'mr',
      firstName: 'Pwry',
      lastName: 'Shylyrd',
      picture: 'https://randomuser.me/api/portraits/med/men/37.jpg',
    },
    messages: [
      {
        messageId: 'bd80fed4-d115-410c-b923-28874260aa12',
        sentBy: '60d0fe4f5311236168a109e4',
        content: 'Hey! How are you doing?',
        timestamp: '2025-04-08T19:37:20.950732Z',
      },
      {
        messageId: '427d6c58-65f3-439c-8d49-64224deac1bd',
        sentBy: null,
        content: 'Pretty good! Just working on a few things. You?',
        timestamp: '2025-04-08T19:38:20.950732Z',
      },
    ],
  },
  {
    id: '6a7afb75-2474-4f8f-9e1b-c9b96e3f2b79',
    from: {
      id: '60d0fe4f5311236168a109e5',
      title: 'mr',
      firstName: 'Adrian',
      lastName: 'Rodriguez',
      picture: 'https://randomuser.me/api/portraits/med/men/45.jpg',
    },
    messages: [
      {
        messageId: '2bad4fe7-dd5f-4236-af52-30955ae7dc24',
        sentBy: '60d0fe4f5311236168a109e5',
        content: 'Hi there :)',
        timestamp: '2025-04-08T20:37:20.950732Z',
      },
      {
        messageId: '9cf3006d-93cf-4c25-a350-c0ba04e2dc36',
        sentBy: null,
        content: 'Hey you!',
        timestamp: '2025-04-08T20:38:20.950732Z',
      },
      {
        messageId: '15f796e3-d0d7-4e25-92c2-a90ade763a54',
        sentBy: '60d0fe4f5311236168a109e5',
        content: 'How\u2019s your day going?',
        timestamp: '2025-04-08T20:39:20.950732Z',
      },
      {
        messageId: '8b6ebdc0-ba83-4b95-9177-9153436d805a',
        sentBy: null,
        content: 'Super busy, but it\u2019s good!',
        timestamp: '2025-04-08T20:40:20.950732Z',
      },
      {
        messageId: '17b2844f-3b27-4b62-8bf9-91b0447bd400',
        sentBy: '60d0fe4f5311236168a109e5',
        content: 'Mine\u2019s been kinda slow tbh.',
        timestamp: '2025-04-08T20:41:20.950732Z',
      },
      {
        messageId: 'd8e00339-f182-414c-9e1f-1e2d287a46a2',
        sentBy: null,
        content: "At least it's peaceful!",
        timestamp: '2025-04-08T20:42:20.950732Z',
      },
    ],
  },
  {
    id: 'b3ca3510-9ff7-424a-87c7-d92e82e188f3',
    from: {
      id: '60d0fe4f5311236168a109e6',
      title: 'miss',
      firstName: 'Milla',
      lastName: 'Pollari',
      picture: 'https://randomuser.me/api/portraits/med/women/89.jpg',
    },
    messages: [
      {
        messageId: '33f17fbe-122d-4b84-b172-5490b8706bfb',
        sentBy: '60d0fe4f5311236168a109e6',
        content: 'Yo!',
        timestamp: '2025-04-08T21:37:20.950732Z',
      },
      {
        messageId: 'b40452eb-e667-4a0b-a797-aab5bd3d7abe',
        sentBy: null,
        content: 'Hey!!',
        timestamp: '2025-04-08T21:38:20.950732Z',
      },
    ],
  },
]

export default conversationsData
