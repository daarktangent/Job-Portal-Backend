'use strict';

/**
 * user-applied service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-applied.user-applied');
