<script lang="ts">
import { defineComponent } from "vue"
import {Layout} from "../../common"

export default defineComponent({
  components: {Layout}
})
</script>

<template>
  <Layout title="Todo">
    <template v-slot:main>
      main
    </template>
  </Layout>
</template>

<style scoped>

</style>