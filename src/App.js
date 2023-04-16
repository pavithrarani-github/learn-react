import { Component } from "react";
import Table from "./Table";
class App extends Component {
  render(){
    const Data = [
      {
        Name:"Charlie",
        Job:"FE developer"
      },
      {
        Name:"David",
        Job:"BE developer"
      },
      {
        Name:"Watson",
        Job:"PM"
      },
      {
        Name:"Bravo",
        Job:"HR"
      },
    ]
    return (
      <div className="container">
        <h1>Table</h1>
        {/* passing props from app.js to Table.js */}
           <Table Data = {Data}/> 
      </div>
   
    )
  }

}
export default App;