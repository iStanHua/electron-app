import Gif from 'stan-gif'
import path from 'path'

import Upload from '@/components/common/upload/index.vue'

export default {
  name: 'GifPage',
  data() {
    return {
      msg: ''
    }
  },
  computed: {

  },
  components: {
    Upload
  },
  mounted() {
  },
  methods: {
    onUploadChange(result) {
      const gif = new Gif({
        input: result.image,
        output: path.join(path.dirname(result.file.path), 'png-%d.png')
      })
      this.msg = '正在提取中...'
      gif.decode().then(res => {
        console.log(res)
        this.msg = '提取成功'
      }).catch(err => {
        console.log(err)
        this.msg = '提取失败'
      })
    }
  }
}