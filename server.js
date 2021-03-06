const newrelic = require('newrelic');
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
// app.use('/restaurants/:id', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);
console.log('pass2')
const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  });
}

app.get('/restaurants/:id', function(req, res){
  let components = renderComponents(services, {itemid: req.params.id});
  res.end(Layout(
    'WeGot',
    App(...components),
    Scripts(Object.keys(services))
  ));
});

app.get('/api/restaurants/:id/gallery', (req, res) => {
  res.redirect(`http://localhost:3001/api/restaurants/${req.params.id}/gallery`)
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});