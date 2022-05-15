<template>
<div id="container">
    <button @click="click">
        This is a test!!
    </button>
</div>
</template>

<script>
export default {
  name: 'test-btn',
  methods: {
    click () {
      alert('Clicked')
    }
  }
}
</script>