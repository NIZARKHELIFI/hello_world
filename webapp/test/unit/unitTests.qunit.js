/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"democom/demo_hello/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
