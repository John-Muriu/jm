import { useState } from 'react'
import { Container, Card, Button, Col, Row, Modal } from 'react-bootstrap'

// data
import portfolio from '../data/portfolio'

const Portfolio = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const name = 'John Muriu Waithira'
  const link = ""

  return (
    <>
      <section className='page-section portfolio' id='skills'>
        <Container>
          <div className='text-center'>
            <h2 className='page-section-heading text-secondary mb-0 d-inline-block text-capitalize'>
              my skill (s)
            </h2>
          </div>
          <div className='divider-custom'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fas fa-plane-departure'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>
          <div className='text-center'>
            <Button variant='primary' onClick={handleShow}>
              my resume
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Card>
                  <Card.Header>{name} (human_being)| Skills </Card.Header>
                  <Card.Body>
                    <Card.Title>Elavator Pitch (introduction)</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant='success'>
                      {' '}
                      <a
                        href='https://drive.google.com/file/d/1ESXF3ulffejwbGB-Wj6u1z1Q0N5lSH_b/view'
                        target='_blank'
                        rel='noreferrer'
                      >
                        read full resume
                      </a>{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='danger' onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <Row className='justify-content-center'>
            {portfolio.map((content) => (
              <Col md={6} lg={4} mb={5} className='mt-5' key={content.id}>
                <Card className='portfolio-item mx-auto' border='secondary'>
                  <Card.Img
                    className='img-fluid'
                    src={content.image}
                    alt='Tasty Cake'
                  />
                  <Card.Body>
                    <Card.Title>{content.title}</Card.Title>
                    <Card.Text>{content.brief_description}</Card.Text>
                    <Button variant='secondary'>{content.link}  </Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className='text-muted'>
                      <a
                        href='https://github.com/John-Muriu'
                        target='_blank'
                        rel='noreferrer'
                      >
                        github projects
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Portfolio
