import React, { useContext, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHeader from "./TableHeader";
import TableRowData from "./TableRowData";
import { styles } from "./styles";
import { GlobalContext } from "../../context/GlobalState";

const TableWrapper = ({ showOnlyContract, showOnlyPermanent }) => {
  const classes = styles();
  const { jobs, getJobs } = useContext(GlobalContext);

  //TODO: Refactor this to use reducer
  let filterJobs = jobs;

  if (showOnlyContract) {
    filterJobs = filterJobs.filter(job => job.jobType === "Contract");
  }

  if (showOnlyPermanent) {
    filterJobs = filterJobs.filter(job => job.jobType === "Permanent");
  }

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHeader />
        <TableRowData items={filterJobs} />
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
