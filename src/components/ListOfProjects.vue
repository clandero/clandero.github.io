<template>
    <div class="row no-gutters">
      <div class="col xs-12 my-3">
        <h1 class="text-center section-heading">Projects I've worked</h1>
      </div>
    </div>
    <single-project v-for="item in projects" :key="item" :title="item.title" :description="item.description" :link="item.link" :technologies="item.technologies" :images="item.images"></single-project>
    <br>
</template>

<script>
    import SingleProject from './SingleProject.vue';
    export default {
        props:{
            projects:{
                type:Array
            }
        },
        components: {
            'single-project': SingleProject
        }
    }
</script>
