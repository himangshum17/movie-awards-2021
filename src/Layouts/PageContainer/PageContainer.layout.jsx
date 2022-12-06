import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import styles from './PageContainer.module.css';

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
    </>
  );
};
export default PageContainer;
