import React from "react";
import { IntlProvider } from "react-intl";
import Container from "@material-ui/core/Container";
import Logo from "./Logo";
import Header from "./Header";
import TopBar from "./TopBar";
import Footer from "./Footer";
import TableWrapper from "./TableWrapper";
import { GlobalProvider } from "../context/GlobalState";
import useCheckboxState from "../hooks/useCheckboxState";

const App = () => {
  const showOnlyContractCheckboxState = useCheckboxState(false);
  const showOnlyPermanentCheckboxState = useCheckboxState(false);
  return (
    <GlobalProvider>
      <IntlProvider locale="en">
        <Container>
          <Logo />
          <Header />
          <TopBar
            showOnlyContract={showOnlyContractCheckboxState}
            showOnlyPermanent={showOnlyPermanentCheckboxState}
          />
          <TableWrapper
            showOnlyContract={showOnlyContractCheckboxState.value}
            showOnlyPermanent={showOnlyPermanentCheckboxState.value}
          />
          <Footer />
        </Container>
      </IntlProvider>
    </GlobalProvider>
  );
};

export default App;
