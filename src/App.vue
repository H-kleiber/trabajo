<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="container__info">
       <div class="info">
          <a href="/" class="info-img"><img src="./components/img/logos/bembossvg.svg" alt=""></a>
              <div class="address-text">
                <p class="shipping-text">Delivery hacia</p> 
                <p>CENTRO COMERCIAL “PLAZA NORTE” 1400, LIMA - INDEPENDENCIA<a href="/ubicacion">Cambiar</a></p>
              </div>
        </div>                      
        <div class="delivery-content">
          <div class="telefono"><img src="./components/img/logos/telefonosvg.svg" alt=""></div>
              <div class="delivery-selector">
                  <div class="delivery-select">
                      <p class="delivery-fonts">Delivery</p> 
                      <select class="select" name="" id="">
                          <option class="event-phone-LIMA" value="LIMA"><span>LIMA</span></option>
                          <option data-v-45506536="" class="event-phone-HUANCAYO" value="HUANCAYO">HUANCAYO</option>
                       </select>
                  </div> 
                  <p class="phone">014191919</p>
              </div>
        </div>
        <div class="login">
            <img src="./components/img/logos/user.svg" alt="">
            <a href="" class="account-user">Ingresar o crear tu cuenta</a>
        </div> 
     </div>
      <nav class="navegacion">
        <ul class="menu">
            <a  href="/" class="menu-img"><img src="./components/img/logos/bembooscurosvg.svg" alt=""></a>
            <RouterLink  id="menu-home" class="menu__options" to="/">menu</RouterLink>
            <RouterLink  id="menu-beneficios" class="menu__options" to="/beneficios">beneficios</RouterLink>
            <RouterLink  id="menu-promociones" class="menu__options" to="/promociones">promociones</RouterLink>
            <RouterLink  id="menu-locales" class="menu__options" to="/locales">locales</RouterLink>
            <RouterLink  id="menu-zonas-de-reparto" class="menu__options" to="/zonasdereparto">zonasderesparto</RouterLink>
            <RouterLink id="menu-nosotros" class="menu__options" to="/nosotros">nosotros</RouterLink>
            <div class="menu__button--tienda"><span> <img src="./components/img/logos/tiendasvg.svg" alt=""></span><span>Pide en tiendas <strong>SIN COLAS</strong></span></div>
            <div class="menu__button--carrito"><span><img src="./components/img/logos/carritosvg.svg" alt=""></span></div>
        </ul>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
