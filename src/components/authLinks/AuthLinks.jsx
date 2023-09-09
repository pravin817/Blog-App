import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
const AuthLinks = () => {
  const status = "notAuthemticate";
  return (
    <>
      {status === "notAuthemticate" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/login">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
