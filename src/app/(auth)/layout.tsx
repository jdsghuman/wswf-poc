export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full my-8 max-md:my-0">
      {children}
    </div>
  );
}
