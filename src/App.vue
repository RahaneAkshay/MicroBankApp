<template>

  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div>
          <div>
            <the-header v-bind:title="title"></the-header>
          </div>
        </div>
        <div><router-view></router-view></div>
      </div>

    </div>
       
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateAccount from './components/CreateAccount.vue'
import { ReactiveFormConfig, ClientLibrary } from "@rxweb/reactive-forms";
import UserDashboard from './components/UserDashboard.vue'
import TheHeader from './components/TheHeader.vue'
@Component({
  components: {
    TheHeader,
    CreateAccount,
    UserDashboard
  },
})
export default class App extends Vue {
  title = 'Micro Bank App'
}
ReactiveFormConfig.clientLib = ClientLibrary.Vue;
ReactiveFormConfig.set({
  validationMessage: {
    required: "This Field is required",
    alpha: "Only Alpha Numerics are allowed.",
    minLength: "Minimum {{1}} characters you have to enter."
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
