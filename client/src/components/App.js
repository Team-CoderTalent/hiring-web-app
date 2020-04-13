import React from "react";
import { IntlProvider } from "react-intl";
import Container from "@material-ui/core/Container";
import Header from "./Header";

const App = () => (
  <IntlProvider locale="en">
    <Container>
      <Header />
    </Container>
  </IntlProvider>
);

export default App;
