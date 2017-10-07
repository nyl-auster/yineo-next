import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Loader from '../components/Loader'
import initApollo from '../lib/initApollo'
import allPostsQuery from '../apolloQueries/allPostsQuery'

const BlogPage = ({ data }) => {
  if (data.loading) {
    return <Loader />
  }
  return (
    <Layout>
      <div className="section">
        <PostList data={data} />
      </div>
    </Layout>
  )
}

BlogPage.getInitialProps = (params) => {
  const apollo = initApollo()
  return apollo
  .query({
    query: allPostsQuery,
    variables: { page: 0, pageSize: 10 }
  })
  .then(r => ({data: r.data}))
}

export default BlogPage
