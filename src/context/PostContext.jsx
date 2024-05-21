import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "En dag i skogen",
      author: "Jane Doe",
      text: "Idag tog jag en härlig promenad i skogen. Naturen var så vacker och lugnande."
    },
    {
      id: 2,
      title: "Recept: Vegetarisk pastarätt",
      author: "John Smith",
      text: "Här är mitt favoritrecept på en läcker vegetarisk pastarätt med färsk basilika och parmesan."
    },
    {
      id: 3, 
      title: "Vilken dag!",
      author: "Jane Smith",
      text: "Idag satt jag ute i solen och tog en kopp kaffe. Sen åt jag en glass. Gott!"
    },
    {
      id: 4,
      title: "Sportigt värre!",
      author: "John Doe",
      text: "Jag är helt slut! Idag har det sportats hela dagen. Vi sprang ner till badet, sprang hem och tog en cykeltur senare."
    }
  ]);
    return (
    <PostContext.Provider value={{ posts }}>
      <div className="gap-7 max-w-md flex flex-col justify-center">
      {props.children}
      </div>
    </PostContext.Provider>  
    );
  };
