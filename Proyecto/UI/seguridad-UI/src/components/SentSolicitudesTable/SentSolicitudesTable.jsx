import * as React from 'react';
import dummyData from '../../data/SOLICITUDES.json';
import './SentSolicitudesTable.css';
import { useTable } from 'react-table';

const SentSolicitudesTable = () => {
    const data = React.useMemo(() => dummyData, []);
    const columns = React.useMemo(() => [
        {
            Header: "Nombre",
            accessor: "nombre-visita",
        },
        {
            Header: "Fecha de visita",
            accessor: "fecha-visita",
        },
        {
            Header: "Hora de visita",
            accessor: "hora-visita",
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

export default SentSolicitudesTable;
