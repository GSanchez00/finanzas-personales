import React from "react";
import {formatDDMMYYYY} from "../helpers/dateHelper";
import PropTypes from "prop-types";

export default function TableCellGeneric(props) {
    const { cellData, columnsOrder } = props;

    const renderColumn=(column)=>
    {
        switch (column.type) {
            case 'object':
            return cellData[column.column][column.data];
            case 'date':
            return formatDDMMYYYY(cellData[column.column]);
            case 'img':
            return <img src={cellData[column.column]} class="rounded-circle" width="67" height="50" alt="" />;
            default:
            return cellData[column.column];
        }
    }

    return (
            columnsOrder.map((column, i) => {
                return (
                    <td key={i}>
                        {
                            renderColumn(column)
                        }
                    </td>
                )
            })
    )
}

TableCellGeneric.propTypes = {
    cellData: PropTypes.object,
    columnsOrder: PropTypes.arrayOf(PropTypes.object),
  };