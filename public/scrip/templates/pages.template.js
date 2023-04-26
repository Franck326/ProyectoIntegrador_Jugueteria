
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
                            style="background-image: url('{{this.imagenPath}}')"
                        >
                        </div>
                        
                        
                        
                        <div class="card__content">
                            <h3 class="card__heading">Nombre: {{this.nombre}}</h3>
                            <h3 class="card__heading">Marca: {{this.marca}}</h3>
                            <div class="card__descripcion">
                                <span>Precio: $ {{this.precio}}</span>
                                <p id="descripcion">{{this.descripcion}}</p>
                                <div id="divCategoria"><span id="categoria">Categoria: {{this.categoria}}</span></div>
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
            <form id="crearProductoForm" action="/api/productos" method="POST" enctype="multipart/form-data">
                <div class="field">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <span class="errMsg"></span>
                </div>

                
                
                <div class="field">
                <label for="marca">Marca</label>
                <input type="text" name="marca" id="marca"></textarea>
                <span class="errMsg"></span>
                </div>
                
                
                <div class="field">
                <label for="categoria">Categoria</label>
                <input type="text" name="categoria" id="categoria">
                <span class="errMsg"></span>
                </div>
                
                <div class="field">
                    <label for="precio">Precio $</label>
                    <input type="number" step="any" name="precio" id="precio" required>
                    <span class="errMsg"></span>
                </div>

                <div class="field">
                    <label for="descripcion">Descripcion</label>
                    <textarea id="descripcion" name="descripcion" required></textarea>
                    <span class="errMsg"></span>
                </div>

                
                    <div class="field">
                        <label for="imagen">Imagen</label>
                        <input type="file" name="imagen" id="imagen">
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

