import React, { useContext } from "react";
import BlogPosts from "../components/BlogPosts";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { userLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-8">
        <h1 className=" text-base font-medium"> WELCOME TO FRIDIUM </h1>
        {userLoggedIn ? (
          <BlogPosts />
        ) : (
          <>
            <h2 className=" text-base font-medium"> Hey you! </h2>
            <h3 className=" text-base font-medium">
              {" "}
              Do you want to start writing here at Fridium?
            </h3>
            <h3 className=" text-base font-medium">
              Please log in or sign up and start writing today!
            </h3>
            <div>
              <BlogPosts />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
