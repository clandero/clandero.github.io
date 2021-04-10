<template>
    
    <div>
        <div :id="name" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li v-for="(item, index) in images" :key="item.name" :data-target="'#'+name" :data-slide-to="index" :class="index === 0 ? 'active':''"></li>
            </ol>

            <div class="carousel-inner">
                <div v-for="(item, index) in images" :key="item.name" :data-target="name" class="carousel-item" :class="index === 0 ? 'active': ''">
                    <img class="d-block w-100" :src="item.route"/>
                </div>
            </div>

            <a class="carousel-control-prev" :href="'#'+name" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#'+name" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div>

    </div>
</template>

<script>
    export default {
        props: {
            'name': {
                type:String
            },
            'images': {
                type:Array
            }
        }
    }
</script>