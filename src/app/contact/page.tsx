import { List } from "@/components";
import Form from "@/components/Forms/Form";
import FormContact from "@/components/Forms/FormContact";
import HeroExperimental from "@/components/HeroExperimental";
import FindData from "@/components/utilities/FinData";
import { motion, AnimatePresence } from "framer-motion";
import ContactList from "@/components/ContactList";

import Image from "next/image";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <div className="py-[200px] bloctrace">
        <h1 className="pt-3.5 megatypo">Cont</h1>
        <h1 className="pt-3.5 megatypo">
          <span>./</span>Act
        </h1>
      </div>
      <section className="py-[100px] bloctrace">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bloctrace">
          <Form></Form>
        </main>
        <FindData />
      </section>
      <section className="pt-90 bloctrace width-90">
        <HeroExperimental />
      </section>
      <List />
      <FormContact />
    </>
  );
}
