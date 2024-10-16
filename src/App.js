import { useState } from "react";
import { Avatar } from "./components/Avatar";
import { Products } from "./components/Products";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Products setLoading={setLoading} loading={loading} />
      <Avatar loading={loading} />
    </div>
  );
}

export default App;
