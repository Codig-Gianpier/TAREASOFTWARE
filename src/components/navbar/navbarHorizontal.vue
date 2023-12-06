<template>
    <div class="mx-3 mt-2">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand navbar-light bg-solimano  px-2 rounded-3"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <figure class="my-2">
            <img
              src="@/assets/PANEL.jpeg"
              height="50"
              width="60"
              alt="MDB Logo"
            />
          </figure>
        </div>
       

        <div class="d-flex align-items-center">
          <!-- Icon -->
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          </a>

          <!-- Notifications -->
        
          <!-- Avatar -->
          <div class="dropdown">
            <button
              @click="cerrarSesion"
              class="dropdown-toggle d-flex align-items-center hidden-arrow btn btn-white border-2 text-white"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              →
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-door-open text-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
                />
                <path
                  d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
export default {
    name: 'FrontedNavbarHorizontal',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        cerrarSesion() {
      window.location.reload(true);
      localStorage.clear();
      this.$router.push("/");
      this.$store.dispatch('acciones/CambioNavbar',false);

    },
    },
};
</script>

<style  scoped>

.bg-solimano {
  background: #002c5d;
}
.perfiles-user {
  font-size: 0.67rem;
}

</style>