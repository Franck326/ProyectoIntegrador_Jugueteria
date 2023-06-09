export const cartListTemplates = Handlebars.compile(`
    <button class="cerrarCarrito" id="cerrarCarrito">x</button>     
    <div class="headers">
        <span>Foto</span>
        <span>Producto</span>
        <span>Precio</span>
        <span>Cantidad</span>
        <span>Subtotal</span>
    </div>
    {{#each cart}}
        <div class="productItem">
            <span><img src="pry01/img/productos/{{this.img}}" alt=""></span>
            <span>{{this.marca}} {{this.nombre}}</span>
            <span>$ {{this.precio}}</span>
            <span>
                <button class="subtractCartBtn" idProducto="{{this._id}}">-</button>
                <span>{{this.cantidad}}</span>
                <button class="addCartBtn" idProducto="{{this._id}}">+</button>
            </span>
            <span>$ {{this.subtotal}}</span>         
        </div>
    {{/each}}
    <div class="total">
        total:  $ {{total}} <button id="enviarCarrito">Enviar!</button>
    </div>
`)