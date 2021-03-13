
<template>
  <v-row>
    <v-col cols="5">
      <v-text-field
        v-model="searchTerm"
        label="Busca por nome do jogador"
      />
    </v-col>
  </v-row>

  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          E-mail
        </th>
        <th
          class="text-left"
          width="50"
        />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in listOfUsers"
        :key="item.id"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>        
          <v-btn
            v-if="store.user.id != item.id"
            icon="mdi-account-convert"
            @click="userSelect(item)"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { store } from "../store.js"
interface User {
    id?: number;
    name: string;
    email: string;
}
export default {
  data() {
    return {
      searchTerm: "",
      Users: new Array() as Array<User>,
      store
    }
  },
  computed: {
    listOfUsers(): Array<User> {
      const filterName = (list: Array<User>) => {
        return this.searchTerm ? list.filter(user => user.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) : list;
      }

      return filterName(this.Users);
    }
  },
  async mounted() {
    fetch("https://stickers-trade-be-vqklpjxjja-rj.a.run.app/user")
      .then(response => response.json())
      .then(data => this.Users = data);

  },
  methods: {
    userSelect(item: User) {
     store.changeUser(item);
     this.$router.push({ name: 'Lista de figurinhas'}) 
    }
  }

}
</script>

<style>

</style>