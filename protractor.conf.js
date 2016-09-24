exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/e2e/*Test.js'],
    baseUrl: 'http://localhost:9001'
};
