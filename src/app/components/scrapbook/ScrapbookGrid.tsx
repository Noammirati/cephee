import styles from "./Scrapbook.module.css";

function ScrapbookGrid() {
  return (
    <div className={styles.scrapbookgrid}>
      <div className={styles.fig1}>FIG 1</div>
      <div className={styles.fig2}>FIG 2</div>
      <div className={styles.portrait}>PORTRAIT</div>
      <div className={styles.deco}>DECO</div>
    </div>
  );
}

export default ScrapbookGrid;
