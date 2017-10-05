import { gql } from 'react-apollo'
export default gql`
query ($pageSize: Int!) {
  postsQuery(pageSize: $pageSize) {
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