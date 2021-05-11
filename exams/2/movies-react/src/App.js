import logo from './logo.svg'
import './App.css'


import axios from 'axios'

import './css/bootstrap.min.css'
import './css/style.css'
import Finder from './components/Finder'


function handleSearch(event) {
  event.preventDefault()
  alert('1')
}

function App() {
  return (
    <div className="container">
      <form>
        <Finder />
      </form>
    </div>
  );
}

export default App;
