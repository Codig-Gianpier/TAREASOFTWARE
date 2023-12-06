<template>
  <div class="acomodar">
    <div class="container mt-3">
      <button @click="$router.push('/administrador')" class="btn btn-danger">
        Asistencia
      </button>
      <button @click="$router.push('/creacion')" class="btn btn-success ms-3">
        Registro
      </button>

      <h4 class="mt-5">REGISTRO DE USUARIOS</h4>

      <div class="mt-4">
        <div class="mb-3">
          <label
            class="w-100 text-start form-label"
            >USUARIOS:</label
          >
          <input
            type="text"
            class="form-control"
            v-model="user.usuario"
            placeholder="EJEM:GAMP105"
          />

          <label
            class="w-100 text-start mt-3 form-label"
            >CONTRASEÑA:</label
          >
          <input
            type="password"
            class="form-control"
            v-model="user.contraseña"
            placeholder="EJEM:********"
          />
        </div>

        <div class="text-start">
          <button @click="guardar" class="btn btn-success">GRABAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "FrontedCrearUsuario",

  data() {
    return {
      user: {
        usuario: "",
        contraseña: "",
      },
    };
  },

  mounted() {},

  methods: {

    guardar(){
        this.axios.post(`CrudProfesores/CrearUsuario`, this.user).then(r =>{
            console.log(r.data)
            Swal.fire({
            position: "center",
            icon: "success",
            title: `${r.data.mensaje}`,
            showConfirmButton: false,
            timer: 1500,
          });
        })
    }

  },
};
</script>

<style scoped>
.acomodar {
  width: 75%;
  margin-left: 11px;
  margin-right: 11px;
  margin-top: 15px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  padding-left: 20%;
  padding-right: 20%;
  margin-bottom: 10px;
  border-radius: 15px;
  background: white;
}
</style>
