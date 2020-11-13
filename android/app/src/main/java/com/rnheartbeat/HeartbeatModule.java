package com.rnheartbeat;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class HeartbeatModule extends ReactContextBaseJavaModule {

    public static final String REACT_CLASS = "Heartbeat";
    public static ReactApplicationContext reactContext;

    public HeartbeatModule(@NonNull ReactApplicationContext reactContext){
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void startService(){
        this.reactContext.startService(new Intent(this.reactContext,HeartbeatService.class));
    }

    @ReactMethod
    public void stopService(){
        this.reactContext.stopService(new Intent(this.reactContext,HeartbeatService.class));
    }
}