package com.app.admin.ui;

/**
 * Created by wang.na on 2016/12/26.
 */
public class Statistic {
    private String name;

    private long cacheHits;
    private long cacheMisses;
    private long cacheGets;
    private long cachePuts;
    private long cacheRemovals;
    private long cacheEvictions;

    private float cacheHitPercentage;
    private float cacheMissPercentage;
    private float averageGetTime;
    private float averagePutTime;
    private float averageRemoveTime;

    public Statistic(String name, long cacheHits, long cacheMisses, long cacheGets, long cachePuts, long cacheRemovals, long cacheEvictions, float cacheHitPercentage, float cacheMissPercentage, float averageGetTime, float averagePutTime, float averageRemoveTime) {
        this.name = name;
        this.cacheHits = cacheHits;
        this.cacheMisses = cacheMisses;
        this.cacheGets = cacheGets;
        this.cachePuts = cachePuts;
        this.cacheRemovals = cacheRemovals;
        this.cacheEvictions = cacheEvictions;
        this.cacheHitPercentage = cacheHitPercentage;
        this.cacheMissPercentage = cacheMissPercentage;
        this.averageGetTime = averageGetTime;
        this.averagePutTime = averagePutTime;
        this.averageRemoveTime = averageRemoveTime;
    }

    public String getName() {
        return name;
    }

    public long getCacheHits() {
        return cacheHits;
    }

    public long getCacheMisses() {
        return cacheMisses;
    }

    public long getCacheGets() {
        return cacheGets;
    }

    public long getCachePuts() {
        return cachePuts;
    }

    public long getCacheRemovals() {
        return cacheRemovals;
    }

    public long getCacheEvictions() {
        return cacheEvictions;
    }

    public float getCacheHitPercentage() {
        return cacheHitPercentage;
    }

    public float getCacheMissPercentage() {
        return cacheMissPercentage;
    }

    public float getAverageGetTime() {
        return averageGetTime;
    }

    public float getAveragePutTime() {
        return averagePutTime;
    }

    public float getAverageRemoveTime() {
        return averageRemoveTime;
    }
}
