import { graphql } from 'react-apollo'
import PostTeaserList from './PostTeaserList'
import allPostsQuery from '../apolloQueries/allPostsQuery'

const Posts = ({ data }) =>
  <div>
    <h1 class="title is-1">Dernier billets de blog</h1>
    { !data.loading ?
      <PostTeaserList posts={data.postsQuery.results} /> :
      'Chargement ...'
    }
  </div>

export default graphql(allPostsQuery)(Posts)
