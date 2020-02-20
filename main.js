//import kek from './reg.hbs';

const Handlebars = require("handlebars");
const template = Handlebars.compile('{{name}}');
const testTemplate = template({name: "Nils"})
let topBar = document.createElement("div");
// topBar.innerHTML = kek({name: "kek"});
console.log(testTemplate)
topBar.innerHTML = testTemplate
const app = document.getElementById('app');
app.appendChild(topBar)
