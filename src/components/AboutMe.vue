<template>
    <div class="row no-gutters">
      <div class="col xs-12">
        <h1 class="text-center section-heading">About me</h1>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-md-3"></div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="jumbotron">
          <p>{{ text }}</p>
        </div>
      </div>
      <div class="col-md-3"></div>
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
