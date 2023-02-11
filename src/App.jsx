import UploadButtons from "./components/UploadButtons";

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <UploadButtons />;
}

export default App;
