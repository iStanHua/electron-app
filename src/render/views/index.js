import Loading from '@/components/common/loading/index.vue'

import { RankIndex, RepeatCount, ObjectGroupBy, Unique, RunPromiseInSequence, Descartes } from '@/utils/array'

export default {
  name: 'HomePage',
  data() {
    return {
      loadingShow: true,
      list: [
        { name: '北京', value: 300 },
        { name: '天津', value: 160 },
        { name: '上海', value: 288 },
        { name: '杭州', value: 200 },
        { name: '苏州', value: 180 },
        { name: '南昌', value: 128 },
        { name: '长沙', value: 168 },
        { name: '重庆', value: 160 },
        { name: '广州', value: 180 },
        { name: '深圳', value: 286 }
      ],
      names: ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Stan', 'Tiff']
    }
  },
  computed: {

  },
  components: {
    Loading
  },
  mounted() {
    console.log(RankIndex(this.list))
    console.log(RepeatCount(this.names))
    console.log(ObjectGroupBy(this.list, 'value'))
    console.log(Unique(this.names))

    function p1(a) {
      return new Promise((resolve, reject) => {
        resolve(a * 5)
      })
    }
    function p2(a) {
      return new Promise((resolve, reject) => {
        resolve(a * 2)
      })
    }
    function f3(a) {
      return a * 3
    }
    function p4(a) {
      return new Promise((resolve, reject) => {
        resolve(a * 4)
      })
    }
    RunPromiseInSequence([p1, p2, f3, p4], 10).then(console.log)
    console.log(Descartes([[1, 2, 3], ['a', 'b', 'c']]))
    console.log(Descartes([[1, 2, 3], ['a', 'b', 'c'], ['a1', 'b1', 'c1']]))
  },
  methods: {
  }
}