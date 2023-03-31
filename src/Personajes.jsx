import React from 'react'

function Personajes(props) {
  return (
  <div>
            <div className="container p-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-4">
                        <div className="d-flex justify-content-center">
                            <img className="product-image" src={(`${props.imgpersonaje1}`)}  alt=""/>
                        </div>
                        <div className="d-flex justify-content-center mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <a className="btn btn-lg btn-j" role="button" aria-disabled="true">{props.nombre1}</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-4 mb-4">
                        <div className="d-flex justify-content-center">
                            <img className="product-image" src={(`${props.imgpersonaje2}`)}  alt=""/>
                        </div>
                        <div className="d-flex justify-content-center mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <a className="btn btn-lg btn-j" role="button" aria-disabled="true">{props.nombre2}</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="d-flex justify-content-center">
                            <img className="product-image" src={(`${props.imgpersonaje3}`)}  alt=""/>
                        </div>
                        <div className="d-flex justify-content-center mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <a className="btn btn-lg btn-j" role="button" aria-disabled="true">{props.nombre3}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title titulos fs-5" id="exampleModalLabel">{props.titulo1}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="art">{props.texto1}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-lg btn-j" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title titulos fs-5" id="exampleModalLabel">{props.titulo2}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="art">{props.texto2}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-lg btn-j" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title titulos fs-5" id="exampleModalLabel">{props.titulo3}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="art">{props.texto3}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-lg btn-j" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
            
 </div>
  )
}

export default Personajes;