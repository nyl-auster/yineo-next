import Layout from '../components/Layout'
import { gql, graphql } from 'react-apollo'

const PostFull = ({ data }) => {
  const post = data.route ? data.route.entity : null
  if (post) {
    return (
      <div>
        <h1 className="title is-1">{post.title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.body }}></div>
      </div>
    )
  }
  return (
    <div> chargement ...</div>
  )
}

const postQuery = gql`
query route($path: String!) {
  route(path: $path) {
    alias
    routed
    path
    entity {
      title: entityLabel
      ... on NodePost {
        body: fieldBody
        image: fieldImage {
          derivative(style:large) {
            url
          }
        }
        tags: fieldTags {
          name: entityLabel
          url: entityUrl {
            alias
          }
        }
      }
    }
  }
}
`

export default graphql(postQuery, {
  options: (props) => ({
    variables: { path: '/' + props.slug }
  })
})(PostFull)
