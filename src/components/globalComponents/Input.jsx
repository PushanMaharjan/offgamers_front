import { Input } from "antd";
import styled from "styled-components";

export default styled(Input)`
  background-color: transparent;
  padding: 12px 16px;
  border: 1px solid #d9dee1;
  border-radius: 4px;
  ::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }
`;
