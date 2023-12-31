import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return ( 
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Datitos de nuestra pequeña compañia</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  A tus ordenes!
                </h6>
                <p>
                  Estamos disponibles a tus sugerencias y dudas.
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Sensores
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Reactivos
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Temperatura
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Humedad
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Primizas
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Ajustes
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Ordenes
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Ayuda
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  La salle, primera sección
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  cyborgDetection@ids.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 52 961 479 5475
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 52 961 302 1060
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © Éxitos 2021 Copyright:
          <a className='text-reset fw-bold' href=''>
            CyborgDetection.com
          </a>
        </div>
      </MDBFooter>
     );
}

export default Footer;