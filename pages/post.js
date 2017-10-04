import Layout from '../components/Layout'

const Post = (props) => (
  <Layout>
    <div>
    <h1>{props.url.query.title}</h1>
      Je suis la page de post
    </div>
  </Layout>
)

export default Post
