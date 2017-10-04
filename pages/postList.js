import Layout from '../components/Layout'
import Posts from '../components/Posts'
import withData from '../lib/withData'

const Blog = (props) => (
  <Layout>
    <div className="section">
      <Posts />
    </div>
  </Layout>
)

export default withData(Blog)
