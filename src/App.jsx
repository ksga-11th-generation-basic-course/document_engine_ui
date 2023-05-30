import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Root } from "./routes/Root";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Workspace } from "./pages/Workspace";
import { Document } from "./pages/Document";

function App() {
  return (
    <div className="App font-ssp">
      <Routes>
        <Route index element={<Landing />} />

        <Route path="/" element={<Root />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/document" element={<Document/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
