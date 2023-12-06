import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


export default {
    namespaced:true,
    state: {
  
      permisos:[]
    },
    getters: {
        Permiso(state){
            return state.permisos
        },


    
    },
    mutations: {
      llenarPermisos(state,data){
        state.permisos = data
      },
  
      
    
    },

    
    actions: {
    
        Permisos({commit}){
        axios.get(`CrudProfesores/ObtenerRolesPorUsuario?idUsuario=${localStorage.getItem(`idUsuario`)}`).then(r=>{
            console.log(r.data)
            commit('llenarPermisos' , r.data)
        })
      }
      
  
         
      
    },
    modules: {
    }
  }
  