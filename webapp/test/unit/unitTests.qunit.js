/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require([
    "nwproductdata02/test/unit/AllTests"
], function () {
    "use strict";

    QUnit.start();
});