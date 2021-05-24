import Products from '../components/Products';
import styles from '../styles/Home.module.css';

const Home = ({ products }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>getStaticProps</h1>

      <Products products={products} />
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://membership-demo-strapi.herokuapp.com/products`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default Home;
