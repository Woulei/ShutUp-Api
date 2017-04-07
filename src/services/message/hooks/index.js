'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
    // populate Author
    auth.associateCurrentUser({ as: 'authorId' }),
    auth.associateCurrentUser({ idField: 'name', as: 'author' })
  ],
  update: [
    // rescrict to Author
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ],
  patch: [
    // rescrict to Author
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ],
  remove: [
    // rescrict to Author
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
