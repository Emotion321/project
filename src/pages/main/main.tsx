import { getDocs, collection } from "firebase/firestore";
import { database } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post {
  id: string;
  useId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postslist, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(database, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {postslist?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
