<template>
    <header>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">

            <div class="container-fluid">

                <router-link :to="{ name: Home }" class="Nav-link">Nome della pagina che dobbiamo scegliere 🫡</router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav m-0">

                        <li class="nav-item" v-for="(route, index) in routes" :key="index">

                            <!-- per fare routing non si usano le ancore normali -->
                            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                            <router-link :to="{ name: route.route }" class="nav-link " active-class="active">{{
                                route.name
                            }}</router-link>


                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    </header>
</template>

<script>
export default {
    name: 'HeaderApp',

    data() {
        return {
            routes: [
                {
                    name: 'Home',
                    route: 'Home'
                },
                {
                    name: 'Characters',
                    route: 'Characters'
                },
                {
                    name: 'Team',
                    route: 'teamlist'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    height: 50px;
    width: 100%;
}
</style>