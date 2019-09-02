import Tesseract from 'tesseract.js'
const { TesseractWorker } = Tesseract
const worker = new TesseractWorker()

import Radio from '@/components/common/radio/index.vue'
import RadioGroup from '@/components/common/radio/group.vue'
import Upload from '@/components/common/upload/index.vue'

export default {
  name: 'TesseractPage',
  data() {
    return {
      list: [
        { id: 1, name: 'English' },
        { id: 2, name: 'Chinese' }
      ],
      selectId: 1,
      msg: '',
      text: ''
    }
  },
  computed: {

  },
  components: {
    Radio,
    RadioGroup,
    Upload
  },
  mounted() {
  },
  methods: {
    onUploadChange(res) {
      this.text = ''
      worker.recognize(res.image, this.selectId === 1 ? 'eng' : 'chi_sim')
        .progress(progress => {
          console.log('progress', progress)
          this.msg = `status：${progress.status}  progress：${progress.progress}`
        }).then(result => {
          console.log('result', result)
          this.text = result.text
          worker.terminate()
        }).catch(err => {
          this.msg = err.err
        })
    }
  }
}