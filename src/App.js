import StoreProvider from "./components/Contexts/StoreProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MusicItem from "./components/Music/MusicItem";
import Navibar from "./components/Navbar/Navbar";

function App() {
  return (
    <StoreProvider>
      <Navibar />
      <Header />
      <MusicItem />
      <Footer />
    </StoreProvider>
  );
}

export default App;
