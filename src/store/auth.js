import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


export default {
    namespaced:true,
    state: {
  
      users:null,
      token: null,
      idTrabajador : null,
    },
    getters: {
        Users(state){
            return state.users
        },

        Tokens(state){
            return state.token
        },

        IdTrabajador(state){
          return state.idTrabajador
        },

    
    },
    mutations: {
      llenarUser(state,data){
        state.users = data
      },
  
      llenarToken(state,data){
        state.token = data
      },

      llenarIdTrabajador(state,data){
        state.idTrabajador = data
      },

    
    },

    
    actions: {
    async  login({commit}, user){
      await  axios.post("Login/Autenticar",
          user
        )
        .then( datos => {
          console.log(datos.data);
          if(datos.data.autenticado){
       
          // const tiempoExpirado = datos.data.config.validTo
        //   localStorage.setItem("userId", authUser);
           localStorage.setItem("logueado" , datos.data.autenticado)
           localStorage.setItem("idUsuario" , datos.data.elidUsuario)

           commit("llenarUser" , datos.data)
          window.location.reload(true);
       
          
  
          }
      
        }).catch(error =>{
              this.boton = true
             if(error){
              this.error =true
              setTimeout(() => {
            this.error = false;
        }, 2000);
             }
  
             console.log(error)
        });
      }
      
  
         
      
    },
    modules: {
    }
  }
  