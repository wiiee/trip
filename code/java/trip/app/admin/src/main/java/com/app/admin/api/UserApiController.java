package com.app.admin.api;

import com.app.core.model.UserModel;
import com.domain.entity.user.User;
import com.domain.service.UserService;
import com.domain.service.base.ServiceResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by wiiee on 9/17/2017.
 */
@RestController
@RequestMapping("/api/user")
public class UserApiController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/logIn", method = RequestMethod.POST)
    public ServiceResult logIn(@RequestBody UserModel model) {
        if(model == null){
            return new ServiceResult(false, "Bad request");
        }

        return userService.logIn(new User(model.getId(), model.getPassword()));
    }

    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
    public ServiceResult signUp(@RequestBody UserModel model) {
        if(model == null){
            return new ServiceResult(false, "Bad request");
        }

        return userService.signUp(new User(model.getId(), model.getPassword()));
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public List<User> test() {
        return userService.test();
    }
}
