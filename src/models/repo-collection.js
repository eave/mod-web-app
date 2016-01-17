import Collection from 'ampersand-rest-collection'
import Repo from './repo.js'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend(githubMixin, {
  url: 'https://api.github.com/user/repos',

  model: Repo
})
