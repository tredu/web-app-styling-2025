
import Image from "next/image";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <Typography variant="h3" component="h1" gutterBottom>
            To get started, edit the page.js file.
          </Typography>
          <Typography variant="body1" gutterBottom>
            lorem ipsum dolor sit amet
          </Typography>
          <Button variant="contained" color="primary">MUI Button</Button>
        </div>
      </main>
    </div>
  );
}
