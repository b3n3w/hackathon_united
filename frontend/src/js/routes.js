
import HomePage from '../pages/home.vue';


import DynamicRoutePage from '../pages/dynamic-route.vue';
import NotFoundPage from '../pages/404.vue';

import HostPage from '../pages/host.vue';
import ScanPage from '../pages/scan.vue';
import ProfilePage from '../pages/profile.vue';

import StartBusinessPage from '../pages/start-business.vue';
import StartPrivatePage from '../pages/start-private.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/host/:id',
    component: HostPage
  },
  {
    path: '/scan/',
    component: ScanPage
  },
  {
    path: '/profile/:id',
    component: ProfilePage
  },
  {
    path: '/start-business/',
    component: StartBusinessPage
  },
  {
    path: '/start-private/',
    component: StartPrivatePage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
