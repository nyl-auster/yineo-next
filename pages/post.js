import Layout from '../components/Layout'

const Post = ({url}) => (
  <Layout>
    <div>
    <h1>{url.query.title}</h1>
      Je suis la page de post
    </div>
  </Layout>
)

export default Post
