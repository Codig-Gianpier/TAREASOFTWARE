<template>
  <div class="acomodar">
    <button @click="$router.push('/administrador')" class="btn btn-danger mt-3">
      Asistencia
    </button>

    <div class="form-group mt-5 d-flex">
      <p class="my-auto me-2">TOTAL A PAGAR</p>
      <input
        type="text"
        class="form-control text-center w-25"
        id="exampleInputEmail1 "
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="pagoTotales"
      />
    </div>
    <div class="table-responsive tamaño">
      <table class="table table-bordered mt-3">
        <thead class="text-white">
          <tr class="table-info">
            <th scope="col">ID</th>
            <th scope="col">NOMBRES</th>
            <th scope="col">APELLIDOS</th>
            <th scope="col">DNI</th>
            <th scope="col">ASISTENCIA</th>
            <th scope="col">MIN DESC.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in info" :key="items.id" class="text-nowrap">
            <td class="text-start">{{ items.idAsistencia }}</td>
            <td class="text-start">{{ items.nombres }}</td>

            <td class="text-start">{{ items.apellidos }}</td>
            <td class="text-start">{{ items.dni }}</td>
            <td class="text-start">{{ items.fechayhora }}</td>
            <td class="text-start">{{ items.minDes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontedVistaDeAsistencia",

  data() {
    return {
      info: [],
      pagoTotales: 0,
    };
  },

  mounted() {
    this.axios
      .get(
        `CrudProfesores/ObtenerProfesoresPorDNI?dni=${this.$route.params.id}`
      )
      .then((r) => {
        {
          console.log(r.data);
          this.info = r.data;
          let pagoTotal = 0;
          this.info.map((r) => {
            console.log(r.minDes);
            pagoTotal = r.minDes + pagoTotal;
          });

          const numero = 1500;
          const minutos = 2250;
          const respuesta = minutos / numero;
          console.log(respuesta);
          //   console.log(pagoTotal * respuesta)

          this.pagoTotales = 1500 - pagoTotal * respuesta;

          console.log(this.pagoTotales);
        }
      });
  },

  methods: {},
};
</script>

<style scoped>
.acomodar {
  width: 75%;
  margin-left: 1px;
  margin-right: 11px;
  margin-top: 15px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  padding-left: 1%;
  padding-right: 1%;
  margin-bottom: 10px;
  border-radius: 15px;
  background: white;
}

.tamaño {
  font-size: 0.8rem;
}
</style>
