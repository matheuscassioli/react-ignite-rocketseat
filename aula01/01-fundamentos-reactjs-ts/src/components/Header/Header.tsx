import styles from "./Header.module.css"
import logo from "../../assets/CassiDEV.png"

const Header = () => {
    return (
        <header className={styles.header} >
            <img title="MCASSI POSTS" src={logo} />
        </header>
    )
}

export default Header
