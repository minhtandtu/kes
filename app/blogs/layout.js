import Sidebar from "../components/blogs/Sidebar";
export default function Layout({ children }) {
  return (
    <div className="flex container bd mx-auto">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}
