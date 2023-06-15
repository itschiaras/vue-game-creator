<template>
        <div class="col pt-3 ">
            <div class="my-card border p-3 text-white">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="">
                    <h5 class="">{{member.name}}</h5>
                    <h6>
                        {{member.description}}
                    </h6>
                </div>
                <h6>Che cosa ha utilizzato</h6>
                <ul class="list-unstyled small d-flex flex-wrap">
                    <li v-for="tec in member.technologies" class="border-0 pb-0 col-6"><span >{{ tec }}</span></li>
                </ul>
            </div>
        </div>

</template>

<script>
export default {
    name: 'TeamCard',
    props: ['member']
}
</script>

<style lang="scss" scoped>

    .my-card{
        background-color: rgba($color: #000000, $alpha: 0.7);
        color: white;
        border-radius: 15px;
        box-shadow: 5px 6px 25px -3px rgba(255,255,255,0.1);
        height: 250px;
    }

</style>