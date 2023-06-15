<template>
    <footer class="d-flex align-items-center justify-content-center flex-column">
        <p class="text-white">Made with &hearts; by Konoha Team</p>
        <div class="d-flex">
            <p class="text-white me-2">Take a look at our repo:</p>
            <a href="https://github.com/itschiaras/vue-game-creator"><i class="fa-brands fa-github"></i></a>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterApp'
}
</script>

<style lang="scss" scoped>
footer {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
}
</style>