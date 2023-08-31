import AnimatedRoutes from "@/components/AnimatedRoutes";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <AnimatedRoutes>{children}</AnimatedRoutes>
    </section>
  );
}
