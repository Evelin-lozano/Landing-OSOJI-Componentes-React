import React from 'react'

function Qesosoji() {
    return(
        <div>
        <div className=" linea p-1"></div>
        <div className="container">
            <div className="row  d-flex justify-content-center align-items-center p-4" id="qesosoji">
                <div className="col-12 col-lg-3">
                    <h1 className="titulos mt-2 text-center">¿QUÉ ES OSOJI?</h1>
                </div>
                <div className="col-12 col-lg-3 d-flex justify-content-center mt-3 mb-3">
                    <img src="./images/logo-desarrollo.png" alt=""/>
                </div>
                <div className="col-12 col-lg-6">
                    <h1 className="titulos">OSOJI: Artículo 111</h1>
                    <h2 className="subtitulos">código de policía de Colombia</h2>
                    <p className="textos">OSOJI se crea como método para el aprendizaje de el artículo 111 del código de
                        policía de colombia.Nos centramos en potenciar el aprendizaje del artículo 111 del código de
                        polColombia a través de la participación multidireccional entre los usuarios y ehabilidades en
                        ellos, con el afán de promover la cultura ciudadana.</p>
                </div>
            </div>
        </div>
        <div className=" text-center art linea linea p-1">Artículo 111: Comportamientos contrarios a la limpieza y
            recolección de residuos y escombros y malas prácticas habitacionales</div>
        </div>
    )
    
}
export default Qesosoji;