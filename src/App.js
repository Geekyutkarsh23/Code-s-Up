import DataProvider from "./Context/DataProvider";
import Home from "./components/Home";

function App() {
  return (
   <DataProvider>
   <Home/>
   </DataProvider>
  );
}

export default App;
