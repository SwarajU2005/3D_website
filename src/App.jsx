import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Video from "./components/Video"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Video/>
    </main>
  )
}

export default App