import './App.css'
import {Listing} from "./components/Listing";
import {getData} from "./dataApi";

function App() {
  return (
    <>
      <Listing items={getData()}></Listing>
    </>
  )
}

export default App
