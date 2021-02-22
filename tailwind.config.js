module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'dark-main': '#18191A',
          'dark-second': '#242526',
          'dark-third': '#3A3B3C',
          'dark-fourth': '#535557',
          'dark-fifth': '#191A1B',
          'dark-sixth': '#303132',
          'dark-txt': '#B8BBBF'
        }
      },
      borderWidth: {
        '1': '1px',
        '3': '3px'
      }
    },
    variants: {
      extend: {
        display: ['group-hover']
      },
    },
    plugins: [],
};
