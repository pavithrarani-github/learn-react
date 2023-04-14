import { Component } from "react";

const TableHeader = () => {
    return(
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>
    )
   
}

const TableBody = () => {
   return(
    <tbody>
    <tr>
        <td>Charlie</td>
        <td>FE developer</td>
    </tr>
    <tr>
        <td>David</td>
        <td>BE developer</td>
    </tr>
    <tr>
        <td>Watson</td>
        <td>PM</td>
    </tr>
    <tr>
        <td>Bravo</td>
        <td>HR</td>
    </tr>
</tbody>
   )
}


class Table extends Component{
    render(){
        return(
            <table>
              <TableHeader/>
              <TableBody/>
               
            </table>
        )
    }
}

export default Table;