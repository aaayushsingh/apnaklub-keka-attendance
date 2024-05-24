const puppeteer = require('puppeteer'); // v22.0.0 or later
// load .env
const dotenv = require('dotenv').config()

// used to setup headless vs non headless version
// to see the code in action set this as true
const DEBUG_MODE = process.env.DEBUG_MODE === 'true';

// user creds loaded from env
const user_email = process.env.USER_EMAIL;
const user_password = process.env.USER_PASSWORD;

(async () => {
    const browser = await puppeteer.launch({headless: !DEBUG_MODE});
    const page = await browser.newPage();
    const timeout = 15000;
    page.setDefaultTimeout(timeout);
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://apnaklub.keka.com/', ['geolocation']);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1724,
            height: 1132
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('chrome://newtab/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://apnaklub.keka.com/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('div.login-content > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) div'),
            targetPage.locator('::-p-xpath(/html/body/div/div[2]/div[1]/div[2]/div/div[1]/button/div)'),
            targetPage.locator(':scope >>> div.login-content > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) div'),
            targetPage.locator('::-p-aria(Google) >>>> ::-p-aria([role=\\"generic\\"])')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 34,
                y: 0,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#identifierId'),
            targetPage.locator('::-p-xpath(//*[@id=\\"identifierId\\"])'),
            targetPage.locator(':scope >>> #identifierId'),
            targetPage.locator('::-p-aria(Email or phone)')
        ])
            .setTimeout(timeout)
            .fill(user_email);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.TNTaPb span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"identifierNext\\"]/div/button/span)'),
            targetPage.locator(':scope >>> div.TNTaPb span'),
            targetPage.locator('::-p-text(Next)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.734375,
                y: 8,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.YqLCIe input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"]/div[1]/div/div[1]/input)'),
            targetPage.locator(':scope >>> div.YqLCIe input'),
            targetPage.locator('::-p-aria(Enter your password)')
        ])
            .setTimeout(timeout)
            .fill(user_password);
    }
    // for some reason show password breaks in headless mode
    // {
    //     const targetPage = page;
    //     await puppeteer.Locator.race([
    //         targetPage.locator('div.v8aRxf input'),
    //         targetPage.locator('::-p-xpath(//*[@id=\\"yDmH0d\\"]/c-wiz/div/div[2]/div/div/div[1]/form/span/section[2]/div/div/div[1]/div[3]/div/div[1]/div/div/div[1]/div/div/input)'),
    //         targetPage.locator(':scope >>> div.v8aRxf input'),
    //         targetPage.locator('::-p-aria(Show password)')
    //     ])
    //         .setTimeout(timeout)
    //         .click({
    //           offset: {
    //             x: 18,
    //             y: 32.75,
    //           },
    //         });
    // }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('div.TNTaPb span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"passwordNext\\"]/div/button/span)'),
            targetPage.locator(':scope >>> div.TNTaPb span'),
            targetPage.locator('::-p-text(Next)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 24.734375,
                y: 2.25,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#accordion > li:nth-of-type(2) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"accordion\\"]/li[2]/a)'),
            targetPage.locator(':scope >>> #accordion > li:nth-of-type(2) > a'),
            targetPage.locator('::-p-aria( Me)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 30.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('employee-me li:nth-of-type(2) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"preload\\"]/xhr-app-root/div/employee-me/div/ul/li[2]/a)'),
            targetPage.locator(':scope >>> employee-me li:nth-of-type(2) > a'),
            targetPage.locator('::-p-aria(ATTENDANCE)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.6875,
                y: 15.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('employee-attendance-stats div:nth-of-type(1) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"preload\\"]/xhr-app-root/div/employee-me/div/employee-attendance/div/div/div/div/employee-attendance-stats/div/div[3]/employee-attendance-request-actions/div/div/div/div/div[2]/div/div[1]/a)'),
            targetPage.locator(':scope >>> employee-attendance-stats div:nth-of-type(1) > a'),
            targetPage.locator('::-p-aria(Web Clock-In)'),
            targetPage.locator('::-p-text(Web Clock-In)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 100,
              offset: {
                x: 37.671875,
                y: 6,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.btn-primary'),
            targetPage.locator('::-p-xpath(/html/body/modal-container/div[2]/div/xhr-confirm-dialog/div[3]/button[2])'),
            targetPage.locator(':scope >>> button.btn-primary'),
            targetPage.locator('::-p-aria(Confirm)'),
            targetPage.locator('::-p-text(Confirm)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 50,
              offset: {
                x: 56.78125,
                y: 7,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
