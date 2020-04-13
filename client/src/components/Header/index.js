import React from "react";
import { injectIntl } from "react-intl";
import copy from "../../copy.json";

export const Header = ({ intl }) => (
  <div>{intl.formatMessage(copy.header)}</div>
);

export default injectIntl(Header);
