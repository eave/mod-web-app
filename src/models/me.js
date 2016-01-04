import Model from 'ampersand-model'

export default Model.extend({
  initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onTokenChange)
  },

  // things that come from the server, and that we want to persist back to the server
  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  // things that we want to keep around in the browser (like sessions)
  session: {
    token: 'string'
  },

  onTokenChange () {
    window.localStorage.token = this.token
  }
})
