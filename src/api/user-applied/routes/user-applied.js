'use strict';

/**
 * user-applied router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-applied.user-applied');
