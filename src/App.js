import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Formation from "./pages/Formation/Formation";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Profile />
      <Formation />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
