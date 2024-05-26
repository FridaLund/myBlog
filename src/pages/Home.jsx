import React from "react";
import BlogPosts from "../components/BlogPosts";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { userLoggedIn } = useContext(AuthContext);

    return (
      <>
      <div>
        <h1> WELCOME TO FRIDIUM </h1>
        {userLoggedIn ? (
         <BlogPosts />
        ) : (
            <>
            <h2> Hey you! </h2>
            <h3> Do want to star writing here at Fridium? Please log in or sign up and start writing today!</h3>
            </>
        )}
      </div>
      </>
    );
  };

  export default Home;
