import styles from "./App.module.css";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Posts, { Post } from "./components/Posts/Posts.tsx";

function App() {
  const postsApi: Post[] = [
    {
      id: 1,
      author: {
        avatarImage: "https://github.com/matheuscassioli.png",
        name: "Matheus Cassioli",
        role: "Front-end dev",
      },
      content: [
        {
          type: "paragraph",
          content: "teste 1",
        },
        {
          type: "paragraph",
          content: "teste 2",
        },
        {
          type: "link",
          content: "teste link",
        },
      ],
      publishedAt: new Date("2024-05-03 13:00:00"),
    },
    {
      id: 2,
      author: {
        avatarImage: "https://github.com/react-native-community.png",
        name: "React community",
        role: "React community",
      },
      content: [
        {
          type: "paragraph",
          content: "teste 1",
        },
        {
          type: "paragraph",
          content: "teste 2",
        },
        {
          type: "link",
          content: "teste 3",
        },
      ],
      publishedAt: new Date("2024-05-03 13:00:00"),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {postsApi.map((post) => { 
            return (
              <Posts 
                key={post.id}
                post={post} 
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
