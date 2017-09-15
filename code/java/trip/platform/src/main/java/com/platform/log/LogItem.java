package com.platform.log;

import com.platform.data.history.HistoryInfo;

/**
 * Created by wiiee on 9/10/2017.
 */
public class LogItem {
    private String id;
    private HistoryInfo historyInfo;

    public LogItem(String id, HistoryInfo historyInfo) {
        this.id = id;
        this.historyInfo = historyInfo;
    }

    public String getId() {
        return id;
    }

    public HistoryInfo getHistoryInfo() {
        return historyInfo;
    }
}
