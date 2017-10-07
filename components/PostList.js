import { graphql } from 'react-apollo'
import allPostsQuery from '../apolloQueries/allPostsQuery'
import PostAsTeaser from './PostAsTeaser'
import Loader from './Loader'

class Pagination extends React.Component {

  getNumberOfPage () {
    return Math.ceil(this.props.totalOfResults / this.props.resultsByPage)
  }

  getPagesAsArray () {
    const numberOfPage = this.getNumberOfPage()
    let pages = []
    for (let i = 0; i <= numberOfPage; i++) {
      pages.push(i)
    }
    return pages;
  }

  render () {
    const pages = this.getPagesAsArray()
    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {pages.map(page =>
            <li key={page}>
              <a className="pagination-link" href="">{page + 1}</a>
            </li>
          )}
        </ul>
        <style jsx>{`
        ul {
          list-style-type: none
        }
    `}</style>
      </nav>
    )
  }
}

Pagination.defaultProps = {
  totalOfResults: null,
  resultsByPage: 10,
  numberOfPage: null,
  currentPage: 1
}

const PostList = ({ data, loadMore }) => {
  console.log(data)
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
        <Pagination totalOfResults={data.postsQuery.count} />
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
    loadMore: () => {
      return data.fetchMore({
        variables: {
          page: 1
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
