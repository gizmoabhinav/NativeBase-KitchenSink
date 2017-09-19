package com.EduSync;

import android.app.Activity;
import android.widget.Toast;

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

    private MobileServiceClient mClient;
    private Activity mActivity;

    public ReactBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mActivity = getCurrentActivity();
        try {
            mClient = new MobileServiceClient(
                    "https://edusync.azurewebsites.net",
                    getReactApplicationContext()
            );
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
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
    public void authenticate(final String username, final String password) {
        try {
            List<Credentials> table = mClient.getTable(Credentials.class).execute().get();
            Credentials user = mClient.getTable(Credentials.class).where().field("username").eq(username).execute().get().get(0);
            if(user.idkey == password) {
                Toast.makeText(getCurrentActivity(),"welcome" + user.userrole, 10).show();
            } else {
                Toast.makeText(getCurrentActivity(),"retry", 10).show();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        } catch (MobileServiceException e) {
            e.printStackTrace();
        }
    }



    class Credentials {
        public Credentials(String username, String key, String role) {
            this.username = username;
            this.idkey = key;
            this.userrole = role;
        }
        public String Id;
        public String username;
        public String idkey;
        public String userrole;
    }
}
