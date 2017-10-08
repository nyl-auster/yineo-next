import PostAsTeaser from './PostAsTeaser'
import Loader from './Loader'
import Pagination from './Pagination'
import config from '../next.config.js'

const PostList = ({ posts, postsTotal, postsPerPage }) => {
  return (
    <div className="posts">
      <Pagination resultsPerPage={postsPerPage} resultsTotal={postsTotal} route="PostListPage" />
      <div className="content">
        {posts.map((post, index) =>
          <div key={index}>
            <PostAsTeaser post={post} />
          </div>
        )}
      </div>
      <Pagination resultsPerPage={postsPerPage} resultsTotal={postsTotal} route="PostListPage" />
    </div>
  )
}

export default PostList
