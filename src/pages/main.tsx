import { getDocs, collection } from "firebase/firestore";
import { database } from "../config/firebase";

export const Main = () => {
  const postsRef = collection(database, "posts");
  return <div> Home Page </div>;
};
