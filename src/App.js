import './App.css';
import { SortingTable } from './components/SortingTable'
function App() {
  return (
    <div className="App bg-warning">
      <div className="container-fluid">
        <div className="row">
          <div className="col w-100">
      <SortingTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
