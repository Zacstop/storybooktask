import { useState } from "react";
import "./App.css";
import { SideMenu } from "./components";
import { ReactComponent as HomeIcon } from "./assets/icon/Home.svg";

function App() {
  const [count, setCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(
    null
  );

  const isOpen = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://reactjs.org" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={handleClick}>button</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
