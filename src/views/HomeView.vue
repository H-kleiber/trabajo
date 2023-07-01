<template>
  <div class="carousel-container">
    <div class="special-offers-title">
                <h2>MENU DE HAMBURGUESAS ONLINE</h2>
                <div class="buttons-carruself">
                    <button class="buttonoffers buttonleft" @click="moveCarousel('left')">Izquierda</button>
                    <button class="buttonoffers buttonrigth" @click="moveCarousel('right')">Derecha</button>
                </div>
    </div>
    <div class="carousel">
      <div class="slide" v-for="(item, index) in displayedItems" :key="index">
        <img  class='fila img' :src="item.img" alt="">
        <div class="fila nombre">{{ item.nombre }}</div>
        <div class="fila precio">{{ item.precio }}</div>
        <button :id=item.id class="button_fila button_comprar">Ver más</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // Array de imágenes obtenidas mediante fetch
      displayedItems: [], // Imágenes a mostrar en el carrusel
      currentIndex: 0, // Índice actual del carrusel
      itemsPerPage: 4 // Número de imágenes a mostrar por página
    };
  },
  created() {
    // Realizar la petición fetch para obtener el array de imágenes
    // y asignarlo a la propiedad 'items'
    // Ejemplo:
    fetch('http://localhost:3004/promociones')
      .then(response => response.json())
      .then(data => {
        this.items = data;
        this.displayedItems = this.items.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
      })
      .catch(error => {
        console.error('Error al obtener las imágenes', error);
      });
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 'left') {
        // Mover hacia la izquierda
        if (this.currentIndex === 0) {
          // Si estamos en el primer elemento, no hacemos nada
          return;
        }
        this.currentIndex--;
      } else if (direction === 'right') {
        // Mover hacia la derecha
        if (this.currentIndex + this.itemsPerPage >= this.items.length) {
          // Si estamos en el último grupo, no hacemos nada
          return;
        }
        this.currentIndex++;
      }
      // Actualizar las imágenes a mostrar en el carrusel
      this.displayedItems = this.items.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
    }
  }
};
</script>

<style>
.carousel-container {
 display: flex;
 flex-direction: column;
}

.carousel {
  display: flex;
  justify-content: center;

}
.slide {
  display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,.2);
    width: 230px;
    height: 350px;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 13px;
    border: 3px solid rgb(76, 165, 17);
}
.img{
  width:100%;
}

.nombre{
    text-align: center;
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: var(--colorfontscards);
    font-size: 15px;
    font-family: din1451;
    line-height: 22px;
}
.precio{
    text-align: center;
    width: 100%;
    height: 25px;
    color: var(--colorfontscards);
    font-size: 15px;
    font-family: din1451;
    line-height: 22px;

}
.button_comprar{
    width: 200px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: var(--colorbuttonscards);
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    line-height: 1.5;
    font-family: din1451;
    outline: 0;
}


/* Estilos responsivos */
@media (max-width: 768px) {
  .slide {
    flex: 0 0 50%;
  }
}

@media (max-width: 480px) {
  .slide {
    flex: 0 0 100%;
  }
}
</style>
