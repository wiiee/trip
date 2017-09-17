package com.domain.service.base;

/**
 * Created by wiiee on 9/17/2017.
 */
public class ServiceResult {
    private boolean isSuccessful;
    private String msg;

    public ServiceResult(boolean isSuccessful, String msg) {
        this.isSuccessful = isSuccessful;
        this.msg = msg;
    }

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
