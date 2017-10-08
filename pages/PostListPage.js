import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Loader from '../components/Loader'
import initApollo from '../lib/initApollo'
import postListByTagQuery from '../apolloQueries/postListByTagQuery'
import tagByPathQuery from '../apolloQueries/tagByPathQuery'
import config from '../next.config.js'
import { Link } from '../routes'

class PostListPage extends React.Component {

  render () {
    const data = this.props.data
    if (data.loading) {
      return <Loader />
    }
    let titleSuffix = null
    if (this.props.tag) {
      titleSuffix = `classés ${this.props.tag.name}`
    }
    return (
      <Layout>
        <div className="section">
          <h1 className="title is-1">Tous les billets {titleSuffix} </h1>
          <PostList
            posts={data.postsQuery.results}
            postsTotal={data.postsQuery.count}
            postsPerPage={config.postsPerPage}
            urlQuery={this.props.urlQuery}
          />
        </div>
      </Layout>
    )
  }

  static async getInitialProps (url) {
    console.log(url)
    const page = url.query.page ? url.query.page : 1
    const tagSlug = url.query.tag ? url.query.tag : null
    const apollo = initApollo()

    // get our full tag object from API
    let tag = null
    if (tagSlug) {
      tag = await apollo.query({
        query: tagByPathQuery,
        variables: {
          path: '/' + tagSlug
        }
      }).then(result => {
        return result.data.route.entity
      })
    }

    let variables = {
      page: (page - 1), // first page is "0" for our API
      pageSize: config.postsPerPage
    }
    if (tag) {
      variables.tid = tag.id
    }

    // now list all posts referencing this tag
    const result = await apollo.query({
      query: postListByTagQuery,
      variables
    })

    return {
      urlQuery: url.query,
      tag,
      data: result.data
    }
  }

}

export default PostListPage
