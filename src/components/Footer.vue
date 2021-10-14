<template>
    <div class="row no-gutters row-footer" :style="{'background-image': 'url(' + require('./../assets/concepcion.jpg') + ')'}">
        <div class="col-12">
            <div class="row">
                <div class="col footer-col text-center px-4">
                    <h5>{{ $t('Si necesitas contactarme. Escribeme e intentaré responderte lo antes posible.') }}</h5>
                    <a href="mailto:carloslanderoambiado@gmail.com" class="btn btn-primary w-50 rounded-pill"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>{{ $t('Hola!')}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
