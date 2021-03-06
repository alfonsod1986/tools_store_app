'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '$6$6f16fb8e$zyToQTCwCnZqJ.ePKiseLxtZec4B18fVthrWEbWsoxwqTXb0C1fwVtFx88PyYk6MESSh595V.4KWTgxYH7RUz.';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        second_name: user.second_name,
        username: user.username,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };

    return jwt.encode(payload, secret);
};