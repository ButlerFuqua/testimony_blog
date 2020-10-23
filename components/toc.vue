<template>
  <nav>
    <ul>
      <li v-for="link of testimony.toc" :key="link.id">
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>