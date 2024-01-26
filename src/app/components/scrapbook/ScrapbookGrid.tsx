import Image from "next/image";
import styles from "./Scrapbook.module.css";

function ScrapbookGrid() {
  return (
    <div className={styles.scrapbookgrid}>
      <Image
        className={styles.fig1}
        src="https://picsum.photos/500/600"
        width={500}
        height={600}
        alt="Figure 2"
      />
      <Image
        className={styles.fig2}
        src="https://picsum.photos/400/600"
        width={400}
        height={600}
        alt="Figure 2"
      />

      <div className={styles.portrait}>
        <Image
          className={styles.portrait__frame}
          src="/round-frame.png"
          alt="frame"
          width={500}
          height={500}
        />
        <Image
          className={styles.portrait__content}
          src="https://picsum.photos/id/64/300"
          width={300}
          height={300}
          alt="Figure 2"
        />
      </div>
      <Image
        className={styles.deco}
        src="/heart.png"
        alt="heart"
        width={400}
        height={400}
      />
    </div>
  );
}

export default ScrapbookGrid;
