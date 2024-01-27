import SongList from './Components/song-list/SongList';
import styles from './app.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <SongList />
    </div>
  );
}

export default App;
