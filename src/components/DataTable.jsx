import Table from 'react-bootstrap/Table';

function DataTable() {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Admission NO</th>
          <th>Name</th>
          <th>Bus ID</th>
          <th>Class</th>
          <th>Section</th>
          <th>Last Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>08908934</td>
          <td>Nitesh Vishwakarma</td>
          <td>223849238</td>
          <td>7</td>
          <td>A</td>
          <td>07-02-2023 3:30:26</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DataTable;