import React from "react";
import { IntlProvider } from "react-intl";
import Container from "@material-ui/core/Container";
import Logo from "./Logo";
import Header from "./Header";
import TopBar from "./TopBar";
import TableWrapper from "./TableWrapper";
import { GlobalProvider } from "../state/GlobalState";
import useInputState from "../hooks/useInputState";
import useCheckboxState from "../hooks/useCheckboxState";

const App = () => {
  const searchText = useInputState("");
  const showOnlyContractCheckboxState = useCheckboxState(false);
  const showOnlyPermanentCheckboxState = useCheckboxState(false);
  return (
    <GlobalProvider>
      <IntlProvider locale="en">
        <Container>
          <Logo />
          <Header />
          <TopBar
            searchTerm={searchText}
            showOnlyContract={showOnlyContractCheckboxState}
            showOnlyPermanent={showOnlyPermanentCheckboxState}
          />
          <TableWrapper
            searchTerm={searchText.value}
            showOnlyContract={showOnlyContractCheckboxState.value}
            showOnlyPermanent={showOnlyPermanentCheckboxState.value}
          />
        </Container>
      </IntlProvider>
    </GlobalProvider>
  );
};

export default App;
