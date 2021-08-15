import { Checkbox } from "antd";
import styled from "styled-components";

export default styled(Checkbox)`
  color: ${({ theme }) => theme.placeholderColor};
  .ant-checkbox-inner {
    border: 1.5px solid #a2afb7;
  }
`;
