import React from 'react'

function Conceptos() {
    return(
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-12 col-lg-4 mb-3 d-flex justify-content-center">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <div className=" mb-2 d-flex justify-content-center">
                                        <img src="./images/interactivo.png" width="90"/>
                                    </div>
                                    <h3 className="titulos text-center">INTERACTIVIDAD</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p className="pt-5 textos text-center">Impulsa tu aprendizaje de una forma única y
                                        diferente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-3 d-flex justify-content-center">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <div className=" mb-2 d-flex justify-content-center">
                                        <img src="./images/desarrollo-de-habilidades.png" width="90"/>
                                    </div>
                                    <h3 className="titulos text-center">DESARROLLO DE HABILIDADES</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p className="pt-5 textos text-center">Juega mientras mejoras tus capacidades para
                                        planificar, organizar, llevarte bien con los demás y regular tus emociones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-3 d-flex justify-content-center">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <div className=" mb-2 d-flex justify-content-center">
                                        <img src="./images/profesor.png" width="90"/>
                                    </div>
                                    <h3 className="titulos text-center">EDUCABILIDAD</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p className="pt-5 textos text-center">Aprende através de las capacidades, para
                                        perfeccionar conductas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conceptos;