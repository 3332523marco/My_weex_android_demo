package shengyuan.myweexdemo;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import shengyuan.myweexdemo.adapter.ImageAdapter;
import shengyuan.myweexdemo.module.BridgeModule;
import shengyuan.myweexdemo.view.RichText;

/**
 * Created by Marco on 17/6/12.
 */
public class MainApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config=new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this, config);
        try {
            WXSDKEngine.registerModule("bridgeModule", BridgeModule.class);
            WXSDKEngine.registerComponent("richtext", RichText.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
