/*
https://api.imjad.cn/cloudmusic/index.html
*/
const baseUrl = 'http://192.168.72.163:9990/testService/testString'
export default {
  getMv (id) {
    return baseUrl + '?type=mv&id=' + id
  },
  getMvList (key, offset) {
    return baseUrl + '?key=' + key
  },
  getMvComments (id) {
    return baseUrl + '?type=comments&id=' + id
  },
  demoTest () {
    return baseUrl
  }
}
