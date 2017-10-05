import { graphql } from 'react-apollo'
import allPostsQuery from '../apolloQueries/allPostsQuery'
import PostTeaser from './PostTeaser'
import Loader from './Loader'

const Posts = ({ data }) => {
  if (data.loading) {
    return <Loader />
  }
  return (
    <div>
      <h1 className="title is-1">Dernier billets de blog</h1>
      <div className="posts content">
        {data.postsQuery.results.map(post =>
          <div key={post.uuid}>
            <PostTeaser post={post} />
          </div>
        )}
      </div>
    </div>
  )
}

export default graphql(allPostsQuery, {
  options: (props) => ({
    variables: { pageSize: 20 }
  })
})(Posts)
