import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import RepoCollection from './repo-collection'

export default Model.extend(githubMixin, {
  url: 'https://api.github.com/user',

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

  collections: {
    repos: RepoCollection
  },

  onTokenChange () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      // fetch is code on ampersand-model that will by default make an ajax request to the url property of the model, and populate the props section with the resulting JSON
      this.fetch()
      this.repos.fetch()
    }
  }
})
