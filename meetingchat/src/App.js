import "./App.css"
import Left from './Components/Left'
import Middle from './Components/Middle'
import Right from './Components/Right'
function App() {
  return (
    <>
    <div className="main">
      <div className="left">
<Left/>
      </div>
      <div className="middle">
      <Middle/>
      </div>
      <div className="right">
      <Right/>
      </div>
    </div>
    </>
  );
}

export default App;
