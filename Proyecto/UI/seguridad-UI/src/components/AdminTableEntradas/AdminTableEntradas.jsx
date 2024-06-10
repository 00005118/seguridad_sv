import * as React from 'react';
import dummyData from '../../data/SOLICITUDESAD.json';
import { useTable } from 'react-table';

const AdminTableEntradas = () => {
    const data = React.useMemo(() => dummyData, []);
    const columns = React.useMemo(() => [
        {
            Header: "Nombre",
            accessor: "nombre-residente",
        },
        {
            Header: "Fecha de entrada",
            accessor: "fecha-entrada",
        },
        {
            Header: "Hora de entrada",
            accessor: "hora-entrada",
        },
        {
            Header: "Estado",
            accessor: "estado",
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

export default AdminTableEntradas;