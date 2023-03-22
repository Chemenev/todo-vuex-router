import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true,
  },
  {
    path: '/completedtasks/',
    name: 'completedTasks',
    component: () => import('../views/CompletedTasksView.vue'),
    props: { query: '123' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
