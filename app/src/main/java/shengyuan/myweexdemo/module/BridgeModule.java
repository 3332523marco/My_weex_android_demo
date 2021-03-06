package shengyuan.myweexdemo.module;

import android.util.Log;
import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.util.HashMap;
import java.util.Map;

import de.greenrobot.event.EventBus;
import shengyuan.myweexdemo.eventbus.EventCenter;

/**
 * Created by Marco on 17/6/6.
 */
public class BridgeModule extends WXModule {

    public static final String TAG = BridgeModule.class.getSimpleName();

    @JSMethod
    public void printLog(String str){
        Toast.makeText(mWXSDKInstance.getContext(), str, Toast.LENGTH_SHORT).show();
    }

    /*****jscallback*****/
    @JSMethod
    public void printLogs(String str, JSCallback callback){
        Toast.makeText(mWXSDKInstance.getContext(), str, Toast.LENGTH_SHORT).show();
        Map<String, Object> map = new HashMap<>();
        map.put("test", "my");
        callback.invokeAndKeepAlive(map);
        //callback.invoke(map);
    }

    @JSMethod
    public void log(String str){
        Log.e(TAG, str);
    }

    @JSMethod(uiThread = true) //true为异步  false为同步
    public void events(String str){
        Log.i(TAG,"events coming   "+str);
      EventBus.getDefault().post(new EventCenter(1, str));
    }
}