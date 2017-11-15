/*
 * Link Model
 */
 
const author = require("./author.js");

module.exports = {
    'model': {
        'link': {
            'id': 'http://www.knora.org/ontology/0108#Link',
            'properties': {
                'url': 'http://www.knora.org/ontology/0108#hasUrl',
                'author': ['http://www.knora.org/ontology/0108#linkHasAuthor', author.model.author],
            }
        }
    }
};