export default {
  name: 'Radio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: [Number, String],
    label: String,
    checked: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      isChecked: !!this.checked,
    }
  },
  computed: {
  },
  mounted() {
    let $parent = this.$parent || this.$root
    if ($parent.$options.name !== 'RadioGroup') {
      if (this.$el.parentNode && this.$el.parentNode.$radioChild && this.$el.parentNode.$radioChild.length) {
        this.$el.parentNode.$radioChild.push(this)
      }
      else {
        this.$el.parentNode.$radioChild = [this]
      }
    }
  },
  beforeDestroy() {
    this.$el.parentNode && this.$el.parentNode.$radioChild && (this.$el.parentNode.$radioChild = [])
  },
  methods: {
    onChange() {
      if (this.disabled || this.isChecked) return
      this.$nextTick(() => {
        this.isChecked = true
        if (this.$parent.$options.name === 'RadioGroup') {
          this.$parent.$emit('parent-change', this.value == undefined ? this.label : this.value)
        }
        else {
          let $parent = this.$el.parentNode
          if ($parent.$radioChild && $parent.$radioChild.length) {
            $parent.$radioChild.map(c => {
              if (c.disabled) return
              if (c.value && this.value == c.value) {
                c.$emit('change', true)
              }
              else if (this.label == c.label) {
                c.$emit('change', true)
              }
              else {
                c.isChecked = false
              }
            })
          }
        }
      })
    }
  }
}