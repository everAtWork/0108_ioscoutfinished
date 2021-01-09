import './App.css';
import { FilteringTable } from './components/FilteringTable'
function App() {
  return (
    <div className="App bg-primary">
      <div className="container-fluid">
        <div className="row">
          <div className="col my-2 m-md-4">
            <FilteringTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
