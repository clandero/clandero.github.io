<template>
    <div class="row no-gutters text-center row-header" :style="{'background-image': 'url(' + require('./../assets/concepcion.jpg') + ')', 'background-position-y':'center'}">
        <div class="col-12">
            <div class="row no-gutters">
                <div class="col-md-6">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <select class="btn btn-dark mx-1" v-model="$i18n.locale">
                    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.lang">{{ lang.label }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="header-col">
                <img src="./../assets/myphoto.jpeg" alt="profile pic" class="img-responsive profile-pic center-block">
                <h1 class="mt-2">Carlos Landero</h1>
                <h2>{{ $t('Ingeniero de Software') }}</h2>
                <a class="my-links btn btn-danger px-2" href="mailto:carloslanderoambiado@gmail.com">
                    <i class="far fa-envelope"></i>
                </a>
                <a class="my-links btn btn-primary px-2" target="_blank" href="https://www.linkedin.com/in/clandero/" style="color:inherit;">
                    <i class="fab fa-linkedin-in" style="color:white;"></i>
                </a>
                <a class="my-links btn btn-dark px-2" target="_blank" href="https://github.com/clandero" style="color:inherit; background-color:black;">
                    <i class="fab fa-github" style="color:white;"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                langs: [
                    {
                        'lang':'es',
                        'label': '🇪🇸 Español'
                    },
                    {
                        'lang':'en',
                        'label': '🇬🇧 English'
                    },
                    // {
                    //     'lang':'ja',
                    //     'label': '🇯🇵 日本語'
                    // }
                ] 
            }
        }
    }
</script>
