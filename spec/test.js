const Jest = require('jest');
const puppeteer = require('puppeteer');
const axios = require('axios');

describe('the first destination has correct name', () => {
    test('initial test is correct', () => {
        axios.get('/getData/0')
            .then((response) => {
                expect(response.data.name).toEqual('Burundi')
            })
    });
});

describe('first destination should not equal "Paris"', () => {
    test('second test is correct', () => {
        axios.get('/getData/0')
            .then((response) => {
                expect(response.data.name).toEqual('Paris')
            })
    });
});