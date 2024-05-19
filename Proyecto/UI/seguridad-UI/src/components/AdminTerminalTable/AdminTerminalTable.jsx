import * as React from 'react';
import dummyData from '../../data/TERMINALES.json'
import { useTable } from 'react-table';

const AdminTerminalTable = () => {
    const data = React.useMemo(() => dummyData, []);
    const columns = React.useMemo(() => [
        {
            Header: "ID del Terminal",
            accessor: "id-terminal",
        },
        {
            Header: "Nombre del Terminal",
            accessor: "nombre-terminal",
        },
        {
            Header: "Marca",
            accessor: "marca",
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

export default AdminTerminalTable;