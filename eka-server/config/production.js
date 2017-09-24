require('dotenv').config();

module.exports = {
  'host': process.env.HOST,
  'port': process.env.PORT,
  'public': '../public/',
  'paginate': {
    'default': 10,
    'max': 50
  },
  'postgres': {
    'client': 'pg',
    'connection': process.env.CONNECTION
  },
  'authentication': {
    'secret': process.env.SECRET,
    'strategies': [
      'jwt',
      'local'
    ],
    'path': '/authentication',
    'service': 'users',
    'jwt': {
      'header': {
        'type': 'access'
      },
      'audience': 'https://yourdomain.com',
      'subject': 'anonymous',
      'issuer': 'feathers',
      'algorithm': 'HS256',
      'expiresIn': '1d'
    },
    'local': {
      'entity': 'user',
      'usernameField': 'email',
      'passwordField': 'password'
    }
  }
};
