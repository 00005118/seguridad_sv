import * as React from 'react';
import dummyData from '../../data/HOGARES.json'
import { useTable } from 'react-table';

const AdminHomeTables = () => {
    const data = React.useMemo(() => dummyData, []);
    const columns = React.useMemo(() => [
        {
            Header: "Id",
            accessor: "id-casa",
        },
        {
            Header: "Numero de Casa",
            accessor: "numero-casa",
        }
    ], []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className='table'>
            <div className="table-container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );


}

export default AdminHomeTables;