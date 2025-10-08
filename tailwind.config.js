// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1))',
      },
    },
  },
  plugins: [],
}
