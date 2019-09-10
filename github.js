const { openBrowser, goto, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("www.github.com");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
