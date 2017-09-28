package com.EduSync;

import android.app.Activity;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.microsoft.windowsazure.mobileservices.*;
import com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse;
import com.microsoft.windowsazure.mobileservices.table.MobileServiceTable;
import com.microsoft.windowsazure.mobileservices.table.TableOperationCallback;

import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

/**
 * Created by abmukh on 9/17/2017.
 */

public class ReactBridgeModule extends ReactContextBaseJavaModule {

    private Activity mActivity;
    private MobileServiceClient mClient;

    public ReactBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mActivity = getCurrentActivity();
        mClient = Container.getInstance().getAzureMobileClient(getReactApplicationContext());
    }

    @Override
    public String getName() {
        return "JavaBridge";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        return constants;
    }

    @ReactMethod
    public void getUserId(Callback successCallback) {
        successCallback.invoke(mClient.getCurrentUser().getUserId());
    }

    @ReactMethod
    public void setUserId(String userid) {
        Log.d("",userid);
    }


}
