import Image from "next/image";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async () => {
  // option {cache: "no-store"} to prevent caching image and display different picture after refresh the page
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  return res.json();
};

// https://unsplash.com/fr/photos/un-couple-de-personnes-marchant-dans-une-rue-la-nuit-qCayic4GiwQ
// https://images.unsplash.com/photo-1687186735445-df877226fae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80
// https://dog.ceo/api/breeds/image/random
// https://images.pexels.com/photos/16645682/pexels-photo-16645682/free-photo-of-nature-buisson-jardin-feuilles.jpeg
// https://cataas.com/api/cats

export default async function ListOfPosts() {
  // to get one request :
  // const posts = await getPostsData();
  // use [] to get multiple requests :
  const [posts, users, dog] = await Promise.all([
    getPostsData(),
    getUsersData(),
    getDogData(),
  ]);

  return (
    <>
      <div>
        <Image src={dog.message} width="500" height="500" alt="chien" />
      </div>
      <div>
        {posts.map((post: any) => {
          return (
            <h1 className="text-2xl" key={post.id}>
              {" "}
              {post.title}
            </h1>
          );
        })}
      </div>
      <div>
        {users.map((user: any) => {
          return (
            <p className="pb-5" key={user.id}>
              {" "}
              {user.name} - {user.id}
            </p>
          );
        })}
      </div>
    </>
  );
}
