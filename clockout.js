const puppeteer = require('puppeteer'); // v22.0.0 or later
// load .env
const dotenv = require('dotenv').config()

// used to setup headless vs non headless version
// to see the code in action set this as true
const DEBUG_MODE = true;

// user creds loaded from env
const user_email = process.env.user_email;
const user_password = process.env.user_password;

(async () => {
    const browser = await puppeteer.launch({headless: !DEBUG_MODE});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://apnaklub.keka.com/', ['geolocation']);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1724,
            height: 1166
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://app.keka.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3D987cc971-fc22-4454-99f9-16c078fa7ff6%26state%3DWU5HZFM1QWtWdHZsRHN2U0l0d1Raai1KOU1FbU1sR0ZOcFRsczAwZkFBaVFR%26redirect_uri%3Dhttps%253A%252F%252Fapnaklub.keka.com%26scope%3Dopenid%2520offline_access%2520kekahr.api%2520hiro.api%26code_challenge%3Dz5LN8iJA3-D_GKDO230EBqO5pI22kKorEJ9JdWKbDLo%26code_challenge_method%3DS256%26nonce%3DWU5HZFM1QWtWdHZsRHN2U0l0d1Raai1KOU1FbU1sR0ZOcFRsczAwZkFBaVFR');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(1) > button'),
            targetPage.locator('::-p-xpath(/html/body/div/div[2]/div[1]/div[2]/div/div[1]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > button'),
            targetPage.locator('::-p-aria(Google)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 68,
                y: 6,
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
                x: 0.734375,
                y: 1,
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
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.v8aRxf input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"yDmH0d\\"]/c-wiz/div/div[2]/div/div/div[1]/form/span/section[2]/div/div/div[1]/div[3]/div/div[1]/div/div/div[1]/div/div/input)'),
            targetPage.locator(':scope >>> div.v8aRxf input'),
            targetPage.locator('::-p-aria(Show password)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 34,
                y: 19.75,
              },
            });
    }
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
                x: 10.734375,
                y: 13.25,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('span.ki-user'),
            targetPage.locator('::-p-xpath(//*[@id=\\"accordion\\"]/li[2]/a/span[1])'),
            targetPage.locator(':scope >>> span.ki-user')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1,
                y: 10.5,
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
              delay: 50,
              offset: {
                x: 20.6875,
                y: 10.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('employee-attendance-stats button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"preload\\"]/xhr-app-root/div/employee-me/div/employee-attendance/div/div/div/div/employee-attendance-stats/div/div[3]/employee-attendance-request-actions/div/div/div/div/div[2]/div/div[1]/div[1]/button)'),
            targetPage.locator(':scope >>> employee-attendance-stats button'),
            targetPage.locator('::-p-aria(Web Clock-out)'),
            targetPage.locator('::-p-text(Web Clock-out)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 100,
              offset: {
                x: 28.671875,
                y: 21,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.btn-danger'),
            targetPage.locator('::-p-xpath(//*[@id=\\"preload\\"]/xhr-app-root/div/employee-me/div/employee-attendance/div/div/div/div/employee-attendance-stats/div/div[3]/employee-attendance-request-actions/div/div/div/div/div[2]/div/div[1]/div[1]/button[1])'),
            targetPage.locator(':scope >>> button.btn-danger'),
            targetPage.locator('::-p-aria(Clock-out)'),
            targetPage.locator('::-p-text(Clock-out)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 50,
              offset: {
                x: 28.671875,
                y: 21,
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
                x: 49.78125,
                y: 14,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
