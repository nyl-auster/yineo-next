import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Loader from '../components/Loader'
import initApollo from '../lib/initApollo'
import config from '../next.config.js'
import postListQuery from '../apolloQueries/postListQuery'

const PostListPage = ({ data }) => {
  if (data.loading) {
    return <Loader />
  }
  return (
    <Layout>
      <div className="section">
        <h1 className="title is-1">Le blog</h1>
        <PostList
          posts={data.postsQuery.results}
          postsTotal={data.postsQuery.count}
          postsPerPage={config.postsPerPage}
        />
      </div>
    </Layout>
  )
}

PostListPage.getInitialProps = (params) => {
  const page = params.query.page ? params.query.page : 1
  const apollo = initApollo()
  return apollo
    .query({
      query: postListQuery,
      variables: {
        page: (page - 1),
        pageSize: config.postsPerPage
      }
    })
    .then(r => ({ data: r.data }))
}

export default PostListPage
