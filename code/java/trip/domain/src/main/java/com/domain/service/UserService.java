package com.domain.service;

import com.domain.entity.geo.Region;
import com.domain.entity.user.User;
import com.domain.service.base.BaseService;
import com.domain.service.base.ServiceResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * Created by wiiee on 9/17/2017.
 */
@Component
public class UserService extends BaseService<User, String> {
    private final static String INVALID_USERNAME = "User name is invalid, please check it.";
    private final static String INVALID_PWD = "Password is invalid, please check it.";
    private final static String USER_ALREADY_EXIST = "User is already exist.";

    @Autowired
    public UserService(MongoRepository<User, String> repository) {
        super(repository);
    }

    public ServiceResult logIn(User user){
        if(user == null || StringUtils.isEmpty(user.getId()) || StringUtils.isEmpty(user.getPassword()))
        {
            return new ServiceResult(false, "用户名或者密码不能为空");
        }

        User dbUser = get(user.getId());

        if (dbUser == null)
        {
            return new ServiceResult(false, INVALID_USERNAME);
        }
        else
        {
            if (dbUser.getPassword().equals(user.getPassword()))
            {
                return new ServiceResult(true, null);
            }
            else
            {
                return new ServiceResult(false, INVALID_PWD);
            }
        }
    }

    public ServiceResult signUp(User user){
        if(user == null || StringUtils.isEmpty(user.getId()) || StringUtils.isEmpty(user.getPassword()))
        {
            return new ServiceResult(false, "用户名或者密码不能为空");
        }

        User dbUser = get(user.getId());

        if (dbUser == null)
        {
            create(user);
            return new ServiceResult(true, null);

            //奖励推荐人
            //if (!string.IsNullOrEmpty(user.RecommendUserId))
            //{
            //    var recommendUser = Get(user.RecommendUserId);

            //    if(recommendUser != null)
            //    {
            //        var preferenceService = ServiceFactory.Instance.GetService<PreferenceService>(ContextUtil.SERVICE_CONTEXT);
            //        preferenceService.AddReward(user.RecommendUserId, RewardType.NewUser, 5);
            //    }
            //}
        }
        else
        {
            return new ServiceResult(false, USER_ALREADY_EXIST);
        }
    }

    public List<User> test(){
        User user = new User(null, "e10adc3949ba59abbe56e057f20f883e");


        Example<User> example = Example.of(user);

        return getAll(example);
    }
}
