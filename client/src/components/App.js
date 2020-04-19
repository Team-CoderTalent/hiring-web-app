import React from "react";
import { IntlProvider } from "react-intl";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import TopBar from "./TopBar";
import TableWrapper from "./TableWrapper";
import { GlobalProvider } from "../state/GlobalState";
import useInputState from "../hooks/useInputState";

const App = () => {
  const searchText = useInputState("");
  return (
    <GlobalProvider>
      <IntlProvider locale="en">
        <Container>
          <Header />
          <TopBar searchTerm={searchText} />
          <TableWrapper searchTerm={searchText.value} />
        </Container>
      </IntlProvider>
    </GlobalProvider>
  );
};

export default App;
