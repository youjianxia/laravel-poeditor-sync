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
   