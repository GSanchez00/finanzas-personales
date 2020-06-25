import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Table } from "reactstrap";
import TableCellGeneric from './TableCellGeneric'

export default function CustomTable({header, data, columnsOrder}) {
    return (
        <Table responsive>
            <thead>
                <tr>
                    {
                        header.map((el, key)=>
                        (
                            <th key={key}>{el}</th> 
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        data.map((cell, key) => {
                        return (
                            <tr key={key}>
                                <TableCellGeneric cellData={cell} columnsOrder={columnsOrder} />
                            </tr>
                            );
                        })
                    }
            </tbody>
        </Table>
    )
}