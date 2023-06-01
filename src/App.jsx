import { Post } from './components/post';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Sergio Filho"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur totam dignissimos suscipit soluta atque id cum quos, ducimus voluptatem illo? Voluptas maiores hic perferendis ullam facere doloribus eum cumque assumenda."
          />
          <Post
            author="Jonsons baby"
            content=" bilu teteita"
          />
        </main>
      </div>
    </div>
  )
}