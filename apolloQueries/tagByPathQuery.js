import { gql } from 'react-apollo'

export default gql`
query route($path: String!) {
  route(path: $path) {
    alias
    routed
    path
    entity {
      name: entityLabel
      id: entityId
      entityUrl {
        alias
      }
    }
  }
}
`
