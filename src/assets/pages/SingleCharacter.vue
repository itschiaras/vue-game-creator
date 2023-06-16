<template>
        <div v-if="character" class="pt-5 text-center">
            <h1 class="text-white mt-5">{{ character.name }}</h1>
       
            <h3 class="text-white">{{ character.type.name }}</h3>
            <p  class="text-white">Attack: {{ character.attack }}</p>
            <p  class="text-white">Defence :{{ character.defence }}</p>
            <p  class="text-white">Life: {{ character.life }}</p>
            <p  class="text-white">Speed: {{ character.speed }}</p>

            <div v-if="items">
                 <h3 class="text-white mt-4">Items</h3>
                <div class="d-flex gap-3 justify-content-center">
                    <p v-for=" item in character.items
                    "  class="badge rounded-pill text-bg-success py-2 px-3 mt-2">{{ item.name }}</p>
                </div>
            </div>
            <div v-else>
                <h3 class="text-white">Nessun item</h3>
            </div>
           
        </div>
       

</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleCharacter',

    data () {
        

        return {
            apiUrl: 'http://127.0.0.1:8000/api',
            character : null
        }
    },
    methods: {

         getCharacter() {
            axios.get(`${this.apiUrl}/characters/${this.$route.params.id}`).then((res)=>{ 
              if(res.data.status){
                this.character = res.data.results;
              

              }else{
                 this.$router.push({name: 'not-found'})
              }
            })
         }
    },
    mounted() {
        this.getCharacter();

    }
}

</script>

<style lang="scss" scoped>

</style>