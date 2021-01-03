const { DataSource } = require('apollo-datasource');
const firebase = require('firebase');

class UserAPI extends DataSource {

  initialize(config) {
    this.context = config.context;
  }
  async createUser({ email: emailArg, password } = {}) {
    const email = this.context && this.context.user ? this.context.user.email : emailArg;

    const results = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = await results.user;
    firebase.database().ref('users/' + user.userId).set({
      username: user.name,
      email: email
    })
    return user;
  }

  async loginUser({email: emailArg, password} = {}) {
    const email = this.context && this.context.user ? this.context.user.email : emailArg;

    const results = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = await results.user;
    
    return user;
  }
}

module.exports = UserAPI;