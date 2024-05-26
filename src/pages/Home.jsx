import React, {useContext} from "react";
import BlogPosts from "../components/BlogPosts";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { userLoggedIn } = useContext(AuthContext);

    return (
      <>
      <div>
        <h1 className="m-6 text-base font-medium"> WELCOME TO FRIDIUM </h1>
        {userLoggedIn ? (
         <BlogPosts />
        ) : (
            <>
            <h2 className="m-6 text-base font-medium"> Hey you! </h2>
            <h3 className="m-6 text-base font-medium"> Do want to star writing here at Fridium? Please log in or sign up and start writing today!</h3>
            <div className="m-6">
            <BlogPosts />
            </div>
            </>
        )}
      </div>
      </>
    );
  };

  export default Home;
