import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image rc="/about.jpg" alt="" fill />
      </div>
    </div>
  );
};

export default About;
