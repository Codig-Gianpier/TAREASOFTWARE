<template>
  <div class="acomodar">
    <h4 class="mt-5">REGISTRO DE ASISTENCIA</h4>

    <div class="mt-4">
      <div class="mb-3">
        <label
          for="exampleFormControlInput1"
          class="w-100 text-start form-label"
          >DNI:</label
        >
        <input
          type="text"
          v-model="user.dni"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="ejem:987551.."
        />
      </div>

      <div class="text-start">
        <button @click="guardar" class="btn btn-success">GRABAR</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "FrontedAsistencia",

  data() {
    return {
      user: {
        dni: "",
        idUsuario: localStorage.getItem("idUsuario"),
      },
    };
  },

  mounted() {},

  methods: {
    guardar() {
      this.axios
        .post(`CrudProfesores/RegistrarAsistencia`, this.user)
        .then((r) => {
          console.log(r.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${r.data.mensaje}`,
            showConfirmButton: false,
            timer: 1500,
          });
          this.user.dni =""
        });
    },
  },
};
</script>

<style scoped>
.acomodar {
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  padding-left: 25%;
  padding-right: 25%;
  margin-bottom: 10px;
  border-radius: 15px;
  background: white;
}
</style>
