const { goto, below, write, click, intercept,text,screenshot,waitFor,openBrowser } = require('taiko');
// Insert step text below as first parameter
const assert = require("assert");
beforeSuite(async () => {
	await openBrowser({ headless: false })
});
step("Goto GitHub Page", async function() {
	await goto("https://github.com/login");
});

step("Enter the username and password", async function() {
	await write("arunk2493",below("Username"));
	await click("Password");
	await write("Welcome@24-93");
});

step("Click on Sign in", async function() {
	await click("sign in" ,{ navigationTimeout: 20000 });
});

step("Goto Assigned issues page with Mock Page URL", async function() {
	await intercept("https://github.com/issues/assigned","https://6597d04d-d142-4895-979d-c25b4574382e.mock.pstmn.io/issues/assigned");
	await click("Issues");
	await click("Assigned");
	await goto("https://github.com/issues/assigned",{ navigationTimeout: 300000 });

});

step("Verify Website maintenance using mock", async function() {
	let value = Date.now();
	await screenshot({fullPage:true, path : "/Users/arunkumaraswamy/Documents/projects/Study/Gauge/GaugeSample2/ScreenShots/Screenshot-"+value+".png"});
	await waitFor(5000);
	await text("Page Under Construction").exists();

});




