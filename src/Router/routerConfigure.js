import Login from '../component/loginAndRegister/loginWrap';

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: () => '/dashboard' },
];

export default routes;
