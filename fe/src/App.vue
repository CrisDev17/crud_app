<template>
  <div id="app">
   <EmployeeCrud />
  </div>
</template>

<script>
import EmployeeCrud from './components/EmployeeCrud.vue';

export default {
  name: 'App',
  components: {
    EmployeeCrud
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* html {
  height: 100%;
} */
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
