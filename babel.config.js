module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true }],
    'inline-react-svg'
  ]
};
