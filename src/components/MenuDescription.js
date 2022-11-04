import styles from './MenuDescription.module.css';

function MenuDescription(props) {
  return (
    <div className={styles.title__container}>
        <h2 className={styles.menu__title}>{props.title}</h2>
    </div>
  );
};

export default MenuDescription;