import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          All Bout things that are bigger, bolder, better and simply....a breeze
        </h1>
        <p className={styles.desc}>
          Stay up-to-date on the latest everything reagarding me, EZ Breezy!!
          From my favorite sports teams and news, to food and other Chicago
          related items. Will kee work related content to a minimum. All day
          every day is a breeze.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of blogging</p>
          </div>
          <div className={styles.box}>
            <h1>3k+</h1>
            <p>Followers</p>
          </div>
          <div className={styles.box}>
            <h1>Fav Teams</h1>
            <p>Cubs/Bulls/Bears</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;
