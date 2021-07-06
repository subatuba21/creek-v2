import styles from "../styles/Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <div id={styles.navbar}>
      <div id={styles.navbarLeft}>
        <i className="mdi mdi-menu" id="menu"></i>
        <div className={styles.navbarItem} id="home">
          <Link href="/">Home</Link>
        </div>
        <div className={styles.navbarItem} id="study-sites">
          <Link href="/studysites">Study Sites</Link>
          <div className={styles.dropdown}>
            <a href="studysites.php">Home</a>
            <a href="studysites.php?page=1">Site 1</a>
            <a href="studysites.php?page=2">Site 2</a>
            <a href="studysites.php?page=3">Site 3</a>
            <a href="studysites.php?page=4">Site 4</a>
            <a href="studysites.php?page=5">Site 5</a>
            <a href="studysites.php?page=6">Site 6</a>
            <a href="studysites.php?page=7">Site 7</a>
            <a href="studysites.php?page=8">Site 8</a>
            <a href="studysites.php?page=9">Site 9</a>
            <a href="studysites.php?page=10">Site 10</a>
            <a href="studysites.php?page=11">Site 11</a>
            <a href="studysites.php?page=12">Site 12</a>
            <a href="studysites.php?page=13">Site 13</a>
            <a href="studysites.php?page=14">Site 14</a>
          </div>
        </div>
        <div className={styles.navbarItem} id="data">
          <Link href="/data">Data</Link>
          <div className={styles.dropdown}>
            <a href="data.php">Home</a>
            <a href="data.php?page=conductivity">Conductivity</a>
            <a href="data.php?page=turbidity">Turbidity</a>
            <a href="data.php?page=temperature">Temperature</a>
            <a href="data.php?page=depth">Depth</a>
            <a href="data.php?page=phosphate levels">Phosphate Levels</a>
            <a href="data.php?page=ph">pH</a>
            <a href="data.php?page=nitrate">Nitrate</a>
            <a href="data.php?page=plankton net">Plankton Net</a>
            <a href="data.php?page=kick net">Kick Net</a>
            <a href="data.php?page=seine net">Seine Net</a>
            <a href="data.php?page=dip net">Dip Net</a>
            <a href="data.php?page=succession">Succession</a>
            <a href="data.php?page=sediments">Sediments</a>
            <a href="data.php?page=clean up">Clean Up</a>
          </div>
        </div>
        <div className={styles.navbarItem} id="field-guide">
          <Link href="fieldguide.php">Field Guide</Link>
        </div>
        <div className={styles.navbarItem} id="gallery">
          <a>Open Gallery</a>
        </div>
      </div>

      <div id={styles.navbarRight}>
        <div className={styles.navbarItem}>
          <Link href="">Creekwatch</Link>
        </div>
      </div>
    </div>
  );
}
