import {Col, Row, Container} from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className='footer text-center'>
        <Container>
          <Row>
            <Col lg={4} mb={5} className='mb-lg-0'>
              <h4 className='mb-4'>LOCATION</h4>
              <p className='pre-wrap lead mb-0'>Nairobi Kenya</p>
            </Col>
            <Col lg={4} mb={5} className='mb-lg-0'>
              <h4 className='mb-4'>Social Media</h4>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://www.facebook.com/john.muriu.54'
              >
                <i className='fab fa-fw fa-facebook-f'></i>
              </a>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://www.instagram.com/anon_54/'
              >
                <i className='fab fa-instagram/anon_54'></i>
              </a>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://twitter.com/j_muriu'
              >
                <i className='fab fa-fw fa-twitter'></i>
              </a>
            </Col>

            <Col lg={4} mb={5} className='mb-lg-0'>
              <h4 className='mb-4'>Professional Media</h4>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://codepen.io/legastoc' target="_blank"
              >
                <i className='fab fa-codepen'></i>
              </a>

              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://www.linkedin.com/in/john-muriu/'
              >
                <i className='fab fa-fw fa-linkedin-in'></i>
              </a>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://github.com/john-muriu'
              >
                <i className='fab fa-github'></i>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
      <section className='copyright py-4 text-center text-white'>
        <Container>
          <small className='pre-wrap'>
            Copyright © John Muriu {currentYear}
          </small>
        </Container>
      </section>
      <div className='scroll-to-top d-lg-none position-fixed'>
        <a
          className='js-scroll-trigger d-block text-center text-white rounded'
          href='#page-top'
        >
          <i className='fa fa-chevron-up'></i>
        </a>
      </div>
    </>
  )
}

export default Footer
