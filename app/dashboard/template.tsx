import Counter from "./components/Counter";

export default function DashboardTemplate({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="border-2 border-dashed border-white p-4 mx-auto">
        <div className="flex gap-8 font-bold text-lg mb-4 text-purple-500">
            Dashboard Template
        </div>
        <Counter />
        {children}
      </div>
    );
  }
  