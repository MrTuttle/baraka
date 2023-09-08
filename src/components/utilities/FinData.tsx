import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getContactsData = async () => {
  const contact = await prisma.contact.findMany();
  // const res = await fetch(prisma);

  return contact;
};

export default async function FindData() {
  const contacts = await getContactsData();
  return (
    <>
      <div className="p-10">
        <h1>FIND DATA COMPONENT</h1>
      </div>
      {/* <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.firstName}</li>
        ))}
      </ul> */}
      <div className="px-10 py-5 bloctrace">
        <table className="table-fixed min-w-full">
          <thead>
            <tr className="text-left">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="pt-2">{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
