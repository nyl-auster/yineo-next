import Layout from '../components/Layout'
import PostList from '../components/PostList'
import withData from '../lib/withData'

const BlogPage = (props) => (
  <Layout>
    <div className="section">
      <PostList />
    </div>
  </Layout>
)

export default withData(BlogPage)
