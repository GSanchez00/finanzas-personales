import React from "react";
import {formatDDMMYYYY} from "../helpers/dateHelper";

export default function TableCellGeneric(props) {
    const { cellData, columnsOrder } = props;
    return (
            columnsOrder.map((column, i) => {
                return (
                    <td key={i}>
                        {typeof cellData[column]==="object" ? cellData[column].description : (column ==="datetime" ? formatDDMMYYYY(cellData[column]) : cellData[column])}
                    </td>
                )
            })
    )
}