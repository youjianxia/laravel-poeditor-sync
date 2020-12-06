<template>
  <v-row>
    <v-col cols="5">
      <v-text-field
        v-model="searchTerm"
        label="Busca por nome do jogador"
      />
    </v-col>
    <v-col cols="2">
      <v-combobox
        v-model="selectedCountry"
        clearable
        :items="listOfCountries"
        label="País"
      />
    </v-col>
    <v-col cols="3">
      <v-checkbox
        v-model="showOwned"
        label="Mostrar apenas figurinhas não obtidas"
      />
    </v-col>
  </v-row>

  <v-table>
    <thead>
      <tr>
        <th
          class="text-left"
          width="150"
        >
          Figurinha
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Number
        </th>
        <th class="text-left">
          País
        </th>
        <th class="text-left" />
        <th class="text-left" />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in listOfStickers"
        :key="item.id"
      >
        <td class="align-center ">
          <v-img
            width="140"
            height="200"
            :src="item.imageUrl"
          />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.number }}</td>
        <td>{{ item.country }}</td>
        <td>
          <v-checkbox
            v-model="item.wishlisted"
            :disabled="item.owned"
            label="Quero"
            @change="wishlistChange(item)"
          />
        </td>
        <td>
          <v-checkbox
            v-model="item.owned"
            label="Tenho para trocar"
            @change="ownedChange(item)"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { store } from "../store.js"
interface Sticker {
  id: number;
  name: string;
  number: number;
  imageUrl: string;
  country: string;
  wishlisted: boolean;
  owned: boolean;
}
export default {
  data() {
    return {
      showOwned: false,
      searchTerm: "",
      selectedCountry: "",
      stickers: new Array() as Array<Sticker>,
    }
  },
  computed: {
    listOfStickers(): Array<Sticker> {
      const filterOwned = (list: Array<Sticker>) => {
        return this.showOwned ? list.filter(sticker => sticker.owned != this.showOwned) : list
      }
      const filterName = (list: Array<Sticker>) => {
        return this.searchTerm ? list.filter(sticker => sticker.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) : list;
      }
      const filterCountry = (list: Array<Sticker>) => {
        return this.selectedCountry ? list.filter(sticker => sticker.country.toLocaleLowerCase().includes(this.selectedCountry.toLocaleLowerCase