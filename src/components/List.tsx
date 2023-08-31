import Link from "next/link";
import React from "react";

const List = () => {
  const titres = [
    "Toto",
    "ton Blog",
    "son blog",
    "l-adresse-ne-peut-pas-prendre-d-espace",
  ];
  const path = "/blog/";
  const renderList = () =>
    titres.map((item, index) => `<li key=${index}>${item}</li>`);
  console.log(`renderlist log : ${path}`);

  return (
    <>
      <div>List</div>
      <ul>
        {titres.map((item, index) => (
          <li key={index}>
            <Link href={path + item}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
