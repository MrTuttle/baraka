import Image from "next/image";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Image
        src="/portrait-131.jpg"
        alt="willem Dafoe"
        width={200}
        height={200}
      />
      <Image
        src="/baraka/chambre-2.jpg"
        alt="willem Dafoe"
        width={200}
        height={200}
      />
    </>
  );
}
