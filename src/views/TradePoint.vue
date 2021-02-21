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
        label="Mostrar apenas pontos frequentados"
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
          Endereço
        </th>
        <th class="text-left" />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in listOfTradePoints"
        :key="item.id"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>
          <v-checkbox
            v-model="item.linked"
            label="Ponto frequentado"
            @change="linkedChange(item)"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>


<script lang="ts">
import { store } from "../store.js"

interface TradePoint {
  id: number;
  name: string;
  address: string;
  linked: boolean;
}
export default {
  data() {
    return {
      showLinkedOnly: false,
      searchTerm: "",
      tradePoints: new Array() as Array<TradePoint>,
