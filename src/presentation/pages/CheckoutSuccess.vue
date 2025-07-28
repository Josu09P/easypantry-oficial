<template>
    <div class="checkout-view">
        <div class="snow-container">
            <div v-for="i in 40" :key="i" class="snowflake" :style="{
                left: Math.random() * 100 + '%',
                animationDuration: (3 + Math.random() * 5) + 's',
                fontSize: (12 + Math.random() * 14) + 'px'
            }">✦</div>

        </div>
        <!-- Lado izquierdo: animación -->
        <div class="checkout-left">
            <lottie-player :src="tanksAnimation" background="transparent" speed="1"
                style="width: 100%; max-width: 480px; height: 480px" loop autoplay />
        </div>

        <!-- Lado derecho: mensaje -->
        <div class="checkout-right">
            <div class="message">
                <h1>¡Gracias por tu compra!</h1>
                <p class="text-content lead">Tu cuenta ha sido actualizada a <strong>premium</strong>.</p>
                <p class="text-content lead">Puedes cerrar esta pestaña y volver a tu app Nubri.</p>
                <button @click="cerrarVentana" class="btn btn-outline-light">Ir a EasyPantry Page</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import '@lottiefiles/lottie-player'

const tanksAnimation = new URL('@/assets/anim/TotoroWalk.json', import.meta.url).href

const cerrarVentana = () => {
    window.close()
    setTimeout(() => {
        window.location.href = 'https://easypantry.netlify.app/home'
    }, 1500)
}
</script>

<style scoped>
.checkout-view {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
}

/* Mitad izquierda (animación) */
.checkout-left {
    flex: 1;
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Mitad derecha (mensaje) */
.checkout-right {
    flex: 1;
    background-color: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
}

.message {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* ✅ Centra el botón y texto horizontalmente */
    justify-content: center;
    text-align: center;
    padding: 2rem;
    color: white;
    max-width: 460px;
}

.message h1 {
    text-align: center;
    padding: 2rem;
    font-family: "Playwrite AU QLD", cursive;
    font-size: 2.6rem;
    color: white;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.message p {
    font-size: 1.0rem;
    color: white;
    text-align: center;
}

button {
    width: 100%;
    max-width: 200px;
    margin: 1rem auto 0;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;
}


.snow-container {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 420px;
    overflow: hidden;
    z-index: 2;
}

.snowflake {
    position: absolute;
    top: -10px;
    color: white;
    font-size: 1rem;
    opacity: 0.8;
    animation: fall linear infinite;
}

@keyframes fall {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    100% {
        transform: translateY(450px) rotate(360deg);
        opacity: 0;
    }
}
</style>
