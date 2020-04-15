import React from "react";
import TableBody from "@material-ui/core/TableBody";
import { StyledTableCell, StyledTableRow } from "./styles";
import { injectIntl } from "react-intl";
import copy from "../../copy.json";

export const TableRowData = ({ intl, items }) => (
  <TableBody>
    {items.map(item => (
      <StyledTableRow key={item.id}>
        <StyledTableCell component="th" scope="row">
          {item.name}
        </StyledTableCell>
        <StyledTableCell align="right">{item.roles}</StyledTableCell>
        <StyledTableCell align="right">{item.locations}</StyledTableCell>
        <StyledTableCell align="right">{item.last_updated}</StyledTableCell>
        <StyledTableCell align="right">
          <a href={item.apply_link} target="_blank" rel="noopener noreferrer">
            {intl.formatMessage(copy.table.tableLink)}
          </a>
        </StyledTableCell>
      </StyledTableRow>
    ))}
  </TableBody>
);

export default injectIntl(TableRowData);
