import styles from "../styles/Footer.module.css";
import avwebImage from "../public/images/avweb.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div id={styles.avwebMention}>
        <h4>© AV Web Development</h4>
        <div>
            <Image src={avwebImage} alt="Amador Valley Web Development Club Logo" width={250} height={80}></Image>
        </div>
      </div>

      <div>
        <h4>Sections</h4>
        <ul>
          <li>
            <a href="index.php">Home</a>
          </li>
          <li>
            <a href="studysites.php">Study Sites</a>
          </li>
          <li>
            <a href="data.php">Data</a>
          </li>
          <li>
            <a href="fieldguide.php">Field Guide</a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Other Links</h4>
        <ul>
          <li>
            <a href="index.php?files=t">File Downloads</a>
          </li>
          <li>
            <a href="fieldguide.php?p=/Endangered_Species">
              Endangered Species
            </a>
          </li>
          <li>
            <a href="fieldguide.php?p=/Indicator_Species">Indicator Species</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
