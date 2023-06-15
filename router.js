import { createRouter, createWebHistory } from "vue-router";

import Homepage from './src/assets/pages/Homepage.vue';
import CharactersList from './src/assets/pages/CharactersList.vue';
import SingleCharacter from './src/assets/pages/SingleCharacter.vue';
import TeamList from './src/assets/pages/TeamList.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Homepage
        },
        {
            path: '/characters',
            name: 'Characters',
            component: CharactersList
        },
        {
            path: '/characters/:id',
            name: 'Character',
            component: SingleCharacter
        },
        {
            path: '/teamlist',
            name: 'teamlist',
            component: TeamList
        },

    ]
})

export { router };