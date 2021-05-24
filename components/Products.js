import styles from '../styles/Products.module.css';

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <a className={styles.card}>
          <h2>{product.title} &rarr;</h2>
        </a>
      ))}
    </div>
  );
};

export default Products;
