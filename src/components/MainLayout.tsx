import Header from './Header';
import Footer from './Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const MainLoyaout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLoyaout;
