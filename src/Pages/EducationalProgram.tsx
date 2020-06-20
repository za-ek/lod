import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export class EducationalProgram extends React.PureComponent<{}> {
    render() {
        return <Container>
            <Row>
                <Col>
                    <h1>Системы хранения информации</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    Left
                </Col>
                <Col xs="8">
                    Right
                </Col>
            </Row>
        </Container>;
    }
}