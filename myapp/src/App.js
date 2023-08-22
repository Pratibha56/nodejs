import './components/imgCard'
import './App.css';
import data from "./data"

function App() {
  return (
    // <div>
    // (<h1>hello</h1>), 
    // (<p>this is my class</p>),
    // (<h2>hello world</h2>)
    // </div>
  //   <>
  //     <imgCard/>
  //  </>
  <div  className='container'>
  <h1>Card</h1>
  <div  className='row'>
  {
    data.map((card,))
  }
  </div>
  </div>

  );
}

export default App;
