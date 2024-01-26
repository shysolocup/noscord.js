const UserService = require('../index.js');


UserService.newF("avatarUrl", function(user, dynamic) {
    return ((user.raw) ? user.raw : user) .displayAvatarURL(dynamic);
});
