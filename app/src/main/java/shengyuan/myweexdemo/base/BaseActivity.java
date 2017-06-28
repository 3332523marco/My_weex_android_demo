package shengyuan.myweexdemo.base;


import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;

import de.greenrobot.event.EventBus;
import de.greenrobot.event.Subscribe;
import de.greenrobot.event.ThreadMode;
import shengyuan.myweexdemo.eventbus.EventCenter;

/**
 * Created by Marco on 17/6/9.
 */
public abstract class BaseActivity extends AppCompatActivity implements IWXRenderListener {

    protected Context mContext;

    WXSDKInstance mWXSDKInstance;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        mContext = this;
//        initViewsAndEvents();
    }

    @Subscribe(threadMode = ThreadMode.MainThread)
    public void onEventBus(EventCenter eventCenter) {
        if (null != eventCenter) {
            onEventComing(eventCenter);
        }
    }

//    /**
//     * bind layout resource file
//     *
//     * @return id of layout resource
//     */
//    protected abstract int getContentViewLayoutID();
//
//    /**
//     * init all views and add events
//     */
//    protected abstract void initViewsAndEvents();

    /**
     * when event comming
     *
     * @param eventCenter
     */
    protected abstract void onEventComing(EventCenter eventCenter);


    @Override
    public void setContentView(int layoutResID) {
        super.setContentView(layoutResID);
        EventBus.getDefault().register(this);
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        EventBus.getDefault().unregister(this);
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
    }
}