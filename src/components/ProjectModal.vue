<template>

    <div class="modal fade" :id="projectName" tabindex="-1" role="dialog" :aria-labelledby="projectName+'Label'" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <h3>{{ $t(title) }}</h3>
                    <div class="mt-3">
                        <p>{{ $t(description) }}</p>
                    </div>

                    <div class="mt-5">
                        <h6>{{ $t("Tecnologías utilizadas en este proyecto:") }}</h6>
                        <p> <span v-for="item in technologies" :key="item" class="badge badge-primary" :class="item.toLowerCase()+'-tag'">{{ item }}</span> </p>
                    </div>

                    <div class="my-5">
                        <a class="btn btn-secondary w-50 rounded-pill" :href="link" target="_blank">{{ $t('Ver página web') }}</a>
                    </div>

                </div>
                <div class="col-12 col-sm-12s col-md-12 col-lg-8">
                    <Carousel :name="projectName+'-carousel'" :images="images"></Carousel>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    import Carousel from './Carousel.vue';
    
    export default {
    
        components:{
            Carousel
        },
        props:{
            projectName:{
                type:String,
                required:true
            },
            title:{
                type:String
            },
            description:{
                type:String
            },
            link:{
                type:String
            },
            technologies:{
                type:Array
            },
            images:{
                type:Array
            }
        }   
    }
</script>

<style scoped>
    p{
        text-align: justify;
    }
    h6{
        text-align: left;
    }
    @media (min-width: 576px){
        .modal-dialog {
            max-width: 95vw;
            margin: 1.75rem auto;
        }
    }
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