package com.app.core.interceptor;

import com.app.core.context.WebContext;
import com.platform.context.IContextRepository;
import com.platform.log.EsItem;
import com.platform.log.EsLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.NamedThreadLocal;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * Created by wiiee on 3/5/2017.
 */
@Component
public class ContextInterceptor extends HandlerInterceptorAdapter {
    private IContextRepository contextRepository;
    private EsLogger esLogger;

    private ThreadLocal<Long> startTime;

    @Autowired
    public ContextInterceptor(IContextRepository contextRepository, EsLogger esLogger) {
        this.contextRepository = contextRepository;
        this.esLogger = esLogger;
        startTime = new NamedThreadLocal<>("ContextInterceptor.startTime");
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        startTime.set(System.currentTimeMillis());
        contextRepository.setContext(
                new WebContext(
                        request.getRequestedSessionId(),
                        UUID.randomUUID().toString(),
                        request.getRequestURI(),
                        request.getRemoteAddr()));
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        esLogger.log(new EsItem(System.currentTimeMillis() - startTime.get()), contextRepository.getCurrent());
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
