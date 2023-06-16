<template>
    <div class="container d-flex flex-column h-100 justify-content-start">
        <div class="row title">
            <h1 class="text-center fw-bold ">Our Team &hearts;</h1>
        </div>
        <div class="row align-items-center justify-content-center row-cols-lg-5">
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
                    image: 'src/assets/img/photo_2023-06-16_12-21-25.jpg',
                    githubURL: 'https://github.com/itschiaras',
                    ig: 'https://www.instagram.com/itschiaraesse/',
                    fb: 'https://www.facebook.com/chiara.sucato.5/',
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Marco Bione',
                    image: 'src/assets/img/121133430.jpg',
                    githubURL: 'https://github.com/MarcoBione',
                    ig: null,
                    fb: null,
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Gaetano Spampinato',
                    image: 'src/assets/img/photo_2023-06-16_12-29-10.jpg',
                    githubURL: 'https://github.com/Gaetano26',
                    ig: null,
                    fb: null,
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Andrea Collura',
                    image: 'src/assets/img/photo_2023-06-16_12-16-30.jpg',
                    githubURL: 'https://github.com/AndreaCollura',
                    ig: null,
                    fb: null,
                    description: 'Junior Full Stack Developer',
                    technologies: ['HTML', 'CSS', 'JS', 'VUE', 'PHP', 'LARAVEL']
                },
                {
                    name: 'Marika Di Blasio',
                    image: 'src/assets/img/Foto_Marika_Di_Blasio.png',
                    githubURL: 'https://github.com/marikadiblasio',
                    ig: null,
                    fb: null,
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
    top: 55px;
    bottom: 0;
    right: 0;
    left: 0;
}

.container {
    padding-top: 100px;
}


</style>