import {init, runScript} from './lib/scraper'

// credentials
const credentials = {
    username: '',
    password: ''
}

// search options
const searchOptions = {
    name: "wang",
    numOfCharacters: 2,
    suffix: false
}

// time between each page load, default 10 seconds.
const timeInterval = 10000

init(searchOptions, function() {
    runScript(credentials, timeInterval)
});

