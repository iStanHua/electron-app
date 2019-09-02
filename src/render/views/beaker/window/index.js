
import { remote } from 'electron'

export default {
  name: 'WindowPage',
  data() {
    return {
      message: ''
    }
  },
  computed: {

  },
  components: {
  },
  created() {
  },
  methods: {
    onCreateWindow() {
      let win = new remote.BrowserWindow({ width: 800, height: 600 })
      win.on('close', function () { win = null })
      win.loadURL('https://www.baidu.com/')
      win.show()
    }
  }
}