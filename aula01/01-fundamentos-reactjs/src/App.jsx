
import styles from "./App.module.css"
import Header from "./components/Header/Header.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Posts from "./components/Posts/Posts.jsx"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts
            author="Matheus Cassioli"
            function="Front-end developer"
          />
          <Posts
            author="Matheus Cassioli"
            function="Back-end developer"
          />
        </main>
      </div>
    </div>
  )
}

export default App
