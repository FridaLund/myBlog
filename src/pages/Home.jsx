import BlogPosts from '../components/BlogPosts'
import { PostProvider } from '../context/PostContext';

const Home = () => {
    return (
      <>
      <PostProvider>
        <div className="flex flex-col justify-center">
        <BlogPosts></BlogPosts>
        </div>
        </PostProvider>
      </>
    );
  };
  
  
  export default Home;
