<template>
  <Header></Header>
  <section style="margin-top:0">
    <about-me :text="aboutMeText"></about-me>
    <list-of-projects :projects="projects"></list-of-projects>
  </section>
  <Footer></Footer>
</template>

<script>
  import Header from './components/Header.vue';
  import AboutMe from './components/AboutMe.vue';
  import Footer from './components/Footer.vue';
  import ListOfProjects from './components/ListOfProjects.vue';
  export default {
    components: {
      Header,
      Footer,
      'about-me': AboutMe,
      'list-of-projects': ListOfProjects
    },
    name: 'App',
    data(){
      return{
        aboutMeText:"Soy tiulado de Ingeniería Civil Infomática en Chile, me especializo en crear aplicaciones web y móvil. Actualmente, trabajo como desarrollador Back-end en Magnet SPA.",
        projects: [
          {
            title: 'Lottawork',
            description: 'A startup with the purpose of connecting potential customers to freelancers and small businesses, and a marketplace to hire services. My job was to build the front-end for the web application and maintain the Android version of the app.',
            link: "https://app.lottawork.com/",
            technologies: [
                'JavaScript', 'PHP', 'Laravel', 'Java', 'Android', 'MySQL'
            ],
            images: [
                {
                    'route':require('./assets/lottawork1.png'),
                    'name':'lottawork1'
                },
                {
                    'route':require('./assets/lottawork2.png'),
                    'name':'lottawork2'
                }
            ]
          },
          {
            title: 'Centro Nacional en Sistemas de Información en Salud',
            description: 'As part of the "Evaluación de Calidad de Sistemas Software en Telemedicina" project, I collaborated in the creation of the data model, back-end and front-end of the tool used for the evaluation of the applicant to the certification.',
            link: "https://sello.cens.cl/",
            technologies: [
                'Python', 'Django', 'JavaScript', 'PostgreSQL'
            ],
            images:[
                {
                    'route':require('./assets/cens1.png'),
                    'name':'cens1'
                },
                {
                    'route':require('./assets/cens2.png'),
                    'name':'cens2'
                },
                {
                    'route':require('./assets/cens3.png'),
                    'name':'cens3'
                }
            ]
          },
          {
            title: 'Universidad de Concepción',
            description: 'This project was a collaboration of a group of students during our last year at University. It consisted of a web-based structural health monitoring system to monitor bridges in Chile. My collaboration was primarily on the data modelling side.',
            link: 'http://177.71.243.203/',
            technologies: [
                'Python', 'Flask', 'JavaScript', 'TimescaleDB'
            ],
            images:[
                {
                    'route':require('./assets/shm1.png'),
                    'name':'shm1'
                },
                {
                    'route':require('./assets/shm2.png'),
                    'name':'shm2'
                },
                {
                    'route':require('./assets/shm3.png'),
                    'name':'shm3'
                }
            ]
          },
          {
            title: 'LATAM Airlines',
            description: 'When I started to work for Everis, I was assigned to the Marketing team who provides services to LATAM Airlines Group. My role is to improve and maintain the web-applications and Batch processes used to refund and compensate passangers.',
            link: 'https://www.latam.com/DevolucionesLatamWeb-1.0/public/ingresoSolicitud.jsf',
            technologies: [
                'Java', 'Oracle', 'SoapUI'
            ],
            images:[
                {
                    'route':require('./assets/latam1.png'),
                    'name':'latam1'
                },
                {
                    'route':require('./assets/latam2.png'),
                    'name':'latam2'
                }
            ]
          }
        ]
      };
    }
  }
</script>

<style>
  @import './../public/lib/font-awesome/fontawesome-free-5.13.0-web/css/fontawesome.min.css';
  @import './../public/lib/font-awesome/fontawesome-free-5.13.0-web/css/brands.min.css';
  @import './../public/lib/font-awesome/fontawesome-free-5.13.0-web/css/regular.min.css';
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  
  .my-links {
    margin-left:10px;
    margin-right:10px;
  }

  #app {
    font-family: "Poppins", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  h1, h2, h3, h4, h5{
    color:#4A4E69;
    font-weight: 300;
    font-family: "Poppins", Helvetica, Arial, sans-serif;
  }

  p {
    color: #4A4E69;
    font-weight: 300;
    font-family: "Poppins", Helvetica, Arial, sans-serif;
  }

  section {
    width:100%;
    margin: 40px 0;
    padding: 0 5%;
  }

  .section-heading {
    text-transform: uppercase;
    font-size: 1.6em;
  }

  hr {
    max-width:300px;
  }


  .navbar.navbar-default {
    background: none;
    border: none; 
    z-index: 1;
  }


  .navbar-default .navbar-text {
    color:white;
  }


  .row-header {
    padding: 5vh 5vw 0 5vw;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    margin-bottom:100px;
    display: flex;
    align-items: center
  }

  .header-col {
    position: relative;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.18);
    bottom: -60px;
    padding: 30px 0;
    max-width:400px;
    margin:auto;
  }

  .profile-pic {
    border-radius:50%;
    width:40%;
    max-width: 200px;
  }

  .header-col h2 {
    font-size: 1.3em;
    margin-bottom: 20px;
    margin-top: 0;
  }

  .email {
    margin-top:20px;
  }

  .email .glyphicon {
    margin-right:5px;
  }


  .project-img-col img {
    max-width: 250px;
    margin: auto;
  }


  .list-container {
    max-width: 600px;
    margin: auto;
  }

  .techlogo {
    width:140px;
  }

  .tech-item {
    margin:10px;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
  }

  .tech-item-text {
    margin-top:10px;
  }

  .tech-item i {
    font-size:5em;
  }

  .tech-tool-item {
    margin-left:15px;
    display: inline-block;;
  }

  .row-footer {
    padding: 0vh 10vw 10vw 10vw;
    margin-top:100px;
    /*background-image: url('../img/concepcion.jpg');*/
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .footer-col {
    position: relative;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.18);
    top: -60px;
    padding: 50px 0;
    max-width:600px;
    margin:auto;
  }

  .btn.outline {
    background: none;
    padding: 12px 22px;
  }

  .btn-primary.outline {
    border: 2px solid #0099cc;
    color: #0099cc;
    border:0;
  }

  .linkedin-btn {
    background-color: white;
    width:140px;
    box-shadow: 0px 2px 5px 1px lightgrey;
    padding: 12px;
    border-radius: 5px;
  }

  .btn-primary.outline:hover, .btn-primary.outline:focus, .btn-primary.outline:active, .btn-primary.outline.active, .open > .dropdown-toggle.btn-primary {
    color: #33a6cc;
    border-color: #33a6cc;
  }
  .btn-primary.outline:active, .btn-primary.outline.active {
    border-color: #007299;
    color: #007299;
    box-shadow: none;
  }
  .rounded-pill{
    border-radius: 20px;
  }
</style>
