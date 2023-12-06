<template>
  <div>
    <section>
      <div class="form-box">
        <div class="form-value">
          <form @submit.prevent="login(user)" action="">
            <h2>Login</h2>
            <div class="inputbox">
              <input type="text" required v-model="user.usuario" />
              <label for="">Usuario</label>
            </div>
            <div class="inputbox">
              <input type="password" required v-model="user.contraseña" />
              <label for="">Contraseña</label>
            </div>

            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      error: false,
      error_msg: "el usuario o contraseña es incorrecto",
      aumentar: false,
      spinner: false,
      boton: true,
      user: {
        usuario: "",
        contraseña: "",
      },
    };
  },

  methods: {
    ...mapActions("auth", ["login"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "poppins", sans-serif;
}

section {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 7%;
  padding-top: 8%;
  min-height: 100vh;
  width: 100%;

  background: url("../assets/amigoDANIEL.png") no-repeat;
  background-position: center;
  /* background-size: cover; */
  background-size: 100% 100%;
}
.form-box {
  position: relative;
  width: 420px;
  height: 500px;
  background: rgb(54, 78, 255);
  border: 2px solid rgba(81, 80, 80, 0.5);
  border-radius: 32px;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.91;
}
h2 {
  font-size: 2em;
  color: #fff;
  text-align: center;
}
.inputbox {
  position: relative;
  margin: 30px 0;
  width: 310px;
  border-bottom: 2px solid #fff;
}
.inputbox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
}
input:focus ~ label,
input:valid ~ label {
  top: -5px;
}
.inputbox input {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  color: #fff;
  margin-top: 10px;
}
.inputbox ion-icon {
  position: absolute;
  right: 8px;
  color: #fff;
  font-size: 1.2em;
  top: 20px;
}
.forget {
  margin: -15px 0 15px;
  font-size: 0.9em;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.forget label input {
  margin-right: 3px;
}
.forget label a {
  color: #fff;
  text-decoration: none;
}
.forget label a:hover {
  text-decoration: underline;
}
button {
  width: 100%;
  height: 50px;
  margin-top: 40px;
  border-radius: 40px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 800;
}
.register {
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}
.register p a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}
.register p a:hover {
  text-decoration: underline;
}

@media (max-width: 1400px) {
  /* Estilos para resoluciones de hasta 1200px */

  /* Ajustar el tamaño del formulario */

  section {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 7%;
    padding-top: 8%;
    min-height: 100vh;
    width: 100%;

    background: url("../assets/amigoDANIEL.png") no-repeat;
    background-position: center;
    /* background-size: cover; */
    background-size: 100% 100%;
  }

  .form-box {
    padding-top: 2%;
    position: relative;
    width: 320px;
    height: 380px;
    background: rgb(27, 25, 18);
    border: 2px solid rgba(81, 80, 80, 0.5);
    border-radius: 32px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.71;
  }

  h2 {
    font-size: 1em;
    color: #fff;
    text-align: center;
  }
  .inputbox {
    position: relative;
    margin: 20px 0;
    width: 210px;
    border-bottom: 2px solid #fff;
    font-size: 0.8rem;
  }
  .inputbox label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1em;
    pointer-events: none;
    transition: 0.5s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }
  .inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: #fff;
  }
  .inputbox ion-icon {
    position: absolute;
    right: 8px;
    color: #fff;
    font-size: 1.2em;
    top: 20px;
  }
  .forget {
    margin: -15px 0 15px;
    font-size: 0.9em;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }

  .forget label input {
    margin-right: 3px;
  }
  .forget label a {
    color: #fff;
    text-decoration: none;
  }
  .forget label a:hover {
    text-decoration: underline;
  }
  button {
    width: 70%;
    height: 35px;
    margin-top: 40px;
    border-radius: 40px;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 0.89em;
    font-weight: 700;
  }
  .register {
    font-size: 0.9em;
    color: #fff;
    text-align: center;
    margin: 25px 0 10px;
  }
  .register p a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }
  .register p a:hover {
    text-decoration: underline;
  }
}
</style>
