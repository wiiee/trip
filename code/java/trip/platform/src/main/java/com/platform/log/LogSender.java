package com.platform.log;

import com.platform.config.LogMqConfig;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by wiiee on 9/10/2017.
 */
@Component
public class LogSender {
    private final RabbitTemplate rabbitTemplate;
    private final LogReceiver logReceiver;

    @Autowired
    public LogSender(LogReceiver logReceiver, RabbitTemplate rabbitTemplate) {
        this.logReceiver = logReceiver;
        this.rabbitTemplate = rabbitTemplate;
    }

    public void send(LogItem item){
        rabbitTemplate.convertAndSend(LogMqConfig.QUEUE_NAME, item);
    }
}
