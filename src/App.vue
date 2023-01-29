<template>
  <div id="app">
    <div class="container mb-3">
      <button @click="isDashboardOpen=!isDashboardOpen">Dashboard</button>
    </div>
    <Dashboard v-if="isDashboardOpen" />
    <SetupAccount v-else/>
  </div>
</template>

<script>
import Dashboard from './Dashboard.vue';
import SetupAccount from './SetupAccount.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    SetupAccount
},
  data() {
    return {
      isDashboardOpen: false
    }
  }
}
</script>