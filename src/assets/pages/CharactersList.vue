<template>
    <div class="container">
        <h1>Characters overview</h1>
        <div class="row">
            <div class="col" v-for="(character, index) in characters">
             <router-link :to="{ name: 'Character', params: { id: character.id } }" class="text-dark">
                <div class="card-container">

                    <div class="card-background">

                        <div class="card-frame">

                            <div class="frame-header">
                                <h5 class="name">{{ character.name }}</h5>
                                <!-- here goes the mana icon -->
                            </div>

                            <!-- Here goes the illustration -->

                            <div class="frame-type-line">
                                <h4 class="type">{{ character.type.name }}</h4>
                                <!-- Here goes the set icon -->
                            </div>

                            <div class="frame-text-box">

                                <p v-if="character.description != '<br>'" v-html="character.description" class="description ftb-inner-margin"></p>
                                <p v-else class="description ftb-inner-margin"> Nessuna Descrizione</p>
                                <!-- 
                                <p class="description">You may spend mana as though it were mana of any color to cast
                                    planeswalker
                                    spells.</p>

                                <p class="flavour-text">"For the life of every plane, I will keep watch."</p> -->
                                
                               
                            </div>

                            <!-- <div class="frame-bottom-info inner-margin">
                                <div class="fbi-left">
                                    <p>140/184 R</p>
                                    <p>OGW &#x2022; EN  Wesley Burt</p>
                                </div>

                                <div class="fbi-center"></div>

                                <div class="fbi-right">
                                    &#x99; &amp; &#169; 2016 Wizards of the Coast
                                </div>
                            </div> -->

                        </div>

                    </div>

                </div>
             </router-link>

            </div>
            <div class="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination mt-3">
                    <li class="page-item"><button class="page-link" :class="currentPage === 1 ? 'd-none': '' " @click="getData(currentPage - 1)">Previous</button></li>
                    <li class="page-item" v-for="n in lastPage"><button  :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                    </li>
    
                    <li class="page-item"><button class="page-link" :class="currentPage === lastPage ? 'd-none': ''" @click="getData(currentPage + 1)">Next</button></li>
                </ul>
            </nav>
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
            lastPage: null,
        }

    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiBaseUrl}/characters`, {
                params: {
                    "page": numPage
                }
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



<style lang="scss" scoped>
.container {
    padding-top: 200px;

    h1 {
        color: white;
        margin-bottom: 50px;
    }

    .description {
        font-size: .6rem;
    }

    .name {
        font-weight: bold;
        font-size: .8rem;
        padding-left: 5px;
    }

    .type {
        font-size: .7rem;
        font-weight: bold;
        padding-left: 5px;
    }

    .card-container {
        border: 1px solid black;
        background-color: black;
        width: 200px;
        height: 270px;
        margin: 0 auto;
        /* margin-top: 56px; */
        border-radius: 25px;
        box-sizing: border-box;
        box-shadow: -8px 9px 16px -3px gray;

        &:hover {
            scale: 1.4;
            transition: 1.5s;
        }

        /*background: #171314; */
        .card-background {
            height: 230px;
            margin: 15px 15px 0 15px;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            border-bottom-left-radius: 8%;
            border-bottom-right-radius: 8%;
            background-image: url(/img/green-bg.webp);
            background-repeat: no-repeat;
            background-size: cover;

            .card-frame {
                z-index: 1;
                position: relative;
                height: 230px;
                max-width: 98%;
                left: 1%;
                top: 0.5%;
                left: 1.2%;
                display: flex;
                flex-direction: column;

                .frame-header,
                .frame-type-line,
                .frame-text-box {
                    overflow: hidden;
                }

                .frame-header,
                .frame-type-line {
                    border-bottom: 4px solid #a9a9a9;
                    border-left: 1px solid #a9a9a9;
                    border-top: 1px solid #fff;
                    border-right: 1px solid #fff;
                }

                .frame-header,
                .frame-art,
                .frame-type-line {
                    box-shadow:
                        0 0 0 2px #171314,
                        0 0 0 5px #26714A,
                        -3px 3px 2px 5px #171314;
                    margin-bottom: 7px;
                }

                .frame-text-box {
                    height: 100%;
                    box-shadow:
                        0 0 0 5px #26714A,
                        -3px 3px 2px 5px #171314;
                }


                .frame-header,
                .frame-type-line {
                    background:
                        linear-gradient(0deg, rgba(201, 216, 201, .3), rgba(201, 216, 209, .3)),
                        url(https://image.ibb.co/jKByZn/tile_bg_1.jpg);
                    display: flex;
                    margin-top: 10px;
                    margin-left: 6px;
                    margin-right: 5px;
                    padding: 4px 0;
                    display: flex;
                    justify-content: space-between;
                    border-radius: 18px/40px;
                }
            }

            .frame-text-box {
                margin: 5px 10px 0 10px;
                background: #d3ded6;
                background-image: url(https://image.ibb.co/dFcNx7/tile_bg_2.jpg);
                display: flex;
                flex-direction: column;
                justify-content: start;
                padding: 10px 5px;
                box-sizing: border-box;
                font-size: 1.2em;
            }
        }

    }

}
</style>




