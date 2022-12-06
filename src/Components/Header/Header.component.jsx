import styles from './Header.module.css';
const Header = () => {
  return (
    <header>
      <div className='container'>
        <h1 className={styles.title}>awards 2021</h1>
      </div>
    </header>
  );
};
export default Header;
