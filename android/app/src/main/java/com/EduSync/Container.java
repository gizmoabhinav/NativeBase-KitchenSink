package com.EduSync;

import android.content.Context;

import com.microsoft.windowsazure.mobileservices.MobileServiceClient;

import java.net.MalformedURLException;

/**
 * Created by abmukh on 9/21/2017.
 */

public class Container {
    private MobileServiceClient mClient;
    private static Container mContainer;

    public static Container getInstance() {
        if(mContainer == null) {
            mContainer = new Container();
        }
        return mContainer;
    }

    public MobileServiceClient getAzureMobileClient(Context context) {
        if(mClient == null) {
            try {
                mClient = new MobileServiceClient(
                        "https://edusync.azurewebsites.net",
                        context
                );
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
        return mClient;
    }
}
