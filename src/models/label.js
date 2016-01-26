import Model from 'ampersand-model'

export default Model.extend({
  props: {
    name: 'string',
    color: 'string'
  },

  // prop that persists or is relevant only for the given session (like the edit state)
  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  }
})
