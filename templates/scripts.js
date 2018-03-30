module.exports = (items) => `
  <script src="/lib/react.development.js"></script>
  <script src="/lib/react-dom.development.js"></script>
  ${items.map(item => {
    return `<script src="/services/${item}.js"></script>`;
  }).join('\n')}
  <script>
    console.log(window.App)
    ${items.map(item => {
      return `ReactDOM.hydrate(
        React.createElement(App),
        document.getElementById('gallery-app')
      );`;
    }).join('\n')}
  </script>
`;