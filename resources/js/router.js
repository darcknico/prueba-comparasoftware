import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import EditNoteView from "./views/EditNoteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
        path: "/new-note",
        name: "new-note",
        component: EditNoteView,
    },
    {
        path: "/edit-note/:id",
        name: "edit-note",
        component: EditNoteView,
        props: true
    },
  ],
});

export default router;
