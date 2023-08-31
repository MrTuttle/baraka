"use client";
import List from "@/components/List";
import Link from "next/link";

// const blogs = ["Mon blog 1", "Mon deuxième", "Le Blog", "Article"];
// const listblogs = () =>{
//   blogs.map( item => {
//     <li>{item}</li>})

//   }

interface Props {
  title: string;
  blogs: ["Mon blog", "ton Blog", "son blog"];
}

export default function Page({ blogs }: Props) {
  return (
    <>
      <h1 className="pt-3.5 megatypo">Hello Blog</h1>
      <div className="py-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi!
        </p>

        <List />
      </div>
    </>
  );
}
