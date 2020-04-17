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
          <strong>{item.name}</strong>
        </StyledTableCell>
        <StyledTableCell>
          {item.roles.map((role, index) => (
            <div key={index}>{role}</div>
          ))}
        </StyledTableCell>
        <StyledTableCell>{item.job_type}</StyledTableCell>
        <StyledTableCell>{item.locations}</StyledTableCell>
        <StyledTableCell>{item.last_updated}</StyledTableCell>
        <StyledTableCell>
          <a href={item.apply_link} target="_blank" rel="noopener noreferrer">
            {intl.formatMessage(copy.applyNow)}
          </a>
        </StyledTableCell>
      </StyledTableRow>
    ))}
  </TableBody>
);

export default injectIntl(TableRowData);
