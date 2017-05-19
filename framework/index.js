const $$route = require('../src/route.js');
const $$memoryRouter = require('./memory-router.js');

$$memoryRouter.config({
    wrapper: document.getElementById('app'),
    routeList: $$route
});
$$memoryRouter.run();


console.log(1);


var fn = function () {
    return new Promise(function (resolve) {
        const Vue = require('./vue.js');
        let C = Vue.extend({
          template: '<p>{{firstName}}</p>',
          data: function () {
            return {
              firstName: 'CCC'
            }
          }
        });
        let Profile = Vue.extend({
          template: '<p>{{firstName}} {{lastName}} aka {{alias}} <module-b /></p>',
          data: function () {
            return {
              firstName: 'Walter',
              lastName: 'White',
              alias: 'Heisenberg'
            }
          },
          components: {
            'module-b': C
          }
        });
        
        resolve(Profile);
    });
};

fn().then(function (Profile) {
    new Profile().$mount('#app')
});
