import {init, runScript} from './lib/scraper';

// credentials
const credentials = {
<<<<<<< HEAD
    username: '',
    password: ''
};
=======
    username: 'sums.co',
    password: 'niubige101'
}
>>>>>>> 2b5c6a95c45b58aeb8d1ca0e4e19ba4d3d0ea931

// search options
const searchOptions = {
    name: "wang",
    numOfCharacters: 2,
    suffix: false
};

// time between each page load, default 10 seconds.
const timeInterval = 10000;

// Main script
init(searchOptions, function() {
    runScript(credentials, timeInterval)
});

