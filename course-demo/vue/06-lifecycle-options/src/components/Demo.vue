<script>
export default {
  data () {
    return {
      text: "Hello"
    }
  }
}
</script>

<template>
  <p class="demo">Demo {{ text }}</p>
</template>

<style>
.demo {
  color: green
}
</style>