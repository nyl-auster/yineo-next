import { gql } from 'react-apollo'

export default gql`
query ($page: Int!, $pageSize: Int!) {
  postsQuery: postsQuery(page: $page, pageSize: $pageSize) {
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
      }
    }
  }
}
`