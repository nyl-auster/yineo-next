import Layout from '../components/Layout'
import Posts from '../components/Posts'
import withData from '../lib/withData'

const Blog = (props) => (
  <Layout>
    <h1>Je suis la liste de posts</h1>
    <Posts />
  </Layout>
)

export default withData(Blog)
