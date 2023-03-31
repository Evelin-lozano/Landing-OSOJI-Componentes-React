import React from 'react'

function Adeosoji() {
  return (
    <div>
            <div className="footer p-2" id="aosoji">
                <h1 className="titulos text-center align-text-center">ACERCA DE OSOJI</h1>
            </div>
            <div className="container p-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-lg-4">
                        <h1 className="titulos text-center">MISIÓN</h1>
                        <p className="textos">Enseñar el artículo 111 del código de policía a través de una estrategia
                            multimedia que comprende un juego web como modelo de enseñanza para el correcto acato de
                            dicho artículo.
                        </p>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center mt-3 mb-4">
                        <img className="img-vym" src="./images/imagen-myv.png" alt=""/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h1 className="titulos text-center">VISIÓN</h1>
                        <p className="textos">Ser una marca bien posicionada en Colombia con respecto a la correcta
                            enseñanza del acato del artículo 111 del código de policía de Colombia mediante una
                            estrategia multimedia efectiva.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid fondo2 p-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="text-center mb-3">
                                <h1 className="titulos">Racoon: a cleaning adventure by OSOJI </h1>
                                <p className="textos">Explora, limpia y aporta a el cambio en los contaminados espacios
                                    públicos de los suburbios de Clean Island (Barrio 111) con Racoon y Powolf.</p>
                                <a className="btn btn-lg me-4 mb-2 btn-j" role="button" aria-disabled="true">JUGAR</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <video className="img-fluid" src="./images/TeasernOSOJI.mp4" controls></video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer p-2" id="juego">
                <h1 className="titulos text-center align-text-center">PERSONAJES</h1>
            </div>
    </div>
  )
}

export default Adeosoji;