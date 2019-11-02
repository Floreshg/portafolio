

const app = new Vue({
  el: '#app',
  data: {


    //nav
    navs: [
      {
        title: 'About',
        url: '#about'
      },
      {
        title: 'Portfolio',
        url: '#portafolio'
      },
      {
        title: 'Contact',
        url: '#contact'
      }
    ],

    //header
    saludo: 'HI!',
    texto: 'Im ',


    //about

    about: 'about',

    //descriptionabout: 'Soy George flores, Ingeniero de Sistemas y desarrollador web enfocado en Front-end.',
    descriptionabout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    descriptionabout2: 'Whether youre a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!',



    //portafolio

    titleportafolio: 'portfolio',
    portafolios: [
      {
        picture: 'assets/img/portfolio/cabin.png',
        alt: 'imagen1',
        title: 'Tenologia Usada',
        text: 'HTML, CSS, JavaScript, AJAX, jQuery'
      },
      {
        picture: 'assets/img/portfolio/cake.png',
        alt: 'imagen2',
        title: 'Tenologia Usada',
        text: 'HTML, CSS, JavaScript, AJAX, jQuery'
      },
      {
        picture: 'assets/img/portfolio/game.png',
        alt: 'imagen3',
        title: 'Tenologia Usada',
        text: 'HTML, CSS, JavaScript, AJAX, jQuery'
      },
      {
        picture: 'assets/img/portfolio/cabin.png',
        alt: 'imagen1',
        title: 'Tenologia Usada',
        text: 'HTML, CSS, JavaScript, AJAX, jQuery'
      },
      {
        picture: 'assets/img/portfolio/cake.png',
        alt: 'imagen2',
        title: 'Tenologia Usada',
        text: 'HTML, CSS, JavaScript, AJAX, jQuery'
      },
      {
        picture: 'assets/img/portfolio/game.png',
        alt: 'imagen3',
        title: 'Tenologia Usada',
        text: 'HTML, CSS, JavaScript, AJAX, jQuery'
      },
      
    ],

    //contact

    titlecontact: 'Contact',

    //form 
   
    forms: [{
      iconMaterial: 'person_pin',
      for: 'name',
      nameLabel: 'Name',
      id: 'name',
      nameInput: 'name',
      type: 'text',
      class: 'form-control'
      
    },
    {
      iconMaterial: 'email',
      for: 'email',
      nameLabel: 'Email',
      id: 'email',
      nameInput: 'email',
      type: 'email',
      class: 'form-control'
      
    },
    {
      iconMaterial: 'phone',
      for: 'cel',
      nameLabel: 'Cel',
      id: 'cel',
      nameInput: 'cel',
      type: 'tel',
      class: 'form-control'
      
    }
  ],

    
    //footer

    titlefooter: 'Social network',

    //social
    sociales: [{
        name: 'google',
        href: 'mailto:floreshg6@gmail.com',
        iconSocial: 'fa-google',
        classSocial: 'google'
      },
      {
        name: 'likedin',
        href: 'https://www.linkedin.com/in/george-flores-honorio',
        iconSocial: 'fa-linkedin-in',
        classSocial: 'linkedin'
      },
      {
        name: 'github',
        href: 'https://github.com',
        iconSocial: 'fa-github',
        classSocial: 'github'
      }
    ]
  }

});

