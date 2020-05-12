//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = () => {

  const [usersData, SetUsersData] = useState(dummyData);
  // set up state for your data

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      usersData.map( (item, index) => {

        return <Post comments={item.comments} imgageUrl={item.imageUrl} likes={item.likes} thumbnailUrl={item.thumbnailUrl} timeStamp={item.timeStamp} username={item.username} key={index}/>
      })
      
      }
    </div>
  );
};

export default PostsPage;
