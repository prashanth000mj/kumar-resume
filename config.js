'use strict';

requirejs.config({
    baseUrl: './',
    paths: {
        react: 'node_modules/react/react'
    }
});

requirejs(['index']);