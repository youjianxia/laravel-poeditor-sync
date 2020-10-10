<template>
  <div class="text-center">
    <v-menu
      location="bottom"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          prepend-icon="mdi-account"
          style="margin-right: 50px"
        >
          {{ store.user.name }}
        </v-btn>
      </template>
      <v-list
        nav
