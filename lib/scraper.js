import {Builder, By, Key, until} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome'
import {
    getNameList,
    sleep
} from './util';
import db from './db';
import readline from 'readline';


export async function init (searchOptions, callback) {
    let name = searchOptions.name
    let n = searchOptions.numOfCharacters
    let nameList = [];

    if (name === db.get('currentTask').value()) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        if (nameList.length == 0) {
            const question = () => {
                return new Promise((resolve, reject) => {
                    rl.question('you have a task with name' + name + ' running, do you want to continue? y/n', (answer) => {
                        if (answer.trim() == 'y') {
                            db.set('currentTask', name).write()
                            callback()
                            resolve()
                        } else if (answer.trim() == 'n') {
                            db.set('count', 0).set('unavailableNames', []).set('currentTask', name).set('availableNames', []).set('nameList', getNameList(name, n)).write();
                            callback()
                            resolve()
                        } else {
                            console.log("Please Enetr y/n")
                            reject()
                        }
                    })
                }).catch(()=> {question()})
            }
            await question()        }
        } else {
        db.set('count', 0).set('nameList', getNameList(name, n)).set('unavailableNames', []).set('availableNames', []).set('currentTask', name).write();
        callback()
    }

}


export async function runScript(credentials, timeInterval) {
    // check name and password
    if (credentials.username == "") {
        throw "please enter a username"
    }
    if (credentials.password == "") {
        throw "please enter a password"
    }

    // the chrome options object
    const options = new chrome.Options();
    options.headless();
    options.set('chromeOptions', {
        args: ['--disable-gpu']
    });

    let i = db.get('count').value();
    const nameList = db.get('nameList').value();
    const TEN_SECOND = 10000
    const gapTime = timeInterval ? timeInterval : TEN_SECOND
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    await driver.get('https://www.instagram.com/accounts/login/');
    await driver.manage().setTimeouts({implicit: TEN_SECOND, pageLoad: gapTime})

    // log in user
    await driver.findElement(By.name('username')).sendKeys(credentials.username)
    await driver.findElement(By.name('password')).sendKeys(credentials.password)
    await driver.findElement(By.className('_0mzm- sqdOP  L3NKy       ')).click()
    console.log('logged in')

    // wait until page loads
    await driver.wait(until.elementLocated(By.className('glyphsSpriteUser__outline__24__grey_9 u-__7')), gapTime)
    await driver.findElement(By.className('glyphsSpriteUser__outline__24__grey_9 u-__7')).click()

    while (i < nameList.length) {
        await sleep(gapTime);
            driver.navigate().to("https://www.instagram.com/" + nameList[i])
            const title = await driver.findElement(By.tagName('title')).getAttribute("innerText")
            console.log(title)
            if (title.indexOf('Page Not Found') > -1) {
                console.log("page is available")
                console.log(nameList[i])
                db.get('availableNames').push(nameList[i]).write();

            } else {
                console.log("not available")
                db.get('unavailableNames').push(nameList[i]).write();

            }
        i ++
        db.update('count', n=>n+1).write()
    }
};
