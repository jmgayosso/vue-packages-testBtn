<template>
<div id="container">
    <button @click="click">
        This is a test!!
    </button>
</div>
</template>

<script>
export default {
  name: 'testBtn',
  methods: {
    click () {
      alert('Clicked')
    }
  }
}
</script>