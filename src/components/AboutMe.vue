<template>
    <div class="row no-gutters">
      <div class="col xs-12 my-3">
        <h1 class="text-center section-heading">{{ $t('Sobre mí')}}</h1>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-md-2"></div>
      <div class="col-xs-12 col-sm-12 col-md-8">
        <div class="jumbotron">
          <p>{{ $t(text) }}</p>
          <p>
            <!-- <button class="btn btn-primary rounded-pill">Resume</button> -->
          </p>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type:String
            }
        }
    }
</script>

<style scoped>
  p{
    text-align: justify;
  }
  @media (min-width: 576px){
    .jumbotron {
      padding: 3rem 2rem;
    }
  }
</style>
