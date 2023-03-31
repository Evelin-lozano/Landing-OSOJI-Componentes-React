import React from 'react'

function Header() {
    return (
        <div>
            <div className="container-fluid header fixed-top">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                            <img src="./images/logo-header.png" alt=""/>
                        </div>
                        <div className="col-12 col-lg-7">
                            <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
                                <form>
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon icono p-2"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                            <div className="navbar-nav">
                                                <a href="#qesosoji" className="btn btn-header btn-lg me-4" role="button" aria-disabled="true">¿QUÉ ES OSOJI?</a>
                                                <a href="#aosoji" className="btn btn-header btn-lg  me-4" role="button" aria-disabled="true">ACERCA DE OSOJI</a>
                                                <a href="#juego" className="btn btn-header btn-lg me-4" role="button" aria-disabled="true">SOBRE EL JUEGO</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;