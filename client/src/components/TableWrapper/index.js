import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHeader from "./TableHeader";
import TableRowData from "./TableRowData";

const TableWrapper = () => {
  const items = [
    {
      id: 1,
      name: "Company1",
      roles: ["Sales", "UX", "Project Manager", "Web developer"],
      job_type: "Contract",
      locations: "location1",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 2,
      name: "Company2",
      roles: ["Web developer"],
      job_type: "Permanent",
      locations: "location2",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 3,
      name: "Company3",
      roles: ["Web developer", "UX"],
      job_type: "Permanent",
      locations: "location3",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 4,
      name: "Company4",
      roles: ["UX", "Project Manager"],
      job_type: "Contract",
      locations: "location4",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 5,
      name: "Company5",
      roles: ["www", "www"],
      job_type: "Contract",
      locations: "location5",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHeader />
        <TableRowData items={items} />
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
