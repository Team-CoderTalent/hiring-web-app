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
      roles: "Role1",
      locations: "location1",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 2,
      name: "Company2",
      roles: "Role2",
      locations: "location2",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 3,
      name: "Company3",
      roles: "Role3",
      locations: "location3",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 4,
      name: "Company4",
      roles: "Role4",
      locations: "location4",
      last_updated: "04 Apr",
      apply_link: "https://codertalent.io",
    },
    {
      id: 5,
      name: "Company5",
      roles: "Role5",
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
