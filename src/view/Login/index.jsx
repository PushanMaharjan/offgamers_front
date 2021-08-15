import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import offgamers from "../../assets/icons/offgamers.png";
import Card from "../../components/globalComponents/Card";
import Input from "../../components/globalComponents/Input";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import InputPassword from "../../components/globalComponents/InputPassword";
import Checkbox from "../../components/globalComponents/Checkbox";
import Button from "../../components/globalComponents/Button";
import startbg from "../../assets/startbg.png";

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  img {
    margin-bottom: 30px;
  }
`;

const LeftBg = styled.div`
  background-image: url(${(props) => props.backgroundUrl});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const XlLoginWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 50px;
  img {
    margin-bottom: 30px;
  }
`;

const Heading = styled.div`
  color: ${({ theme }) => theme.headingColor};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const ForgotPassword = styled.div`
  color: ${({ theme }) => theme.placeholderColor};
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  margin: 10px 0px;
`;

function Login() {
  const InputStyle = {
    margin: "10px 0px",
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <Row>
        <Col xs={24} md={0}>
          <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <LoginWrapper>
              <Row justify="center">
                <img src={offgamers} alt="offgamers" />
              </Row>
              <Card>
                <Row justify="center">
                  <Heading>Login to Proceed</Heading>
                </Row>
                <Input style={InputStyle} placeholder="Email" />
                <InputPassword
                  style={InputStyle}
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <Checkbox style={InputStyle} onChange={onChange}>
                  Remember me
                </Checkbox>
                <Row>
                  <Button
                    style={{
                      width: "100%",
                      margin: "10px 0px",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "16px",
                      padding: "12px 32px",
                    }}
                  >
                    Login
                  </Button>
                </Row>
                <Row justify="center">
                  <ForgotPassword>Forgot Password?</ForgotPassword>
                </Row>
              </Card>
            </LoginWrapper>
          </Row>
        </Col>
        <Col xs={0} md={24}>
          <Row style={{ height: "100vh" }}>
            <Col xs={12}>
              <LeftBg backgroundUrl={startbg} />
            </Col>
            <Col xs={12}>
              <Row justify="center">
                <XlLoginWrapper>
                  <img src={offgamers} alt="offgamers" />
                  <Row align="middle" style={{ height: `calc(100vh - 200px)` }}>
                    <Col>
                      <Heading
                        style={{
                          textAlign: "left",
                        }}
                      >
                        Login to Proceed
                      </Heading>
                      <Input style={InputStyle} placeholder="Email" />
                      <InputPassword
                        style={InputStyle}
                        placeholder="Password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                      <Checkbox style={InputStyle} onChange={onChange}>
                        Remember me
                      </Checkbox>

                      <Row>
                        <Button
                          style={{
                            width: "100%",
                            margin: "10px 0px",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "16px",
                            padding: "12px 32px",
                          }}
                        >
                          Login
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </XlLoginWrapper>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Login;
