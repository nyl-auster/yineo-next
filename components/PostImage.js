const PostImage = ({ post }) => {
  const src = post.image ? post.image.derivative.url : '/static/images/default.jpg' 
  return (
    <div className="image">
      <img src={src} />
    </div>
  )
}

export default PostImage