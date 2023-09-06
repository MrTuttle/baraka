import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getContactsData = async () => {
  const contact = await prisma.contact.findMany();
  // const res = await fetch(prisma);
  console.log("hello");

  return contact;
};

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

// export async function getServerSideProps() {
//   // prisma query
//   const contacts = await prisma.contact.findMany();
//   console.log(contacts);
//   return {
//     props: {
//       initialContact: contacts,
//     },
//   };
// }

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
const logotor = () => {
  console.log("Hello");
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
    getContactsData(),
  ]);

  const contacts = await getContactsData();

  return (
    <>
      <div>
        <Image src={dog.message} width="500" height="500" alt="chien" />
      </div>
      {/* recupere sqlite */}
      <div className="py-90">
        <p>
          {contacts.map(
            (contact) => contact.firstName + " " + contact.lastName
          )}
        </p>
        <ul>
          {contacts.map((contact) => (
            <li
              key={contact.id}
            >{`contact : ${contact.firstName} ${contact.lastName}`}</li>
          ))}
          <li>END</li>
        </ul>
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
      <div className="assets"></div>
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
