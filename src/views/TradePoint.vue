<template>
  <v-row>
    <v-col cols="5">
      <v-text-field
        v-model="searchTerm"
        label="Busca por nome do ponto de troca"
      />
    </v-col>
    <v-col cols="3">
      <v-checkbox
        v-model="showLinkedOnly"
        label="Mostrar apenas pontos frequentad