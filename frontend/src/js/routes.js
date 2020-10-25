
import HomePage from '../pages/home.vue';


import DynamicRoutePage from '../pages/dynamic-route.vue';
import NotFoundPage from '../pages/404.vue';

import LoginPage from '../pages/login.vue';
import RegisterPage from '../pages/register.vue';

import HostPage from '../pages/host.vue';
import ScanPage from '../pages/scan.vue';
import ProfilePage from '../pages/profile.vue';
import DatenschutzPage from '../pages/datenschutz.vue';

import StartBusinessPage from '../pages/start-business.vue';
import StartPrivatePage from '../pages/start-private.vue';

import UpcomingPage from '../pages/upcoming.vue';

import CurrentHostingPage from '../pages/current-hosting.vue';
import UpcomingHostingPage from '../pages/upcoming-hosting.vue';
import CurrentRulesPage from '../pages/current-rules.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: LoginPage
  },
  {
    path: '/register/',
    component: RegisterPage
  },
  {
    path: '/upcoming/:id',
    component: UpcomingPage
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
    path: '/current-hosting/',
    component: CurrentHostingPage
  },
  {
    path: '/upcoming-hosting/',
    component: UpcomingHostingPage
  },
  {
    path: '/current-rules/',
    component: CurrentRulesPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/datenschutz/',
    component: DatenschutzPage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
