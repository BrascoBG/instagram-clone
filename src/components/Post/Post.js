import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ imageUrl, username, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="https://mmedia-exp1.licdn.com/dms/image/C4E03AQGnc49ekLxlRQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=jfeDQZ11gKphrJgqb0Ns2v0ILFJI4IZTjgLke2n5ZBI"
        />
        <h3>{username}</h3>
      </div>

      <img src={imageUrl} alt="" className="post__image" />

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
