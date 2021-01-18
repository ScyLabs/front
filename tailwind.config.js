
// Media Queries duplicate in utils/responsive

module.exports = {
  theme: {
    extend: {
      fontWeight: {
        //normal: 400,
        //bold:
      },

      colors: {
        primary: {
          extraLight: '#F2FFFA',
          light: 'red',
          medium: '#5500FF',
          dark: '#330099',
        },
        secondary: {
          extraLight: '#F5FFFB',
          light: '#9966FF',
          medium: '#CCFFED',
          dark: '#110033',
        },
        grey: {
          light: '#f8f5ff',
          medium: '#888888',
          dark: '#4C4A4F',
        },
        green: {
          medium: '#19B001',
        },
        error: {
          medium: '#FF005C',
        },
      },
      borderColor: {
        primary: {
          medium: '#5500FF',
          dark: '#330099',
        },
      },
      borderRadius: {
        button: '20px',
        l: '22px',
        xl: '30px',
      },
      backgroundSize: {
        32: '8rem',
      },
      backgroundPosition: {
        'center-25': 'center 25%',
        'center-32': 'center 32%',
      },
    },
  },
  variants: {},
  plugins: [],
}
