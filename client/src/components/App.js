import React from "react";
import { IntlProvider } from "react-intl";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import TopBar from "./TopBar";
import TableWrapper from "./TableWrapper";

const App = () => (
  <IntlProvider locale="en">
    <Container>
      <Header />
      <TopBar />
      <TableWrapper />
    </Container>
  </IntlProvider>
);

export default App;
