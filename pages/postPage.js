import initApollo from '../lib/initApollo'
import postByPathQuery from '../apolloQueries/postByPathQuery'
import Layout from '../components/Layout'
import PostAsFull from '../components/PostAsFull'
import Loader from '../components/Loader'

class PostPage extends React.Component {

  render () {
    return (
      <Layout>
          <PostAsFull post={this.props.data.route.entity} />
      </Layout>
    )
  }

  static async getInitialProps(context) {
    const apollo = initApollo()
    const result = await apollo.query({
      query: postByPathQuery,
      variables: { path: '/' + context.query.slug }
    })
    return {
      data: result.data
    }
  }

}

export default PostPage
