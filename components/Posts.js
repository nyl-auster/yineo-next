import { gql, graphql } from 'react-apollo'
import PostTeaser from './PostTeaser'

const Posts = (props) => (
  <div>
    <ul>
      {props.data.postsQuery.results.map(post => {
        return <li> <PostTeaser post={post} /> </li>
      })}
    </ul>
  </div>
)

const allPostsQuery = gql`
query {
  postsQuery(pageSize: 20) {
    count
    results {
      created: entityCreated
      title: entityLabel
      url: entityUrl {
        alias
      }
      ... on NodePost {
        teaser: fieldTeaser
        image: fieldImage {
          derivative(style: medium) {
            url
          }
        }
        tags: fieldTags {
          name: entityLabel
          url: entityUrl {
            alias
          }
        }
        teaser: fieldTeaser
      }
    }
  }
}
`

export default graphql(allPostsQuery, {})(Posts)
