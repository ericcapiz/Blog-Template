import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16955708/pexels-photo-16955708/free-photo-of-spalding-nba-basketball-ball.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>02/09/2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
