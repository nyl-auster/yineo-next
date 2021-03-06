import { gql } from 'react-apollo'
export default gql`
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
          id: entityId
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