export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className='text-3xl'>NAVBAR</h1>
      {children}
    </div>
  );
}
