<template>
  <div>
    <div>{{ title }}</div>
    <h1>Testing dom attributes</h1>
    <a href="https://google.com">Google</a>

  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
})
export default class TheHeader extends Vue {
  @Prop() readonly title!: string;
  testProperty = 'unit test property'
  mount(){
    console.log(this.testProperty);
  }
}
</script>
<style scoped>
.header {
  text-align: center;
  background-color: lightblue;
  color: cadetblue;
}
</style>
