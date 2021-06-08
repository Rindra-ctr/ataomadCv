
import ReactStars from "react-rating-stars-component";
import { Container, Col, Row, Image, Table } from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar'
import { CircleFill, Envelope, Facebook, Instagram, PhoneVibrate, Twitter } from "react-bootstrap-icons"
import './MyCv.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyCV = () => {

    return (

        <Container>
            <Row>
                <Col className="px-0">
                    <h4 className="text-default" >My cv</h4>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="bg-gray pb-5">
                    <div className="d-flex">
                        <Image src='' className="Manjatiana mx-auto mt-3 mb-4" />
                    </div>
                    <h4 className="ManjatianaTitre">MANJATIANA Précieuse</h4>

                    <div>
                        <h5 className="TitreManja ml-4 my-4" >About Me</h5>
                        <p className="ml-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nobis quam vitae, laudantium placeat dolore provident, consequuntur laboriosam quo quos ipsam voluptatem, quia nesciunt accusantium voluptas ipsa soluta ratione vel. Rem, ipsa?</p>
                    </div>
                    <div className="table ml-3">
                        <Table>
                            <tr>
                                <td>
                                    <h5>Nom:</h5>
                                </td>
                                <td>
                                    Manjatiana
                              </td>

                            </tr>

                            <tr>
                                <td>
                                    <h5>Prénom:</h5>
                                </td>
                                <td>
                                    Précieuse
                              </td>

                            </tr>

                            <tr>
                                <td>
                                    <h5>Groupe Sanguin:</h5>

                                </td>

                                <td>
                                    A
                              </td>

                            </tr>

                            <tr>
                                <td>
                                    <h5>Naissance: </h5>
                                </td>
                                <td>
                                    03 Février 1998
                              </td>

                            </tr>

                            <tr>
                                <td>
                                    <h5>Nationalité: </h5>
                                </td>
                                <td>
                                    Malagasy
                              </td>

                            </tr>

                            <tr>
                                <td>
                                    <h5>Situation Familial: </h5>
                                </td>
                                <td>
                                    Celibataire
                              </td>

                            </tr>

                        </Table>

                    </div>
                    <div>
                        <h5 className="TitreManja ml-4 my-4" >Contact</h5>
                    </div>

                    <div>
                        <Row className="ml-2">
                            <Col md={2}><Envelope size={20} className="logo1 ml-4" /></Col>
                            <Col md={10}><p>adress@Gmail.com</p></Col>

                            <Col md={2}><PhoneVibrate size={20} className="logo1 ml-4" /></Col>
                            <Col md={10}><p>261 34 53 384 87</p></Col>

                            <Col md={2}><Facebook size={20} className="logo1 ml-4" /></Col>
                            <Col md={10}><p>Manjatiana la Gyal</p></Col>

                            <Col md={2}>< Twitter size={20} className="logo1 ml-4" /></Col>
                            <Col md={10}><p> Gyal_manjatiana</p></Col>
                            <Col md={2}><Instagram size={20} className="logo1 ml-4" /></Col>
                            <Col md={10}><p> Gyal_manjatiana</p></Col>
                        </Row>

                    </div>
                    <div>
                        <h5 className="TitreManja ml-4 my-4" >Intérêts</h5>
                    </div>
                    <div>
                        <p className="Loisir">Natation</p>
                        <p className="Loisir">Lecteur</p>
                        <p className="Loisir">Basket-ball</p>

                    </div>
                </Col>
                <Col md={8} style={{ background: "#F2F3F4" }}>
                    <Row>
                        <div>
                            <h5 className="Experience">Expériences proféssionnel</h5>
                        </div>
                    </Row>

                    <Row>

                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2005 - 2007"
                                iconStyle={{ background: 'grey', color: '#fff' }}
                                icon={<CircleFill />}
                                icon={<CircleFill />}
                            >
                                <h1 className="vertical-timeline-element-title">SociétéEcova</h1>
                                <p>
                                    Directeur du Ressources Humaines (DHR)
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2005 - 2007"
                                iconStyle={{ background: 'grey', color: '#fff' }}
                                icon={<CircleFill />}
                            >
                                <h1 className="vertical-timeline-element-title">SociétéEcova</h1>
                                <p>
                                    Directeur du Ressources Humaines (DHR)
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2005 - 2007"
                                iconStyle={{ background: 'grey', color: '#fff' }}
                                icon={<CircleFill />}
                            >
                                <h1 className="vertical-timeline-element-title">SociétéEcova</h1>
                                <p>
                                    Directeur du Ressources Humaines (DHR)
                                </p>
                            </VerticalTimelineElement>


                        </VerticalTimeline>


                    </Row>
                    <Row>
                        <div>
                            <h5 className="Experience">Etudes et Formations</h5>
                        </div>
                    </Row>
                    <Row>

                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2005 - 2007"
                                iconStyle={{ background: 'grey', color: '#fff' }}
                                icon={<CircleFill />}
                                icon={<CircleFill />}
                            >
                                <h1 className="vertical-timeline-element-title">SociétéEcova</h1>
                                <p>
                                    Directeur du Ressources Humaines (DHR)
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2005 - 2007"
                                iconStyle={{ background: 'grey', color: '#fff' }}
                                icon={<CircleFill />}
                            >
                                <h1 className="vertical-timeline-element-title">SociétéEcova</h1>
                                <p>
                                    Directeur du Ressources Humaines (DHR)
                                </p>
                            </VerticalTimelineElement>



                        </VerticalTimeline>
                    </Row>


                    <h5 className="Experience">Compétences</h5>
                    <div>
                        <Table>
                            <tr>
                                <td style={{ width: '70px' }}>
                                    Html
                                </td>
                                <td style={{ width: '200px', paddingTop: '17px' }}>
                                    <ProgressBar now={80} />
                                </td>
                                <td style={{ width: '50px' }}>
                                    80%
                              </td>

                            </tr>
                            <tr>
                                <td style={{ width: '70px' }}>
                                    CSS
                                </td>
                                <td style={{ width: '200px', paddingTop: '17px' }}>
                                    <ProgressBar now={80} />
                                </td>
                                <td style={{ width: '50px' }}>
                                    80%
                              </td>

                            </tr>
                            <tr>
                                <td style={{ width: '70px' }}>
                                    Bootstrap
                                </td>
                                <td style={{ width: '200px', paddingTop: '17px' }}>
                                    <ProgressBar now={80} />
                                </td>
                                <td style={{ width: '50px' }}>
                                    80%
                              </td>

                            </tr>
                            <tr>
                                <td style={{ width: '70px' }}>
                                    Javascript
                                </td>
                                <td style={{ width: '200px', paddingTop: '17px' }}>
                                    <ProgressBar now={80} />
                                </td>
                                <td style={{ width: '50px' }}>
                                    80%
                              </td>

                            </tr>
                            <tr>
                                <td style={{ width: '70px' }}>
                                    Sql
                                </td>
                                <td style={{ width: '200px', paddingTop: '17px' }}>
                                    <ProgressBar now={80} />
                                </td>
                                <td style={{ width: '50px' }}>
                                    80%
                              </td>

                            </tr>


                        </Table>
                    </div>
                    <Row>
                        <div>
                            <h5 className="Experience">Languages</h5>
                        </div>
                    </Row>
                    <Row style={{ marginTop: '25px' }}>
                        <Col>
                            <h5 style={{ marginLeft: '85px' }}>Malagasy</h5>
                            <div style={{ paddingLeft: "60px" }}>
                                <ReactStars activeColor="Aqua" size={30} count={4} />   
                            </div>
                           
                        </Col>
                        <Col>
                            <h5 style={{ marginLeft: '85px' }}>Français</h5>
                            <div style={{ paddingLeft: "60px" }}>
                                <ReactStars activeColor="Aqua" size={30} count={4} />   
                            </div>
                            
                        </Col>
                        <Col>
                            <h5 style={{ marginLeft: '85px' }}>Anglais</h5>
                            <div style={{ paddingLeft: "50px" }}>
                                <ReactStars activeColor="Aqua" size={30} count={4} isHalf={true} />
                            </div>

                        </Col>
                    </Row>



                 





                </Col>
            </Row>

        </Container>


    )
}

export default MyCV;
