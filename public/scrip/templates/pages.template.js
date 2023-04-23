
export const inicioTemplate = Handlebars.compile(`
    <section class="section-cards">
            <header class="section-cards__header">
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>Se encontraron {{cantidadProductos}} productos</p>
            </header>
            <div class="cards-container">
            {{#each productos}}
                
                <a class="card" href="#">
                    <article class="card__article">
                        <div
                            class="card__image"
                            style="background-image: url('/img/productos/{{this.img}}')"
                        >
                        </div>
                        <span id="categoria">{{this.categoria}}</span>
                        <div class="card__content">
                            <h3 class="card__heading">{{this.nombre}} {{this.marca}}</h3>
                            <div class="card__descripcion">
                                <span>$ {{this.precio}}</span>
                                <p id="descripcion">{{this.descripcion}}</p>
                            </div>
                        </div>
                        <button class="addCartBtn addCartBtn2" idProducto="{{this._id}}">Añadir al Carrito    💲   </button>
                        <button class="borrarProducto" idProducto="{{this._id}}">Borrar Producto</button>
                    </article>
                </a>
                {{/each}}
            </div>       
        </section>       
    `)

export const altaTemplate = Handlebars.compile(`
    <section id="section-alta">
        <header>
            <h2>Crear Producto</h2>
        </header>

        <main>
            <form action="">
                <div class="field">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" required>
                    <span class="errMsg"></span>
                </div>

                
                
                <div class="field">
                <label for="marca">Marca</label>
                <input type="text" id="marca"></textarea>
                <span class="errMsg"></span>
                </div>
                
                
                <div class="field">
                <label for="categoria">Categoria</label>
                <input type="text" id="categoria">
                <span class="errMsg"></span>
                </div>
                
                <div class="field">
                    <label for="precio">Precio $</label>
                    <input type="number" step="any" id="precio" required>
                    <span class="errMsg"></span>
                </div>

                <div class="field">
                    <label for="descripcion">Descripcion</label>
                    <textarea id="descripcion" required></textarea>
                    <span class="errMsg"></span>
                </div>


                <div class="field">
                    <label for="envio">Enviar sin cargo</label>
                    <input type="checkbox" id="envio">
                    <span class="errMsg"></span>
                </div>


                <div class="field">
                    <label for="imagen">Imagen</label>
                    <input type="file" id="imagen" required>
                    <span class="errMsg"></span>
                </div>

                
                <button  id="botonEnviar" type="submit">Crear Producto</button><span class="errMsg"></span>
            </form>
        </main>
    </section>
`)

export const contactoTemplate =  Handlebars.compile(`


<section id="section-contacto">
    <h2>Contacto</h2>
    <main>
        <form action="">
            <div class="field">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" required>
                <span class="errMsg"></span>
            </div>

            <div class="field">
                <label for="correo">Correo</label>
                <input type="email" id="correo" required>
                <span class="errMsg"></span>
            </div>

            <div class="field">
                <label for="comentarios">Comentarios </label>
                <textarea id="comentarios" required></textarea>
                <span class="errMsg"></span>
            </div>

            


        </form>    
        <button id="enviarContacto">Enviar</button>
        </main>
</section>
`)

