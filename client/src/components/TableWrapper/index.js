import React, { useContext, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHeader from "./TableHeader";
import TableRowData from "./TableRowData";
import { GlobalContext } from "../../state/GlobalState";

const TableWrapper = ({ searchTerm }) => {
  const { jobs, getJobs } = useContext(GlobalContext);

  //TODO: Refactor this to use reducer
  const filterJobs = jobs.filter(
    job => job.company.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHeader />
        <TableRowData items={filterJobs} />
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
