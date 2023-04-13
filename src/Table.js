import { Component } from "react";


class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
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
            </table>
        )
    }
}

export default Table;