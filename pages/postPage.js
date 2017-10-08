import initApollo from '../lib/initApollo'
import postByPathQuery from '../apolloQueries/postByPathQuery'
import Layout from '../components/Layout'
import PostAsFull from '../components/PostAsFull'
import Loader from '../components/Loader'

const PostPage = ({ data }) => {
  if (data.loading) {
    return <Loader />
  }
  return (
    <Layout>
      <div>
        <PostAsFull post={data.route.entity} />
      </div>
    </Layout>
  )
}

PostPage.getInitialProps = (params) => {
  const apollo = initApollo()
  return apollo
    .query({
      query: postByPathQuery,
      variables: { path: '/' + params.query.slug }
    })
    .then(r => ({ data: r.data }))
}

export default PostPage
