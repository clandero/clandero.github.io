<template>
    <section style="margin-top:0">
        <div class="row no-gutters">
            <div class="col-md-2"></div>
            <div class="col-xs-12 col-sm-12 col-md-8">   
                <div class="row no-gutters">
                    <div class="col-xs-6 col-sm-6 col-md-4">
                        <h3>{{ title }}</h3>
                        
                        <button type="button" class="btn btn-primary w-50 rounded-pill mb-3" data-toggle="modal" :data-target="'#'+title.toLowerCase().split(' ').join('-')">
                            More details
                        </button>
                        
                        <p> <a class="btn btn-secondary w-50 rounded-pill" :href="link" target="_blank">Launch</a> </p>

                        <project-modal :projectName="title.toLowerCase().split(' ').join('-')" :title="title" :description="description" :link="link" :technologies="technologies" :images="images"></project-modal>

                    </div>

                    <div class="col-xs-6 col-sm-6 col-md-8">
                        <Carousel :name="title+'-carousel'" :images="images"></Carousel>
                    </div>
                </div>
                
            </div>
            <div class="col-md-2"></div>
        </div>
        
    </section>
</template>

<script>
    import Carousel from './Carousel.vue';
    import ProjectModal from './ProjectModal.vue';
    export default {
        components: {
            Carousel,
            'project-modal': ProjectModal
        },
        props: {
            'title':{
                type:String
            }, 
            'description':{
                type:String
            }, 
            'link':{
                type:String
            }, 
            'technologies':{
                type:Array
            },
            'images':{
                type:Array
            }
        }
    }
</script>

<style scoped>
    .javascript-tag{
        color:black;
        background-color: #FCDD27;
        margin-left:5px;
        margin-right:5px;
    }
    .php-tag{
        color:black;
        background-color: #8892BF;
        margin-left:5px;
        margin-right:5px;
    }
    .laravel-tag{
        color:white;
        background-color: #FF2D20;
        margin-left:5px;
        margin-right:5px;
    }
    .android-tag{
        color:white;
        background-color: #3ddc84;
        margin-left:5px;
        margin-right:5px;
    }
    .mysql-tag, .postgresql-tag{
        color:#4379A1;
        background-color: white;
        margin-left:5px;
        margin-right:5px;
    }
    .django-tag{
        color:white;
        background-color: #0D4B33;
        margin-left:5px;
        margin-right:5px;
    }
    .java-tag, .oracle-tag{
        background-color: #D80001;
        color:white;
        margin-left:5px;
        margin-right:5px;
    }
    .python-tag{
        background-color: #214767;
        color:white;
        margin-left:5px;
        margin-right:5px;   
    }
    .flask-tag{
        background-color: white;
        color:black;
        margin-left:5px;
        margin-right:5px;   
    }
    .timescaledb-tag{
        background-color: #FDB517;
        color:black;
        margin-left:5px;
        margin-right:5px;   
    }
    .soapui-tag{
        background-color: #EBC822;
        color:black;
        margin-left:5px;
        margin-right:5px;  
    }
</style>
