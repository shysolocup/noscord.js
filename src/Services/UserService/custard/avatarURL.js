const UserService = require('../index.js');


UserService.newF("avatarURL", function(user) {
    return user.displayAvatarURL(settings.dynamic);
});
