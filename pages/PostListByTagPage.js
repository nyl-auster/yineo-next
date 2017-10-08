import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Loader from '../components/Loader'
import initApollo from '../lib/initApollo'
import postListByTagQuery from '../apolloQueries/postListByTagQuery'
import tagByPathQuery from '../apolloQueries/tagByPathQuery'
import config from '../next.config.js'

const PostListByTagPage = ({ data, tag }) => {
  if (data.loading) {
    return <Loader />
  }
  return (
    <Layout>
      <div className="section">
        <h1 className="title is-1">Articles classés "{tag.name}" </h1>
        <PostList
          posts={data.postsQuery.results}
          postsTotal={data.postsQuery.count}
          postsPerPage={config.postsPerPage}
        />
      </div>
    </Layout>
  )
}

PostListByTagPage.getInitialProps = async (params) => {
  const page = params.query.page ? params.query.page : 1
  const apollo = initApollo()

  // first get our tag object from its path
  const tag = await apollo.query({
    query: tagByPathQuery,
    variables: {
      path: '/' + params.query.slug
    }
  }).then(result => result.data.route.entity)

  // now list all posts referencing this tag
  const result = await apollo.query({
    query: postListByTagQuery,
    variables: {
      page: (page - 1), // first page is "0" for our API
      pageSize: config.postsPerPage,
      tid: tag.id
    }
  })
  
  return {
    tag,
    data: result.data
  }
}

export default PostListByTagPage
