import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Tracking Keuangan - Kendalikan Masa Depan Finansial Anda",
        description: "Lacak pengeluaran, rencanakan dana impian, dan lihat kekayaan Anda bertumbuh dengan aplikasi keuangan pribadi yang aman dan cerdas.",
      },
    },
    {
      path: "/layanan-konsultasi",
      name: "consultation",
      component: () => import("../views/ConsultationView.vue"),
      meta: {
        title: "Perencana Keuangan Profesional | Wujudkan Impian Finansial Anda",
        description: "Wujudkan kebebasan finansial Anda. Dapatkan konsultasi perencanaan keuangan pribadi untuk dana pensiun, investasi, dan lainnya.",
      },
    },
    // Rute "Catch-all" untuk Halaman 404
    // Ini HARUS menjadi rute terakhir di dalam array
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
      meta: {
        title: "Halaman Tidak Ditemukan",
        description: "Halaman yang Anda cari tidak tersedia.",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

// Mengubah judul dan meta tag secara dinamis
router.afterEach((to, from) => {
  import("vue").then((vue) => {
    vue.nextTick(() => {
      document.title = to.meta.title || "Yohanes Indra - Financial Planner";
      let description = document.querySelector('meta[name="description"]');
      if (description) {
        description.setAttribute("content", to.meta.description || "");
      }
    });
  });
});

export default router;
