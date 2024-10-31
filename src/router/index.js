import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path:'/',
         redirect:'/home'
      },
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "home",
               name: "home",
               component: () => import("@/pages/Home/Home.vue"),
            },
            {
               path: "/contact",
               name: "contact",
               component: () => import("@/pages/Home/HomeContactForm.vue"),
            },
         ],
      },
   ],
});

export default router;
