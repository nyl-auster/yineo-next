import Layout from '../components/Layout'
import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'
import PostAsFull from '../components/PostAsFull'

const PostPage = (props) => (
  <Layout>
    <div>
      <PostAsFull slug={props.url.query.slug} />
    </div>
  </Layout>
)

export default withData(PostPage)
