<template>
  <div class="acomodar">
    <div class="container mt-3">
        <button @click="$route.path !== '/administrador' && $router.push('/administrador')" class="btn btn-danger">Asistencia</button>

        <button @click="$route.path !== '/creacion' && $router.push('/creacion')" class="btn btn-success ms-3">Registro</button>

    </div>
    <div class=" table-responsive tamaño">
        <table class="table table-bordered  mt-5">
      <thead class=" text-white">
        <tr class="table-info">
          <th scope="col">ID</th>
          <th scope="col">NOMBRES</th>
          <th scope="col">APELLIDOS</th>
          <th scope="col">DNI</th>
          <th scope="col">ESPECIALIDAD</th>
          <th scope="col">CATEGORIA</th>
          <th scope="col">DIRECCION</th>
          <th scope="col">MINUTOS_DIA.</th>
          <th scope="col">MINUTOS_SEM.</th>
          <th scope="col">MONTO</th>
          <th scope="col">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="items in informacion"
          :key="items.id"
          class="text-nowrap "
        >
          <td class="text-start">{{ items.idProfesor }}</td>
          <td class="text-start">{{ items.nombres }}</td>

          <td class="text-start"> {{ items.apellidos }}</td>

          <td class="text-start">{{ items.dni }}</td>

          <td class="text-start"> {{ items.especialidad }}</td>

          <td class="text-start">{{ items.categoria }}</td>

          <td class="text-start">{{ items.direccion }}</td>

          <td >{{ items.minutoS_DIARIOS }}</td>
          <td>{{ items.minutoS_SEMANALES }}</td>
          <td>{{ items.mont}}</td>

          <td class="container my-0 py-1">
            <button @click="Abrir(items.dni)" class="btn btn-primary py-0 px-1  my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "FrontedAdministrador",

  data() {
    return {
      informacion: [],
    };
  },

  mounted() {
    this.axios
      .get(`CrudProfesores/ObtenerProfesores`)
      .then((r) => {
        console.log(r.data);
        this.informacion = r.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {

    Abrir(dni){
       this.$router.push(`/vistaAsistencia/` + dni)
    }

  },
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

.bg-solimano{
    background: saddlebrown;
}

.tamaño{
    font-size: 0.80rem;
}
</style>
