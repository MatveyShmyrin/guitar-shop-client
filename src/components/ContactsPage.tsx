import React from 'react';
import styles from "../styles/ContactsPage.module.css";
import {Accordion, Col, Container, Row} from "react-bootstrap";


const ContactsPage = () => {
    return (
        <Container className={styles.contactsPage}>
            <Container className = {styles.contactsPageH1}>
                <h1>Contact Fender</h1>
            </Container>
            <React.Fragment><br/></React.Fragment>
            <Container className={styles.catalogPageImg}>
                <img width = "100%" src = "https://m.media-amazon.com/images/I/71BUQQ-b01L._AC_SL1500_.jpg" alt = "logo"/>
            </Container>

            <Container className={styles.contactPageAccordion}>
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>CORPORATE HEADQUARTERS</Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row><Col>Serving customers in the United States and Canada</Col></Row>
                            <Row>
                                <Col>
                                    MEDIA INQUIRIES<React.Fragment><br/></React.Fragment>
                                    Fender Musical Instruments Corp.<React.Fragment><br/></React.Fragment>
                                    1575 N Gower Street, Suite 170<React.Fragment><br/></React.Fragment>
                                    Los Angeles, CA 90028<React.Fragment><br/></React.Fragment>
                                    USA<React.Fragment><br/></React.Fragment>
                                    Phone: 323.210.1800<React.Fragment><br/></React.Fragment>
                                    Email: press@fender.com
                                </Col>
                                <Col>
                                    NON-MEDIA INQUIRIES<React.Fragment><br/></React.Fragment>
                                    Fender Musical Instruments Corp.<React.Fragment><br/></React.Fragment>
                                    17600 N. Perimeter Drive, Suite 100
                                    Scottsdale, AZ 85255<React.Fragment><br/></React.Fragment>
                                    USA<React.Fragment><br/></React.Fragment>
                                    Phone: 800.856.9801<React.Fragment><br/></React.Fragment>
                                    Email: consumerrelations@fender.com
                                </Col>
                                <Col>
                                    PRODUCT CLEARANCE<React.Fragment><br/></React.Fragment>
                                    For product clearance inquiries, or acquiring the required permission
                                    for an upcoming film, TV, campaign
                                    (digital/social/print), commercial, art, novel, etc.<React.Fragment><br/></React.Fragment>
                                    Email: productclearance@fender.com
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>EUROPE</Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            Serving Customers Throughout Europe<React.Fragment><br/></React.Fragment>
                            Fender Musical Instruments Europe ltd.<React.Fragment><br/></React.Fragment>
                            Leo House<React.Fragment><br/></React.Fragment>
                            Birches Industrial Estate<React.Fragment><br/></React.Fragment>
                            East Grinstead<React.Fragment><br/></React.Fragment>
                            West Sussex<React.Fragment><br/></React.Fragment>
                            RH19 1QZ<React.Fragment><br/></React.Fragment>
                            United Kingdom<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            United Kingdom of Great Britain and Northern Ireland and The Republic of Ireland<React.Fragment><br/></React.Fragment>
                            Phone: 0333 200 8765<React.Fragment><br/></React.Fragment>
                            Email: contactemea@fender.com<React.Fragment><br/></React.Fragment>
                            Hours: 9 a.m. - 5 p.m. GMT<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            Spain, Balearics, Canary Islands and Portugal<React.Fragment><br/></React.Fragment>
                            Phone: 0911 142 131<React.Fragment><br/></React.Fragment>
                            Email: contactemea@fender.com<React.Fragment><br/></React.Fragment>
                            Hours: 10 a.m. - 6 p.m. CET<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            Germany, Austria, Belgium, The Netherlands, Luxemburg and Switzerland<React.Fragment><br/></React.Fragment>
                            Phone: 0800 1800 720<React.Fragment><br/></React.Fragment>
                            Email: contactemea@fender.com<React.Fragment><br/></React.Fragment>
                            Hours: 10 a.m. - 6 p.m. CET<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            France and Andorra<React.Fragment><br/></React.Fragment>
                            Phone: 08 00 90 17 04<React.Fragment><br/></React.Fragment>
                            Email: contactemea@fender.com<React.Fragment><br/></React.Fragment>
                            Hours: 10 a.m. - 6 p.m. CET<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            Italy<React.Fragment><br/></React.Fragment>
                            Phone: 800959156<React.Fragment><br/></React.Fragment>
                            Email: contactemea@fender.com<React.Fragment><br/></React.Fragment>
                            Hours: 10 a.m. - 6 p.m. CET<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            Sweden, Denmark, Estonia, Finland, Greenland, Latvia, Lithuania, Norway and Faroe Islands<React.Fragment><br/></React.Fragment>
                            Phone: 020 795 198<React.Fragment><br/></React.Fragment>
                            Email: contactemea@fender.com<React.Fragment><br/></React.Fragment>
                            Hours: 10 a.m. - 6 p.m. CET<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            Bulgaria, Czech Republic, Poland, Slovakia, Slovenia, Croatia, Hungary and Greece<React.Fragment><br/></React.Fragment>
                            Phone: +44 (0)1342332480<React.Fragment><br/></React.Fragment>
                            Email: contactemea@fender.com<React.Fragment><br/></React.Fragment>
                            Hours: 10 a.m. - 6 p.m. CET
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>JAPAN</Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            Serving customers in Japan<React.Fragment><br/></React.Fragment>
                            Phone: 0120-1946-60<React.Fragment><br/></React.Fragment>
                            Email: askfender.jp@fender.com
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>AUSTRALIA</Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            Serving customers in Australia<React.Fragment><br/></React.Fragment>
                            Fender Music Australia Pty Limited<React.Fragment><br/></React.Fragment>
                            PO Box 6309<React.Fragment><br/></React.Fragment>
                            Alexandria NSW 2015<React.Fragment><br/></React.Fragment>
                            Australia<React.Fragment><br/></React.Fragment>
                            <React.Fragment><br/></React.Fragment>
                            Phone: (61) 2 8198 1300<React.Fragment><br/></React.Fragment>
                            Sales Email: au_sales@fender.com<React.Fragment><br/></React.Fragment>
                            Support : au_consumerrelations@fender.com
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Container>
        </Container>
    );
};

export default ContactsPage;