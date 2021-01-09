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
        <th
          class="text-left"
          width="150"
        >
          Nome
        </th>
        <th class="text-left">
        