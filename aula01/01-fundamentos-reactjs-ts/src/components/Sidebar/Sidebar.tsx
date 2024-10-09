import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import Avatar from "../Avatar/Avatar";

const Sidebar = () => {
  const [dinamicImage, setDinamicImage] = useState(
    "https://plus.unsplash.com/premium_photo-1681433343461-b2578d44f7ac?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const dinamicsUrls = [
    "https://media.istockphoto.com/id/1404221665/pt/foto/abstract-defocused-lens-color-gradient-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sr_bYAMsFKh2yYG97OXY711oiA16dB31mE8phCzmlWU=",
    "https://plus.unsplash.com/premium_photo-1668650610258-043278428a93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVycGxlfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1486780208/pt/foto/misty-black-concrete-room-background-with-blue-pink-light-and-smoke-neon-color-plaster-stucco.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xz0pvTEfjquwqxdRxBDp4bnEDaSTMlXQwpDs6jP596E=",
    "https://plus.unsplash.com/premium_photo-1681433343461-b2578d44f7ac?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const loopingBackGroundImage = setInterval(() => {
      setDinamicImage(dinamicsUrls[currentIndex]);
      currentIndex++;
      if (currentIndex >= dinamicsUrls.length) {
        currentIndex = 0;
      }
    }, 1500);
    return () => clearInterval(loopingBackGroundImage);
  }, []);

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={dinamicImage} />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/82168386?v=4" />
        <strong>Matheus Cassioli</strong>
        <span>Front-end developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
