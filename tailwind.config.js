/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        ssp: ["Source Sans Pro", "sans-serif"],
      },
      backgroundImage: {
        'bg-slide': "url('../assets/images/about/about.svg')",
      },
      colors: {
        primary : '#1E9CEF',
        secondary : '#F4F4F4',
        accent : '#526581',
        black:"#37352F",
        'btn-primary': '#0f92e5',
        'bg-img':"../assets/images/footer/Footer.svg",
        'bg-secondary' : '#F4F4F4',
        'bg-accent' : '#526581',
        'bg-primary' : '#1E9CEF',
        'text-primary' : '#37352F',
        'text-accent' : '#526581',
        placeholder : '#9CA3AF'
      },
      fontSize: {
        '12px' : '12px',
        '15px' : '15px',
        '16px' : '16px',
        '18px' : '18px',
        '20px' : '20px',
        '22px' : '22px',
        '24px' : '24px',
        '36px' : '36px',
        '48px' : '48px',
      }

    },
    boxShadow: {
      'custom'   : '0 0.5px 5px 2px rgba(0, 0, 0, 0.1)',
      'content' : '-1px 5px 32px rgba(0, 0, 0, 0.08)',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
