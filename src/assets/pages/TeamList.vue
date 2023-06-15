<template>
    <div class="position-absolute"></div>
    <div class="container">
        <h1>L'idea se ti garba è dedicare una pagina a noi che abbiamo fatto l'app 🚀</h1>
        <div class="row gy-3 align-items-center justify-content-center row-cols-lg-5">
            <TeamCard v-for="(member, index) in members" :member="member" :key="index" />
        </div>
    </div>
</template>

<script>
import TeamCard from '../../components/TeamCard.vue';
export default {
    name: 'TeamList',
    components: {
        TeamCard
    },
    data() {
        return {
            members: [
                {
                    name: 'Chiara Sucato',
                    description: 'FRONT-MEN Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Marco Bione',
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Gaetano Spampinato',
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Andrea Collura',
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Marika Di Blasio',
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                }
            ]
        }
    }
}
</script>
    
<style lang="scss" scoped>
.position-absolute {
    background-color: rgba(0, 0, 0, 0.5);
    top: 50px;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>