import { gql } from 'react-apollo'
export default gql`
query ($page: Int!, $pageSize: Int!, $tid: String!) {
  postsQuery: postsQueryByTag(page: $page, pageSize: $pageSize, contextual_filter:{tid: $tid}) {
    count
    results {
      created: entityCreated
      title: entityLabel
      url: entityUrl {
        alias
      }
      ... on NodePost {
        image: fieldImage {
          derivative(style: medium) {
            url
          }
        }
        tags: fieldTags {
          id: entityId,
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
