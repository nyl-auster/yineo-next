import { gql, graphql } from 'react-apollo'
import PostTeaserList from './PostTeaserList'

const Posts = ({data}) => 
  <div>
    <h1>Dernier billets</h1>
    { !data.loading && <PostTeaserList posts={data.postsQuery.results} /> }
  </div>


const allPostsQuery = gql`
query {
  postsQuery(pageSize: 20) {
    count
    results {
      uuid: entityUuid
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
