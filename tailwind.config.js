
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#4bcaff',
        'nav': '#353f46',
        'secondary' : '#515f67'
      },
      opacity: {
        '85': '.85',
      },
      backgroundImage: {
        'hero-pattern': "url('../img/hero-bg.jpg')",
        'about-img': "url('../img/about-bg.jpg')",
        'contact-img': "url('../img/contact-bg.jpg')",
      },
      spacing: {
        '30': '30px',
      }
    },
  },
  plugins: [],
}
