import logo from './logo.svg';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="main">
      { <Navbar /> }
      { <ImageGrid />}
    </div>
  )
}
export default App;
