import React from 'react'

const FORMULARIO = document.querySelector("#formulario")

FORMULARIO,addEventListener("submit", function(event) {
    event.preventDefault()

    const user = event.target.user.value.trim().toLowerCase()
    const Apellido = event.target.Apellido.value.trim().toLowerCase()
    const email = event.target.email.value.trim().toLowerCase()
    const pwd = event.target.pwd.value.trim()

    console.log(user)
    console.log(Apellido)
    console.log(email)
    console.log(pwd)

})
function Footer() {
    return (
        <div>
        <footer className="footer p-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="d-flex justify-content-center mb-4">
                            <img className="img-contenedor"src="./images/logo-pie-pagina.png" alt=""/>
                        </div>
                        <section className="mb-4 d-flex justify-content-center">
                            <img className="icons-footer me-4" src="./images/iconos/icon-facebook.png" alt=""/>
                            <img className="icons-footer me-4" src="./images/iconos/icon-instagram.png" alt=""/>
                            <img className="icons-footer me-4" src="./images/iconos/icon-whatsapp.png" alt=""/>
                            <img className="icons-footer me-4" src="./images/iconos/icon-tiktok.png" alt=""/>
                            <img className="icons-footer" src="./images/iconos/icon-youtube.png" alt=""/>
                        </section>
                        <div className="text-center">
                            <div>
                            <a className="emails me-2"
                                href="mailto:pcastrillon083@gmail.com? subject=subject text">pcastrillon083@gmail.com</a>
                            </div>
                            <a className="emails"
                                href="mailto:evelinlozano163@gmail.com? subject=subject text">evelinlozano163@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <form className="form-footer p-4 border border-success Formulario formulario"
                            action="formulario-osoji.php" method="POST" id="formulario">
                            <h1 className="titulos">REGÍSTRATE</h1>
                            <div className="form-group">
                                <label htmlFor="exampleInputNombre1"></label>
                                <input type="text" className="form-control textos" id="user" placeholder="Nombre"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputApellido1"></label>
                                <input type="text" className="form-control textos" id="Apellido" placeholder="Apellido"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"></label>
                                <input type="email" className="form-control textos" id="email" aria-describedby="emailHelp"
                                    placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"></label>
                                <input type="password" className="form-control textos" id="pwd" placeholder="Contraseña"/>
                            </div>
                            <button type="submit" className="btn btn-lg btn-j p-2 mt-3 ">ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
        <div className="linea p-1 mt-4 mb-4 subtitulos text-center"> OSOJI 2023</div>
        </div>
        
    )
}

export default Footer;