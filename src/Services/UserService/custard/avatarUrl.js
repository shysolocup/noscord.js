const UserService = require('../index.js');


UserService.newF("avatarUrl", function(user, dynamic) {
    return user.displayAvatarURL(dynamic);
});
