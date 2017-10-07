import Layout from '../components/Layout'
import Posts from '../components/Posts'
import withData from '../lib/withData'

const BlogPage = (props) => (
  <Layout>
    <div className="section">
      <Posts />
    </div>
  </Layout>
)

export default withData(BlogPage)
