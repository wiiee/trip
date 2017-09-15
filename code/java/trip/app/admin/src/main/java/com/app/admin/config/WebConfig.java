package com.app.admin.config;

import com.app.admin.interceptor.ContextInterceptor;
import com.app.admin.interceptor.ThymeleafInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by wang.na on 2016/11/8.
 */
@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {
    @Autowired
    private ContextInterceptor contextInterceptor;

    @Autowired
    private ThymeleafInterceptor thymeleafInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(contextInterceptor);
        registry.addInterceptor(thymeleafInterceptor);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/featureConfig").setViewName("pages/feature/index");
        registry.addViewController("/").setViewName("home");
    }
}