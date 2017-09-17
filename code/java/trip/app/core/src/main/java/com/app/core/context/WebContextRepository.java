package com.app.core.context;

import com.platform.context.BaseContextRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by wang.na on 2017/03/20.
 */
@Repository
public class WebContextRepository extends BaseContextRepository {
    public WebContextRepository() {
        super("WebContextRepository");
    }
}
