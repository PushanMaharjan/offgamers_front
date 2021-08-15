import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import offgamers from "../../assets/icons/offgamers.png";
import startbg from "../../assets/startbg.png";
import Card from "../../components/globalComponents/Card";
import Input from "../../components/globalComponents/Input";
import Button from "../../components/globalComponents/Button";

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  img {
    margin-bottom: 30px;
  }
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

const Description = styled.div`
  color: ${({ theme }) => theme.placeholderColor};
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;

const LeftBg = styled.div`
  background-image: url(${(props) => props.backgroundUrl});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

function ForgotPassword() {
  const InputStyle = {
    margin: "10px 0px",
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
                  <Heading>Recover your password</Heading>
                </Row>
                <Description>
                  Enter your email address and look out for an email from us
                  with instructions on how to reset your password!
                </Description>
                <Input style={InputStyle} placeholder="Email Address" />

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
                    Send email
                  </Button>
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
                        Recover your password
                      </Heading>
                      <Description
                        style={{
                          textAlign: "left",
                        }}
                      >
                        Enter your email address and look out for an email from
                        us with instructions on how to reset your password!
                      </Description>
                      <Input style={InputStyle} placeholder="Email Address" />

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
                          Send email
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

export default ForgotPassword;
