import React from 'react';
import { useTable } from 'react-table';

import './components.css';

export default function GradeTable({ grades }) {
    const {
        getTableProps, 
        getTableBodyProps,
        rows, 
        prepareRow 
      } = useTable({
        columns,
        data
      });

    return(
        <table {...getTableProps}>

        </table>
    );
}
        