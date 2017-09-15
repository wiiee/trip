package com.app.admin.context;

import com.platform.context.BaseContext;

/**
 * Created by wang.na on 2017/03/20.
 */
public class WebContext extends BaseContext {
    public WebContext(String userId, String uuid, String uri, String remoteIp) {
        super(userId, uuid, uri, remoteIp);
    }
}
