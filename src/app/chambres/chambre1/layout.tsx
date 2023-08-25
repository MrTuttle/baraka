import AnimatedRoutes from "@/components/AnimatedRoutes";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedRoutes>
      <section>{children}</section>
    </AnimatedRoutes>
  );
}
