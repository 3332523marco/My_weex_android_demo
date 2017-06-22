package shengyuan.myweexdemo.view;

import android.content.Context;
import android.text.method.LinkMovementMethod;
import android.util.Log;
import android.widget.CompoundButton;
import android.widget.Switch;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Marco on 17/6/21.
 */
public class SwitchBar extends WXComponent<Switch> {

    private static final String TAG = SwitchBar.class.getSimpleName();

    public SwitchBar(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent, isLazy);
    }

    static int position;

    @Override
    protected Switch initComponentHostView(Context context) {
        Switch view = new Switch(context);
        view.setMovementMethod(LinkMovementMethod.getInstance());
        final int index = position;
        position++;
        view.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                //通过globalEvent回传信息到vue
                Map<String, Object> params = new HashMap<>();
                params.put("index", index);
                params.put("isChecked", isChecked);
                getInstance().fireGlobalEventCallback("switchEvent", params);
            }
        });
        return view;
    }


    @WXComponentProp(name = "callnative")
    public void callEventComing(String str){
        //vue回传信息到原生
        Log.i(TAG,"hello " +str);
    }
}