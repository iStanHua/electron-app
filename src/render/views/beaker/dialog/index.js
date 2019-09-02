
import { remote } from 'electron'

export default {
  name: 'DialogPage',
  data() {
    return {
    }
  },
  computed: {

  },
  components: {
  },
  created() {
  },
  methods: {
    onOpenFile() {
      remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
        filters: [
          { name: "Text Files", extensions: ['txt', 'js', 'html', 'md'] },
          { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
          { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
          { name: 'Custom File Type', extensions: ['as'] },
          { name: 'All Files', extensions: ['*'] }
        ],
        properties: ['openFile', 'multiSelections']
      }).then(result => {
        console.log(result.canceled)
        console.log(result.filePaths)
      }).catch(err => {
        console.log(err)
      })
    },
    onOpenDirectory() {
      remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
        properties: ['onOpenDirectory', 'showHiddenFiles']
      }).then(result => {
        console.log(result.canceled)
        console.log(result.filePaths)
      }).catch(err => {
        console.log(err)
      })
    },
    onShowMessageBox() {
      remote.dialog.showMessageBox(remote.getCurrentWindow(), {
        message: 'Do you want to save the current document?',
        type: 'question',
        buttons: ['Yes', 'No']
      }).then(result => {
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}