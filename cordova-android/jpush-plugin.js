var onOpenNotification = function(event) {
    try {
        var alertContent;
        if (device.platform == "Android") {
            alertContent = event.alert;
            var addon = getAndroidExtra(getExtra(event));
            addon.action && onHasAction(addon.action);
        } else {
            alertContent = event.aps.alert;
        }
        console.log("open Notification:" + alertContent);

    } catch (exception) {
        console.log("JPushPlugin:onOpenNotification" + exception);
    }
};

var onHasAction = function(action) {
    window.location.href = action;
}

var getExtra = function(event) {
    return event.extras;
}

var getAndroidExtra = function(extras) {
    return extras["cn.jpush.android.EXTRA"];
}


if (APP.isAPP()) {
    document.addEventListener("jpush.openNotification",onOpenNotification,false);
} else {
};