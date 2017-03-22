package com.test.openpage.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import com.test.openpage.Main2Activity;
import android.widget.Toast;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.content.Intent;

/**
 * This class echoes a string called from JavaScript.
 */
public class OpenPagePlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("openActivity".equals(action)) {
            // Toast.makeText(cordova.getActivity(), "openActivity", Toast.LENGTH_SHORT).show();
            openActivity();
            callbackContext.success("success");
            return true;
        }
        callbackContext.error("error");
        return false;
    }

    private void openActivity() {
        Intent intent = new Intent(cordova.getActivity(), Main2Activity.class);
        cordova.getActivity().startActivity(intent);
    }

}
