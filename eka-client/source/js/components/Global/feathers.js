import io from 'socket.io-client';
import rest from 'feathers-rest/client';
import superagent from 'superagent';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';

// const socket = io('http://localhost:3030');
const client = feathers();

client.configure(hooks());
// client.configure(socketio(socket));
client.configure(rest('http://localhost:3030').superagent(superagent));
client.configure(authentication({
  storage: window.localStorage,
}));

export default client;
