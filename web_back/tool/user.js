var user = {
    login: function(options) {
        $.ajax({
            type: 'post',
            url: URL_LOGIN,
            data: options.data,
            success: options.callback
        })
    },
    out: function(options) {
        $.ajax({
            type: 'post',
            url: URL_LOGOUT,
            success: options.callback
        })
    },
    getUser: function(options) {
        $.ajax({
            url: URL_GET_USER,
            success: options.callback
        })
    },
    info: function(options) {
        $.ajax({
            url: URL_USER_INFO,
            success: options.callback
        })
    },
    edit: function(options) {
        $.ajax({
            type: 'post',
            url: URL_EDIT,
            data: options.data,
            contentType: false,
            processData: false,
            success: options.callback
        })
    }

}