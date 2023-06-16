<template>
        <div class="col pt-3 text-center ">
            <div class="my-card border p-3 text-white">
                <img :src="member.image" class="card-img-top rounded-circle" alt="...">
                <div class="mt-2">
                    <h5 class="">{{member.name}}</h5>
                    <h6>
                        {{member.description}}
                    </h6>
                </div>
                <h6>Tecnologie utilizzate</h6>
                <ul class="list-unstyled small d-flex flex-wrap mb-0">
                    <li v-for="tec in member.technologies" class="border-0 pb-0 col-6"><span >{{ tec }}</span></li>
                </ul>
                <div class="d-flex justify-content-center gap-3 mt-2">
                    <a :href="member.githubURL"><i class="fa-brands fa-github"></i></a>
                    <a :href="member.ig"><i class="fa-brands fa-instagram"></i></a>
                    <a :href="member.fb"><i class="fa-brands fa-facebook"></i></a>
                </div>
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
        height: 360px;
        max-width: 250px;

        img {
            object-fit: cover;
            width: 150px;
            height: 150px;
        }
    }

</style>