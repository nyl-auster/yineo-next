import Layout from '../components/Layout'
import { gql, graphql } from 'react-apollo'
import withData from '../lib/withData'
import PostFull from '../components/PostFull'

const Post = (props) => (
  <Layout>
    <div>
      <PostFull slug={props.url.query.slug} />
    </div>
  </Layout>
)

export default withData(Post)
