import AnimatedRoutes from "@/components/AnimatedRoutes";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <AnimatedRoutes>
        <h1 className="pt-3.5 text-5xl ">Blog — {params.id}</h1>
      </AnimatedRoutes>
    </>
  );
}
