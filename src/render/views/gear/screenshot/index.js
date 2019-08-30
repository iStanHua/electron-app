import fs from 'fs'
import os from 'os'
import path from 'path'

import { desktopCapturer, screen, shell } from 'electron'

export default {
  name: 'ScreenshotPage',
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
    onScreenshot() {
      this.message = 'Gathering screens...'

      const thumbSize = determineScreenShotSize()
      let options = { types: ['screen'], thumbnailSize: thumbSize }

      desktopCapturer.getSources(options, (error, sources) => {
        if (error) return console.log(error)

        sources.forEach((source) => {
          if (source.name === 'Entire screen' || source.name === 'Screen 1') {
            const screenshotPath = path.join(os.tmpdir(), 'screenshot.png')

            fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {
              if (error) return console.log(error)
              shell.openExternal(`file://${screenshotPath}`)

              const message = `Saved screenshot to: ${screenshotPath}`
              screenshotMsg.textContent = message
            })
          }
        })
      })

      function determineScreenShotSize() {
        console.log(screen)
        const screenSize = screen.getPrimaryDisplay().workAreaSize
        const maxDimension = Math.max(screenSize.width, screenSize.height)
        return {
          width: maxDimension * window.devicePixelRatio,
          height: maxDimension * window.devicePixelRatio
        }
      }
    }
  }
}