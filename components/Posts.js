import { gql, graphql } from 'react-apollo'

const Posts = (props) => (
  <div>
    <ul>
      {props.data.postsQuery.results.map(post => {
        return (
          <li>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{__html: post.body}}></div>
          </li>
          )
      })}
      <li>Well, Hello ?</li>
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
        body: fieldBody
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