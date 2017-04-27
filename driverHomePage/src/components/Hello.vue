<template>
  <div class="hello">
      <loading show="isLoading" text="稍等"></loading>
  </div>

</template>

<script>
// import { Loading } from 'vux'
import { Loading } from 'vux'
// import Loading from 'vux/dist/components/Loading'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLoading: true
    }
  },
  components: {
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
    .hello
        width:100%
        height:1000px;
        background:red
</style>
