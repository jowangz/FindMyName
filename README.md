# FindMyName - for Instagram


FindMyName will check all avaiable prefix and suffix of your Instagram name. You will just need to provide a Instagram name and a number of characters your want to check for the affix or suffix.
 

### Installation

  - [Node.js] installation is required
  - [Chrome] installation is required
  - [ChromeDriver] installation is required, the defualt Chrome Driver included in this repository is v.76, download the matching verison for your Chrome.

```sh
$ cd findmyname
$ npm install -d
```

#### Configuration & Run

  - Open index.js in your editor.
  - Put in your Instagram username and password (recommend using a spare account).
  - Configurate your search options. Recommend going from 2 characters for fewer search. Always have a higher time interval. (use at your own risk!)
  - If you want to search suffix change it to true.
  - To run script:
```sh
$ npm run script
```

### Tech

The scripe use a headless chrome

* [selenium-webdriver] - Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation.
* [lowdb] - Small JSON database for Node, Electron and the browser. Powered by Lodash. ⚡️
* [esm] - The brilliantly simple, babel-less, bundle-less ECMAScript module loader.
* [ChromeDriver] WebDriver is an open source tool for automated testing of webapps across many browsers. 

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

License
----

MIT


** For education purpose **


[esm]: <https://github.com/standard-things/esm>
[lowdb]: <https://github.com/typicode/lowdb>
[selenium-webdriver]: <https://github.com/SeleniumHQ/selenium>
[Chrome]: <https://github.com/standard-things/esm>
[ChromeDriver]: <https://chromedriver.chromium.org/downloads>
[Node.js]: <https://nodejs.org/en/>
