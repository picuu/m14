<script setup>
  import Counter from '@/components/ExampleRef.vue'
  import ExampleReactive from '@/components/ExampleReactive.vue'
  import ExampleDirective from '@/components/ExampleDirective.vue'
  import ExampleVModel from './components/ExampleVModel.vue'
  import ExampleVFor from './components/ExampleVFor.vue'
  import ExampleVIf from './components/ExampleVIf.vue'
  import ExampleVShow from './components/ExampleVShow.vue'
</script>

<template>
  <main>
    <h1>Basic concepts Vue 3</h1>
    
    <Counter />
    <ExampleReactive />
    <ExampleDirective />
    <ExampleVModel />
    <ExampleVFor />
    <ExampleVIf />
    <ExampleVShow />
  </main>
</template>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    font-weight: normal;
  }

  body {
    min-height: 100vh;
    color: rgba(235, 235, 235, 0.64);
    background: #181818;
    line-height: 1.6;
    font-family:
      Inter,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }

  main {
    padding-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  h3 {
  color: rgb(25, 220, 150);
  }

  button {
    width: fit-content;
    padding: .25rem .5rem;
    background-color: #fff;
    border: none;
    border-radius: .25rem;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
  }

  button:hover {
    transform: scale(1.04);
  }
</style>
