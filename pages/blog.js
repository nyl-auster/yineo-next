import Layout from '../components/Layout'

const Posts = (props) => (
  <Layout>
    <div>
      <h1>Je suis la liste de posts</h1>
      <ul>
        {props.posts.map(post => {
          return <li>{post.title}</li>
        })}
      </ul>
    </div>
  </Layout>
)

const Blog = (props) => (
  <div>
    <Posts posts={PostsData} />
  </div>
)

const PostsData = [
  {
    title: "je suis le premier post",
    alias: "post-1"
  },
  {
    title: "je suis le second post",
    alias: "post-2"
  },
  {
    title: "je suis le troisième post",
    alias: "post-3"
  }
]


export default Blog
