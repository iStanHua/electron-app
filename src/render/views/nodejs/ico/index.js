import toIco from 'to-ico'
import fs from 'fs'

import Radio from '@/components/common/radio/index.vue'
import RadioGroup from '@/components/common/radio/group.vue'
import Upload from '@/components/common/upload/index.vue'

export default {
  name: 'IcoPage',
  data() {
    return {
      list: [16, 24, 32, 48, 64, 128, 256],
      selectIndex: 256,
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
      this.msg = ''
      if (res.file.type === 'image/png') {
        this.msg = '正在转换中...'
        toIco(fs.readFileSync(res.file.path), {
          resize: true,
          sizes: [this.selectIndex]
        }).then(result => {
          this.msg = '转换成功!'
          fs.writeFileSync(res.file.path.replace('.png', `-${this.selectIndex}x${this.selectIndex}.ico`), result)
        }).catch(err => {
          console.log(err)
        })
      }
      else {
        this.msg = '请选择png图片'
      }
    }
  }
}