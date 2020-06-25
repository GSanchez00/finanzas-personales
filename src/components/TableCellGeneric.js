import React from "react";
import {formatDDMMYYYY} from "../helpers/dateHelper";
import PropTypes from "prop-types";

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

TableCellGeneric.propTypes = {
    cellData: PropTypes.object,
    columnsOrder: PropTypes.arrayOf(PropTypes.string),
  };