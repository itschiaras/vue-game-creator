<template>
    <div class="container d-flex justify-content-center ">
        <div v-if="character" class="card-container text-white">
            <div class="card-background">
                <div class="card-frame">
                    <div class="frame-header">
                        <h5 class="name pb-3"> {{ character.name }}</h5>
                    </div>
                    <div>
                        <img class="frame-art mt-1" src="/img/characters/Barbarian.jpg" alt="nissa art">
                    </div>

                    <div class="frame-type-line mt-2">
                        <h4 class="type">{{ character.type.name }}</h4>
                    </div>
                    <div class="frame-text-box text-center">
                        <div class="d-flex flex-wrap justify-content-evenly gap-3">
                            <p class="stat-box py-2 text-uppercase">atk: {{ character.attack }}
                            </p>
                            <p class="stat-box py-2  text-uppercase">def: {{ character.defence
                            }}
                            </p>
                            <p class="stat-box py-2  text-uppercase">spd: {{ character.speed }}
                            </p>
                            <p class="stat-box py-2  text-uppercase">hp: {{ character.life }}
                            </p>
                        </div>


                        <div v-if="character.items && character.items.length > 0">
                            <h3 class="text-white">Items</h3>
                            <div class="d-flex gap-3 justify-content-center">
                                <p v-for=" item in character.items
                    " class="badge rounded-pill text-bg-success py-2 px-3">{{ item.name }}</p>
                            </div>
                        </div>
                        <div v-else>
                            <h3 class="text-white">Nessun item</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleCharacter',

    data() {


        return {
            apiUrl: 'http://127.0.0.1:8000/api',
            character: null
        }
    },
    methods: {

        getCharacter() {
            axios.get(`${this.apiUrl}/characters/${this.$route.params.id}`).then((res) => {
                if (res.data.status) {
                    this.character = res.data.results;


                } else {
                    this.$router.push({ name: 'not-found' })
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
.container {
    padding-top: 100px;






    h1 {
        color: white;
        margin-bottom: 50px;
    }

    .description {
        font-size: 1.1rem;
        color: black;
    }

    .name {
        font-weight: bold;
        font-size: 1.7rem;
        padding-left: 5px;
        color: black;
    }

    .type {
        font-size: 1.2rem;
        font-weight: bold;
        padding-left: 5px;
        color: black;

    }


    .card-container {
        border: 1px solid black;
        background-color: black;
        width: 350px;
        height: 570px;
        margin: 0 auto;
        /* margin-top: 56px; */
        border-radius: 25px;
        box-sizing: border-box;
        box-shadow: -8px 9px 16px -3px gray;

        &:hover {
            scale: 1.1;
            transition: 1.2s;
        }

        /*background: #171314; */
        .card-background {
            height: 510px;
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
                height: 520px;
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

                    .stat-box {
                        /* box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px; */
                        width: 90px;
                        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
                    }
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

                .frame-art {

                    width: 290px;
                    height: 190px;
                    object-fit: cover;
                    object-position: 0px -50px;
                    /* make it fit in the card */
                    margin: 0 10px;

                    /* align it vertically */
                    img {
                        width: 50%;
                    }
                }

                .frame-text-box {
                    height: 100%;
                    box-shadow:
                        0 0 0 5px #26714A,
                        -3px 3px 2px 5px #171314;

                    p {
                        color: black;
                    }
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