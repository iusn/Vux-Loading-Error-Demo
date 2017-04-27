<template lang="html">
    <div class="contoner">
        <group>
            <cell title="title" value="哈哈哈"></cell>
        </group>
        <XButton type="default" text="输入框" @click.native="buttonAction"></XButton>
        <x-button @click.native="tableViewAction = 'color:red;'" type="primary">set red</x-button>
        <toast v-model="showToast" type="text">{{$t('success')}}</toast>
    </div>
</template>

<script>
import {Group, Cell, XButton, Toast} from 'vux'
// import Group from 'vux/components/group'
// import Cell from 'vux/components/cell'
// import api from '@/api'
export default {
  data () {
    return {
      showToast: false
    }
  },
  components: {
    Group,
    Cell,
    Toast,
    XButton
  },
  methods: {
    buttonAction () {
      this.$router.push('/hello')
    //   let body = { 'body': {'username': 1, 'userpassword': '123456', 'mobile': '13534564566'},
    //     'productCode': 'dsfdsf'}
    //   this.$http.get(api.demoTest(), body).then(response => {
    //     console.log('>>>>>>>>>' + response.data)
    //   }, response => {
    //     console.log('error')
    //   })
      console.log('>>>>>>>>>>>>>')
    },
    tableViewAction () {
      this.showToast = true
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .contoner
        width:100%
        height:100px
        background:red
        .button
            width:6rem
            height:1rem
            padding-top:2rem
</style>
