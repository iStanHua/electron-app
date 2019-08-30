import { ipcRenderer } from 'electron'

export default {
  name: 'HeaderLayout',
  data() {
    return {
      isMaximize: false
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    // 最小化
    onMinimize() {
      ipcRenderer.send('ipc-min-window')
    },
    // 最大化
    onMaximize() {
      this.isMaximize = !this.isMaximize
      ipcRenderer.send('ipc-max-window', this.isMaximize)
    },
    // 关闭
    onClose() {
      ipcRenderer.send('ipc-close-window')
    }
  },
}
