import Layout from '../components/Layout'
import PostList from '../components/PostList'
import initApollo from '../lib/initApollo'
import postListQuery from '../apolloQueries/postListQuery'
import tagByPathQuery from '../apolloQueries/tagByPathQuery'
import config from '../next.config.js'
import { Link } from '../routes'

class PostListPage extends React.Component {

  render () {
    const data = this.props.data
    const titleSuffix = this.props.tag ? `classés ${this.props.tag.name}` : ''
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

  static async getInitialProps (context) {
    const page = context.query.page ? context.query.page : 1
    const tagSlug = context.query.tag ? context.query.tag : null
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
      query: postListQuery,
      variables
    })

    return {
      urlQuery: context.query,
      tag,
      data: result.data
    }
  }

}

export default PostListPage
