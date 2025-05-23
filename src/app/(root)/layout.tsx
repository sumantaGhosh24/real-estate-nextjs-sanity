import Header from "./_components/header";
import Footer from "./_components/footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
