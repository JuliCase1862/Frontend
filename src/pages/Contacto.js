import '../styles/components/pages/Contacto.css'

const Novedades = (props) => {
return (
<main className="holder">
        <div className="columna left">
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input className="input" type="text" name="" />
                </p>
                <p>
                    <label for="email">Email</label>
                    <input className="input" type="text" name="" />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input className="input" type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar" /></p>
            </form>
        </div>
        <div className="columna right">
            <h2>Otras via de contacto</h2>
            <p>Tambien se puede comunicar con nosotros ....</p>
            <ul>
                <li>Telefono: 4569-2989</li>
                <li>Email: Contacto: pepitojuarez@historizate.com</li>
                <li>Facebook: https://www.facebook.com/julian.historizate/</li>
            </ul>
        </div>
    </main>




);
}

export default Novedades