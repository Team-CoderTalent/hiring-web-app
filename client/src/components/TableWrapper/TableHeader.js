import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { injectIntl } from "react-intl";
import { StyledTableCell } from "./styles";
import copy from "../../copy.json";

export const TableHeader = ({ intl }) => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>
          {intl.formatMessage(copy.table.tableCell1)}
        </StyledTableCell>
        <StyledTableCell align="right">
          {intl.formatMessage(copy.table.tableCell2)}
        </StyledTableCell>
        <StyledTableCell align="right">
          {intl.formatMessage(copy.table.tableCell3)}
        </StyledTableCell>
        <StyledTableCell align="right">
          {intl.formatMessage(copy.table.tableCell4)}
        </StyledTableCell>
        <StyledTableCell align="right">
          {intl.formatMessage(copy.table.tableCell5)}
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default injectIntl(TableHeader);
