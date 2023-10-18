module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          9: '9px',
          11: '11px',
          13: '13px',
          14: '14px',        
          52: '52px'
        },
        backgroundColor: {
          'main-bg': '#F5F6F8',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          'barColor': "#5A32EA",
          'lightPurple': '#F1EFFC',
          'sidebarColor': "#040440",
          'activeLink': "#2D2D69"
        },
        
        width: {
          100: '100px',
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
          '6/9': '66.67%',
          '1/9': '11.11%',
        },
        height: {
          100: '100px',
        },
      },
    },
    plugins: [],
  };
  