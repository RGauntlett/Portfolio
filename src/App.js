import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes/Routes";

function App() {
  return (
    <div className={styles.App}>
      <Routes />
    </div>
  );
}

export default App;
