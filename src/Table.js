import { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { Data } = props;
  const data = Data.map((value, index) => {
    return (
      <tr key={index}>
        <td>
          {value.Name}
          </td>
          <td>
          {value.Job}
        </td>
      </tr>
    );
  });
  return <tbody>{data}</tbody>;
};

class Table extends Component {
  render() {
    // destructuring the props method 1
    // const Data = this.props.Data;
    // console.log(Data);

    // destructuring the props method 2 ES6
    const { Data } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody Data={Data} />
      </table>
    );
  }
}

export default Table;
