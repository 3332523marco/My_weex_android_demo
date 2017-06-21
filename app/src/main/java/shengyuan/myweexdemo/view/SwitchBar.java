package shengyuan.myweexdemo.view;

import android.content.Context;
import android.text.method.LinkMovementMethod;
import android.widget.Switch;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * Created by Marco on 17/6/21.
 */
public class SwitchBar extends WXComponent<Switch> {

    public SwitchBar(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent, isLazy);
    }

    @Override
    protected Switch initComponentHostView(Context context) {
        Switch view = new Switch(context);
        view.setMovementMethod(LinkMovementMethod.getInstance());
        return view;
    }

    @WXComponentProp(name = "tel")
    public void setTelLink(String tel){

    }
}