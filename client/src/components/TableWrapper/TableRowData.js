import React from "react";
import TableBody from "@material-ui/core/TableBody";
import { StyledTableCell, StyledTableRow } from "./styles";
import { injectIntl } from "react-intl";
import copy from "../../copy.json";

export const TableRowData = ({ intl, items }) => (
  <TableBody>
    {items.map(item => (
      <StyledTableRow key={item._id}>
        <StyledTableCell component="th" scope="row">
          <strong>{item.company}</strong>
        </StyledTableCell>
        <StyledTableCell>{item.role}</StyledTableCell>
        <StyledTableCell>{item.jobType}</StyledTableCell>
        <StyledTableCell>{item.location}</StyledTableCell>
        <StyledTableCell>{item.lastUpdated}</StyledTableCell>
        <StyledTableCell>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {intl.formatMessage(copy.applyNow)}
          </a>
        </StyledTableCell>
      </StyledTableRow>
    ))}
  </TableBody>
);

export default injectIntl(TableRowData);
