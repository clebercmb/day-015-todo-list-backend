const todolistRoutes = require('./todolist_routes');

module.exports = function(app, db) {  
    todolistRoutes(app, db);  // Other route groups could go here, in the future
};