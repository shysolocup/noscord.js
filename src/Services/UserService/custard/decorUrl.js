const UserService = require('../index.js');


UserService.newF("decorUrl", function(user, dynamic) {
    return ((user.raw) ? user.raw : user) .avatarDecorationURL(dynamic);
});
