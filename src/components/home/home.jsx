import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi there !</h1>
        <div className={styles.linkContainer}>
          <div className={styles.linkWrapper}>
            <h2 className={styles.subtitle}>Already a member?</h2>
            <Link to="/login" className={styles.link}>Log In</Link>
          </div>
          <div className={styles.linkWrapper}>
            <h2 className={styles.subtitle}>New here?</h2>
            <Link to="/signUp" className={styles.link}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

