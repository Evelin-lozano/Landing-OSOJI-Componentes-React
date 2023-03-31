import React from 'react'

function Inicio(props) {
    return(
        <div>
            <div className="container mb-2">
            <div className="row">
                <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center mt-3">
                    <div className="text-center">
                        <h1 className="titulos">Racoon: a cleaning adventure by OSOJI </h1>
                        <p className="textos">Disfruta de las misiones de limpieza de Racoon y Powolf en los suburbios de
                            Clean Island (Barrio 111).</p>
                        <a className="btn btn-lg me-4 mb-3 btn-j" role="button" aria-disabled="true">JUGAR</a>
                    </div>
                </div>
                <div className="col-12 col-lg-7 fondo">
                    <div className="fondo">
                        <img className="img-fluid" src={(`${props.imgp}`)}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    
}
export default Inicio;
