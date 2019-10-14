var article = {
    cateGet: function(options) {
        $.ajax({
            url: ARTICLE_CATE_GET,
            success: options.callback
        })
    },
    cateAdd: function(options) {
        $.ajax({
            type: 'post',
            url: ARTICLE_CATE_ADD,
            data: options.data,
            success: options.callback
        })
    },
    cateEdit: function(options) {
        $.ajax({
            type: 'post',
            url: ARTICLE_CATE_EDIT,
            data: options.data,
            success: options.callback
        })
    },
    cateDel: function(options) {
        $.ajax({
            type: 'post',
            url: ARTICLE_CATE_DEL,
            data: options.data,
            success: options.callback
        })
    }
}