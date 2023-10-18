const UserService = require('../index.js');


UserService.newF("decorUrl", function(user, dynamic) {
    return user.avatarDecorationURL(dynamic);
});
