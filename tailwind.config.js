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
          'dark-txt': '#B8BBBF'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
