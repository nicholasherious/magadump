import {DiscussionEmbed} from "disqus-react"
const DisqusComments = ({ postComment }) => {
  const disqusShortname = "magadump"
  const disqusConfig = {
    url: "http://localhost:3000/" + postComment._id,
    identifier: postComment._id, // Single post id
    title: postComment.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;