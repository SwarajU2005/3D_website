import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Video from "./components/Video"
import Model from "./components/Model"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Video/>
      <Model/>
    </main>
  )
}

export default App