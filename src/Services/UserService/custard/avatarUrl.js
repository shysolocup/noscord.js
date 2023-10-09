const UserService = require('../index.js');


UserService.newF("avatarUrl", function(user) {
    return user.displayAvatarURL(settings.dynamic);
});
