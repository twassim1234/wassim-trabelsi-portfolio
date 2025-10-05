module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          'pulse-subtle': {
            '0%, 100%': { opacity: '0.6' },
            '50%': { opacity: '1' },
          },
          meteor: {
            '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
            '100%': { transform: 'translateX(-400px) translateY(400px)', opacity: '0' },
          },
        },
        animation: {
          'pulse-subtle': 'pulse-subtle 2s infinite',
          'meteor': 'meteor 3s linear infinite',
        },
      },
    },
    plugins: [],
  }
  