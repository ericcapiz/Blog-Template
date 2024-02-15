import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16955708/pexels-photo-16955708/free-photo-of-spalding-nba-basketball-ball.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/16955708/pexels-photo-16955708/free-photo-of-spalding-nba-basketball-ball.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>EZ Breezy</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>02/15/24</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore
          suscipit ab fuga, quia nostrum quae aut explicabo mollitia ut? Eaque
          debitis voluptatum aliquam, at amet cumque quo quia placeat.
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
