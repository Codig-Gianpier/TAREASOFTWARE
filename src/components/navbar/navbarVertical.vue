<template>
  <div class="d-flex">
    <div class="about">
      <div class="my-4" v-for="items in Permiso" :key="items.id">
        <router-link
          class="text-decoration-none text-success diseños"
          :to="
            items.nomRol === 'ADMINISTRADOR' ? '/Administrador' : '/asistencia'
          "
        >
          {{ items.nomRol }}
        </router-link>
      </div>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FrontedNavbarVertical",

  data() {
    return {
      perfiles: [],
    };
  },

  mounted() {},

  computed: {
    ...mapGetters("acciones", ["Permiso"]),
  },

  created() {
    this.Permisos();
  },

  methods: {
    ...mapActions("acciones", ["Permisos"]),
  },
};
</script>

<style scoped>
.categoria-seleccionada {
  background-color: #d5fad5;
  /* Otros estilos personalizados si es necesario */
}

.diseños {
  font-size: 1.1rem;
  font-weight: 500;
}

.check {
  display: none;
}

.modales {
  background: #002c5d;
  margin-top: 8%;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  border-radius: 10px 10px 10px 10px;
  height: 40vh;
  color: white;
}

.wider-about {
  width: 3%; /* Ancho más amplio que el original */
  background: #ffffff;
  border-radius: 8px 8px 8px 8px;
  margin-left: 18px;
  /* padding-left: 5px; */
  margin-top: 9px;
  transition: 0.5s;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 90vh;
  /* margin-bottom: 1.05%; */
}

.about {
  background: #ffffff;
  width: 18%;
  height: 90vh;
  border-radius: 10px 10px 10px 10px;
  margin-left: 20px;
  margin-top: 9px;
  transition: 0.5s;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow-y: auto;
  overflow-x: hidden;
  /* margin-bottom: 1.05%; */
}
.about:hover {
  transition: 0.5s;
  margin-left: 20px;
  margin-top: 9px;
}
.aboute {
  background: #ffffff;
  width: 15%;
  height: 90vh;
  border-radius: 15px 15px 15px 15px;
  margin-left: 18px;
  margin-top: 9px;
  transition: 0.5s;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: none;
}
.aboute:hover {
  transition: 0.5s;
  margin-left: 20px;
  margin-top: 20px;
}
.decorar {
  text-align: left;
  font-size: 0.8rem;
  padding-left: 0px;
  font-weight: 500;
  color: #454854;
  font-weight: 800;
}

.decorar:hover {
  transition: 0.5s;
}

.enlaces {
  margin-left: 0%;
  padding-left: 2%;
}

.tamaño {
  font-size: 0.7rem;
  color: #155bac;
  font-weight: 700;
}

.bg-solimano {
  background: #155bac;
}

.color {
  color: #155bac;
}
li a {
  text-align: left;
  padding-left: 0px;
  font-weight: 800;
  color: #101111;
}
li a:hover {
  transition: all 0.5s;
  color: #3c74b4;
  font-size: 0.88rem;
}

.decoracion {
  list-style: none;
}
</style>
