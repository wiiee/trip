package com.domain.service.base;

/**
 * Created by wiiee on 9/17/2017.
 */
public class ServiceResult {
    private boolean successful;
    private String msg;

    public ServiceResult(boolean successful, String msg) {
        this.successful = successful;
        this.msg = msg;
    }

    public boolean isSuccessful() {
        return successful;
    }

    public void setSuccessful(boolean successful) {
        successful = successful;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}