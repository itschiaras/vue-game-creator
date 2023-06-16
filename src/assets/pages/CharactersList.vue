<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="(character, index) in characters">
                <div class="card">
                    <h1>{{ character.name }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CharactersList',
    data() {
        return {
            characters: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null
        }

    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiBaseUrl}/characters`, {

            }).then((res) => {
                this.characters = res.data.results.data;
                console.log(this.characters);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });

        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style lang="scss" scoped></style>