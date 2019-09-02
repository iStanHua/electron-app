export default {
  name: 'RadioGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number],
    disabled: Boolean
  },
  data() {
    return {
      $radioChild: []
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.$radioChild = this.$children
      this.$radioChild.forEach(c => {
        if (c.$options.name === 'Radio') {
          if (this.disabled) {
            c.isDisabled = true
          }
          if (c.value && this.value == c.value) {
            c.isChecked = true
          }
          else if (this.value == c.label) {
            c.isChecked = true
          }
        }
      })

      this.$on('parent-change', (val) => {
        this.$radioChild.forEach(c => {
          if (c.$options.name === 'Radio') {
            if (this.disabled) {
              c.isDisabled = true
            }
            if (c.value && val == c.value) {
              c.isChecked = true
            }
            else if (val == c.label) {
              c.isChecked = true
            }
            else {
              c.isChecked = false
            }
          }
        })
        this.$emit('change', val)
      })
    })
  },
  methods: {
  }
}