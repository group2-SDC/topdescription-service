const Jest = require('jest');
const puppeteer = require('puppeteer');
const axios = require('axios');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();

describe('the firt destination has correct name', () => {
    test('initial test is correct', () => {
        axios.get('/getData')
            .then((response) => {
                expect(response.data[0].name).toEqual('Sudan')
            })
            .catch((error) => {
                console.log(error);
        })
    });
});