'use strict';

var extend = require('extend');

module.exports = extend({
        game: require('./game'),
        sprite: require('./sprite'),
        group: require('./group'),
        animation: require('./animation'),
        cursors: require('./cursors'),
        collides: require('./collides'),
        overlaps: require('./overlaps'),
        text: require('./text'),
        button: require('./button'),
        graphics: require('./graphics/graphics')
    },
    require('./graphics/renderers')
);