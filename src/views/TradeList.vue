<template>
  <v-row>
    <v-col>
      <v-combobox
        v-model="selectedTradePoint"
        clearable
        :items="tradePoints"
        item-title="name"
        item-value="id"
        label="Ponto de troca"
        @update:modelValue="clickedTradePoint"
      />
    </v-col>
  </v-row>

  <v-table>
    <thead>
      <tr>
     