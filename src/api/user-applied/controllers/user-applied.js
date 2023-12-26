'use strict';

/**
 * user-applied controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-applied.user-applied');
