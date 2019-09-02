import headerLayer from './header.vue'

export default {
  name: 'Layout',
  data() {
    return {
      childNavList: []
    }
  },
  computed: {
    navList() {
      return this.$store.state.menuList || []
    },
    route() {
      return this.$route.path.split('/')[1]
    },
    currentRoute() {
      return this.$route.path.split('/')[this.$route.path.split('/').length - 1]
    }
  },
  components: {
    headerLayer
  },
  created() {
    if (this.$route.path.split('/')[1]) {
      let n = this.navList.find(l => l.name === this.$route.path.split('/')[1])
      if (n) {
        this.childNavList = n.children
      }
    }
  },
  methods: {
    navItemClick(i) {
      if (i === '/') {
        this.$router.push('/')
        this.childNavList = []
        return
      }
      let currentNav = this.navList[i]
      this.childNavList = currentNav.children || []
      let path = currentNav.children && currentNav.children.length ? currentNav.path + '/' + currentNav.children[0].path : '/'
      if (this.$route.path === path) return
      this.$router.push(path)
    },
    childItemClick(i) {
      if (this.$route.path === '/' + this.route + '/' + this.childNavList[i].path) return
      this.$router.replace('/' + this.route + '/' + this.childNavList[i].path)
    }
  }
}

