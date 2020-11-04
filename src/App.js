import { useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      imageUrl:
        "https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png",
      caption: "Building instagram clone",
      username: "Ivo Krastev",
    },
    {
      imageUrl:
        "https://cf.bstatic.com/images/hotel/max1024x768/157/157737121.jpg",
      caption: "Hello this is awesome!",
      username: "Violeta Plachkova",
    },
    {
      imageUrl:
        "https://inews-prd-a-images.s3.eu-west-2.amazonaws.com/content/uploads/2018/09/winter-uk-snow.jpg",
      caption: "Check out this clone project guys!",
      username: "David Smith",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          alt="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      {posts.map((post) => (
        <Post
          imageUrl={post.imageUrl}
          caption={post.caption}
          username={post.username}
        />
      ))}
    </div>
  );
}

export default App;
