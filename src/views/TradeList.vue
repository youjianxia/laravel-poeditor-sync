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
          Figurinhas que possui
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in trades"
        :key="item.ownerId"
      >
        <td>{{ item.ownerName }}</td>
        <td><pre>{{ item.trades ? item.trades.map(trade => trade.stickerName + " - " + trade.stickerNumber).join("\n") : "" }}</pre></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { store } from "../store.js"

interface Trade {
  stickerId: number;
  stickerName: string;
  stickerNumber: number;
  stickerUrl: string;
  ownerId: string;
  ownerName: string;
}
interface UserTrades {
  ownerId: string;
  ownerName: string;
  trades: Array<Trade>
}
interface TradePoint {
  id: number;
  name: string