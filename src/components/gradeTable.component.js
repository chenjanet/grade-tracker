import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';

import './components.css';

export default function GradeTable({ data, addGrade }) {
    const columns = React.useMemo(
        () => [
            {
                Header: "Grade",
                accessor: "grade"
            },
            {
                Header: "Weight",
                accessor: "weight"
            },
            {
                Header: "Weighted grade",
                accessor: "weightedGrade"
            }
        ],
        []
    )

    const {
        getTableProps, 
        getTableBodyProps,
        headers,
        rows, 
        prepareRow, 
    } = useTable({ columns, data });

    return(
        <table {...getTableProps()}>
            <thead>
                {
                    headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            { column.render('Header') }
                        </th>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                { cell.render('Cell') } 
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}
        