import React, { useContext, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHeader from "./TableHeader";
import TableRowData from "./TableRowData";
import { GlobalContext } from "../../state/GlobalState";

const TableWrapper = () => {
  const { jobs, getJobs } = useContext(GlobalContext);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHeader />
        <TableRowData items={jobs} />
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
