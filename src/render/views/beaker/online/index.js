
import { ipcRenderer } from 'electron'

export default {
  name: 'OnlinePage',
  data() {
    return {
    }
  },
  computed: {

  },
  components: {
  },
  created() {
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
  },
  methods: {
    updateOnlineStatus() {
      ipcRenderer.send('online-status-changed', navigator.onLine ? 'online' : 'offline')
    }
  }
}