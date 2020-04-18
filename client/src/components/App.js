import React from "react";
import { IntlProvider } from "react-intl";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import TopBar from "./TopBar";
import TableWrapper from "./TableWrapper";

import { GlobalProvider } from "../state/GlobalState";

const App = () => (
  <GlobalProvider>
    <IntlProvider locale="en">
      <Container>
        <Header />
        <TopBar />
        <TableWrapper />
      </Container>
    </IntlProvider>
  </GlobalProvider>
);

export default App;
