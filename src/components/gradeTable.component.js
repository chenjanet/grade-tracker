import { data } from 'jquery';
import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';

import './components.css';

const EditableCell = ({
    column: { id },
    row: { index },
    value: initialValue,
    dataUpdated
}) => {
    const [value, setValue] = useState(initialValue);
    
    const onChange = e => {
        setValue(e.target.value)
    };

    const onBlur = () => {
        if (value !== initialValue) {
            initialValue = value;
            dataUpdated(index, id, value);
        }
    };

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue]);

    return <input value={value} onChange={onChange} onBlur={onBlur} />
}

const defaultColumn = {
    Cell: EditableCell,
};

function weightedGradeAccessor(row) {
    let weightedGrade = row.grade / 100 * row.weight;
    weightedGrade = +weightedGrade.toFixed(2);
    return Number(weightedGrade);
}

export default function GradeTable({ data, dataUpdated }) {
    const columns = useMemo(
        () => [
            {
                Header: "Grade",
                accessor: "grade"
            },
            {
                Header: "Weight (out of 100)",
                accessor: "weight",
                Footer: info => {
                    // Only calculate total visits if rows change
                    const total = React.useMemo(
                        () =>
                        info.rows.reduce((sum, row) => row.values.weight + sum, 0),
                        [info.rows]
                    )
        
                    return <>Total weight: {total}</>
                },
            },
            {
                Header: "Weighted grade",
                accessor: weightedGradeAccessor,
                Cell: ({ value }) => String(value),
                Footer: info => {
                    // Only calculate total visits if rows change
                    const total = React.useMemo(
                        () =>
                        info.rows.reduce((sum, row) => row.values.grade / 100 * row.values.weight + sum, 0),
                        [info.rows]
                    )
        
                    return <>Average: {total}</>
                },
            }
        ],
        []
    )

    const {
        getTableProps, 
        getTableBodyProps,
        headers,
        rows, 
        prepareRow
    } = useTable({ columns, data, defaultColumn, dataUpdated });

    return(
        <table {...getTableProps()}>
            <thead>
                <tr>
                    {
                        headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                { column.render('Header') }
                            </th>
                        ))
                    }
                </tr>
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
            <tfoot>
                {
                    headers.map(column => (
                        <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                    ))
                }
            </tfoot>
        </table>
    );
}
        