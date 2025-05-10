export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>Template Layout</h2>
      {children}
    </div>
  );
}