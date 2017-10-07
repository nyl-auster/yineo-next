import { graphql } from 'react-apollo'
import allPostsQuery from '../apolloQueries/allPostsQuery'
import PostAsTeaser from './PostAsTeaser'
import Loader from './Loader'
import Pagination from './Pagination'

function onGoToPage(page) {
  alert('event override ' + page)
}

const PostList = ({ data, loadMore }) => {
  if (data.loading) {
    return <Loader />
  }
  return (
    <div>
      <button onClick={loadMore}>Load more</button>
      <h1 className="title is-1">Dernier billets de blog</h1>
      <div className="posts content">
        {data.postsQuery.results.map(post =>
          <div key={post.uuid}>
            <PostAsTeaser post={post} />
          </div>
        )}
        <Pagination 
        route='blog'
        onGoToPage={() => onGoToPage(page)}
        totalOfResults={data.postsQuery.count} />
      </div>
    </div>
  )
}

export default graphql(allPostsQuery, {
  options: (props) => ({
    variables: { page: 0, pageSize: 2 }
  }),
  props: ({ data }) => ({
    data,
    loadMore: (page) => {
      return data.fetchMore({
        variables: {
          page: page
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return fetchMoreResult
        }
      })
    }
  })
})(PostList)
