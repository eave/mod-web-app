import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
  idAttribute: 'name',

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
