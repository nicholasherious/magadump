import { CommentCount } from 'disqus-react';



export const GetCommentCount = ({ countComments }) => {
    return (
        
           <CommentCount
    shortname='magadump'
    config={
        {
            url: "http://localhost:3000/" + countComments._id,
            identifier: countComments._id,
            title: countComments.title,
        }
    }
>
    {/* Placeholder Text */}
    Comments
</CommentCount> 
        
    )
}
