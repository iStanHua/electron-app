
import { clipboard } from 'electron'

import InputBox from '@/components/common/inputBox/index.vue'

export default {
  name: 'ClipboardPage',
  data() {
    return {
      msg: 'clipboard'
    }
  },
  computed: {

  },
  components: {
    InputBox
  },
  created() {
  },
  methods: {
    onCopy() {
      clipboard.writeText(this.msg)
      console.log('copy success!')
    }
  }
}