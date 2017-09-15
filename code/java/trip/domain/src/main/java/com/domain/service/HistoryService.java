package com.domain.service;

import com.domain.service.base.BaseService;
import com.platform.context.IContextRepository;
import com.platform.data.history.History;
import com.platform.data.history.IHistoryService;
import com.platform.log.LogItem;
import com.platform.log.LogSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * Created by wiiee on 9/1/2017.
 */
@Component
public class HistoryService extends BaseService<History, String> implements IHistoryService {
    @Autowired
    private IContextRepository contextRepository;

    @Autowired
    private LogSender logSender;

    @Autowired
    public HistoryService(MongoRepository<History, String> repository) {
        super(repository);
    }

    @PostConstruct
    public void init(){
        _setContextRepository(contextRepository);
        _setLogSender(logSender);
    }

    @Override
    public synchronized void process(LogItem item) {
        switch (item.getHistoryInfo().getType()) {
            case Create:
                create(new History(item.getId(), item.getHistoryInfo()));
                break;
            case Update:
            case Delete:
                History history = get(item.getId());
                history.addHistoryInfo(item.getHistoryInfo());
                update(history);
                break;
            default:
                break;
        }
    }
}
