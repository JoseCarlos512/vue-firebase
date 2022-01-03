<template>
  <v-container>
    <input placeholder="nombre" type="text" v-model="name"> <br>
    <input placeholder="apellido" type="text" v-model="lastname"> <br>
    <input placeholder="edad" type="number" v-model="edad"> <br>
    <input placeholder="sexo" type="text" v-model="sexo"> <br>
    <input type="checkbox" v-model="status"> <br>


    <v-text-field label="prueba">
        
    </v-text-field>

    <button @click="insertUser()">Add</button>

  <ul>
    <li v-for="user in usuarios" :key="user.id">
      {{ user.data.edad }} - <button @click="updateUser(user.id)">Update</button> - <button @click="deleteUser(user.id)">Delete</button>
    </li> 
  </ul>

  </v-container>
</template>

<script>
import {onMounted, defineComponent, ref} from "@vue/composition-api";
import dbConnection from "../firebase"
import { getDocs, collection, addDoc, setDoc, doc, deleteDoc } from 'firebase/firestore';
const collecion = collection(dbConnection, "usuarios");

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup() {

    /**
     * Variables
     */
    const usuarios = ref([]);
    const name = ref("");
    const lastname = ref("");
    const edad = ref(null);
    const sexo = ref("M");
    const status = ref(true);


    /**
     * Methods
     */
    function getUsers() {
      
      usuarios.value = [];
      getDocs(collecion).then((r) => r.docs.forEach(
         (item) => usuarios.value.push({id:item.id, data:item.data()})
        )
      )

      console.log(usuarios.value);
    }
    
    function insertUser(){
          addDoc(collecion, this.usuario).then(() => {
              this.getUsers();
          });
      }

    function updateUser(id){

        this.userId = doc(collection(dbConnection, 'usuarios'),id);

        setDoc(this.userId, this.usuario).then(() => {
              this.getUsers();
        });
      }

      function deleteUser(id) {

        this.userId = doc(collection(dbConnection, 'usuarios'),id);

        deleteDoc(this.userId).then(() => {
              this.getUsers();
        });
      }

      onMounted(() => {
        console.log("Cargar method : getUsers");
        getUsers()
      })

    /**
     *  Return
     */

    return {
      usuarios,
      name,
      lastname,
      edad,
      sexo,
      status,

      // Methods
      getUsers,
      insertUser,
      updateUser,
      deleteUser
    }

  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
