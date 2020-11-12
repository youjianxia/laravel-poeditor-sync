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
  