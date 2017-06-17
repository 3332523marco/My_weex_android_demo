package shengyuan.myweexdemo.view;

import android.text.SpannableString;
import android.text.Spanned;
import android.text.style.URLSpan;
import android.widget.TextView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * Created by Marco on 17/6/6.
 */
public class RichText extends WXComponent {
    public RichText(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent, isLazy);
    }

    @WXComponentProp(name = "tel")
    public void setTelLink(String tel){
        SpannableString spannable=new SpannableString(tel);
        spannable.setSpan(new URLSpan("tel:"+tel),0,tel.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
        ((TextView)getHostView()).setText(spannable);
    }
}