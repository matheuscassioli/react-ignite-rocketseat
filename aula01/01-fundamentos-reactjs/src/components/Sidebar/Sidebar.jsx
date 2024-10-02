import React from 'react'
import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1681433343461-b2578d44f7ac?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/82168386?v=4" />
                <strong>Matheus Cassioli</strong>
                <span>Front-end developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar