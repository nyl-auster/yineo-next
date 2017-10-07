
import { graphql } from 'react-apollo'
import Loader from './Loader'
import postByPathQuery from '../apolloQueries/postByPathQuery'

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
    <Loader />
  )
}

export default graphql(postByPathQuery, {
  options: (props) => ({
    variables: { path: '/' + props.slug }
  })
})(PostFull)
