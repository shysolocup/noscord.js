const UserService = require('../index.js');


UserService.newF("bannerUrl", function(user, dynamic) {
    return ((user.raw) ? user.raw : user) .bannerURL(dynamic);
});
