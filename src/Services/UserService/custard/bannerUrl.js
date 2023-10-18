const UserService = require('../index.js');


UserService.newF("bannerUrl", function(user, dynamic) {
    return user.bannerURL(dynamic);
});
