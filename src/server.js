const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
 
 server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
  if (process.env.NODE_ENV === 'production') {
    console.log('Server berjalan pada mode production');
    // Do something in production environment
  } else {
    // Do something in other environments
    console.log('Server berjalan pada mode development');
  }
  
};

init();
