import Model from 'ampersand-model'
import xhr from 'xhr'
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
  },

  update (attributes) {
    const oldAttributes = this.getAttributes({props: true, session: false})
    xhr({
      url: this.url(),
      json: attributes,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.me.token
      }
    }, (err, req, body) => {
      if (err) {
        this.set(oldAttributes)
        console.error('Something went wrong—check your wifi')
      }
    })
    this.set(attributes)
  }
})
