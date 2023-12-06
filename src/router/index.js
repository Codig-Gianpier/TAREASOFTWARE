import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbarse from "../views/navbar.vue";
import Inicio from '../views/Inicio.vue'
import Administrador from '../views/Administrador'
import Asistencia from '../views/Asistencia.vue'
import Creacion from '../views/CrearUsuario.vue'
import VistaAsistencia from '../views/VistaDeAsistencia.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  

  {
    path: "/Dashboard",
    //  name: "Navbarse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Navbarse,
    meta: {
      autenticado: true,
    },

    children: [
      
      {
        path: "",
        name: "Inicio",
        component: Inicio,
      },

      {
        path: "/administrador",
        name: "administrador",
        component: Administrador,
      },

      {
        path: "/asistencia",
        name: "asistencia",
        component: Asistencia,
      },

      {
        path: "/creacion",
        name: "creacion",
        component: Creacion,
      },

      {
        path: "/vistaAsistencia/:id",
        name: "vistaAsistencia",
        component: VistaAsistencia,
      },
    ]

  }
]


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let logueo = localStorage.getItem("logueado");
  // let entrada =localStorage.getItem("isSucces");
  let autenticado = to.matched.some((record) => record.meta.autenticado);

  console.log(logueo , autenticado)
  if (autenticado && !logueo) {
    next("/");
  } else if (!autenticado && logueo ) {
    next("/Dashboard");
  } else {
    next();
  }
});


export default router
