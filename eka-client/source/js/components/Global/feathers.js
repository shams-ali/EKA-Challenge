import rest from 'feathers-rest/client';
import superagent from 'superagent';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication-client';

const client = feathers();

client.configure(hooks());
client.configure(rest('/api').superagent(superagent));
client.configure(authentication({
  storage: window.localStorage,
}));

export default client;
