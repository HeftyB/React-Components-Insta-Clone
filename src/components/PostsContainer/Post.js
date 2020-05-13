// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const { comments, imgageUrl, likes, thumbnailUrl, timestamp, username } = props;
  const [totalLikes, setTotalLikes] = useState(likes);

  return (
    <div className="post-border">
      <PostHeader
        username={username}
        thumbnailUrl={
          thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={imgageUrl}
        />
      </div>
      <LikeSection totalLikes={totalLikes} updateLikes={event => setTotalLikes(totalLikes + 1)}/>
      <CommentSection
        postId={imgageUrl}
        comments={comments}
      />
    </div>
  );
};




export default Post;
