import { gql } from 'react-apollo'
export default gql`
query ($tid: String!) {
  postsQueryByTag(contextual_filter:{tid: $tid}) {
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
