module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize:{
        xxs: '.5625rem'
      },
      colors: {
        'main-red': '#DE3838',
        'light-gray': '#EBEBEB',
        'dark-gray': '#AFB2B7',
        grass: '#74D76A',
        normal: '#A9AA7B',
        fighting: '#C13129',
        flying: '#97A3DF',
        poison: '#BB5A9F',
        ground: '#E7D4A9',
        rock: '#BEA563',
        bug: '#A9BD42',
        ghost: '#6762B2',
        steel: '#AFADC4',
        fire: '#FE4833',
        water: '#1F93F6',
        electric: '#FBC34D',
        psychic: '#FD6FA0',
        ice: '#47CEE4',
        dragon: '#8567ED',
        dark: '#765A4E',
        fairy: '#FCB5F0',
      }
    },
  },
  plugins: [
      require('daisyui'),
  ],
}
