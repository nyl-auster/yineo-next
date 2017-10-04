import Layout from '../components/Layout'
import Posts from '../components/Posts'
import withData from '../lib/withData'

const Blog = (props) => (
  <Layout>
    <Posts />
  </Layout>
)

export default withData(Blog)
