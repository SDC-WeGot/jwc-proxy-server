// const newrelic = require('newrelic');
// const express = require('express');
// const path = require('path');
// const morgan = require('morgan');
// const app = express();
// const port = process.env.PORT || 4001;

// app.use(morgan('dev'));
// app.use('/restaurants/:id', express.static('public'));

// const clientBundles = './public/services';
// const serverBundles = './templates/services';
// const serviceConfig = require('./service-config.json');
// const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

// const React = require('react');
// const ReactDom = require('react-dom/server');
// const Layout = require('./templates/layout');
// const App = require('./templates/app');
// const Scripts = require('./templates/scripts');

// const renderComponents = (components, props = {}) => {
//   return Object.keys(components).map(item => {
//     let component = React.createElement(components[item], props);
//     return ReactDom.renderToString(component);
//   });
// }

// app.get('/items/:id', function(req, res){
//   let components = renderComponents(services, {itemid: req.params.id});
//   res.end(Layout(
//     'SDC Demo',
//     App(...components),
//     Scripts(Object.keys(services))
//   ));
// });

// app.listen(4001, () => {
//   console.log('Proxy listening on port 4001');
// });

// const express = require('express');
// const path = require('path');
// const morgan = require('morgan');
// const restaurantsInfoRouter = require('./routes/routes.js');
// const bundleRouter = require('./routes/bundleRouter.js');
// const newrelic = require('newrelic');

// const app = express();

// app.use(morgan('dev'));
// app.get('/', (req, res) => {
//   res.redirect('/restaurants/ChIJUcXYWWGAhYARmjMY2bJAG2s/');
// })

// app.use('/restaurants/:id', express.static('public'));
// app.get('/restaurants/:id/:widget/app.js', bundleRouter);

// app.get('/api/restaurants/:id/:widget', restaurantsInfoRouter);

// app.listen(4001, () => {
//   console.log('Proxy listening on port 4001');
// });
