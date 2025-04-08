const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },

  {
    path: '/user/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ProfileDetail.vue'),
        props: (route) => ({ userId: route.params.id }),
      },
    ],
  },

  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ProfileDetail.vue'),
        props: () => ({ userId: '60d0fe4f5311236168a10a19' }),
      },
    ],
  },

  {
    path: '/post/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PostDetailPage.vue'),
        props: (route) => ({ postId: route.params.id }),
      },
    ],
  },

  {
    path: '/messages',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/MessagesPage.vue'),
        props: (route) => ({ userId: route.params.id }),
      },
    ],
  },

  {
    path: '/messages/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ConversationPage.vue'),
        props: (route) => ({ conversationId: route.params.id }),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
