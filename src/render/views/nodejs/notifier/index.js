import notifier from 'node-notifier'

export default {
  name: 'NotifierPage',
  data() {
    return {
    }
  },
  computed: {

  },
  components: {

  },
  mounted() {
  },
  methods: {
    onNotifier() {
      notifier.notify({
        title: 'My notification',
        message: 'Hello, there!'
      })
    }
  }
}