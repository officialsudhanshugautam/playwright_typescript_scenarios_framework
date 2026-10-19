
import test from "@playwright/test";
import { AsyncLocalStorage } from "node:async_hooks";

//hooks: before(setup) and after(tear down)

//Run ONCE before all tests in the test file:
test.beforeAll(async () => {
    console.log('Before All -- connect to the DB');
    //user creation
    //admin settings
    //uploading test data
});

//Run before each test
test.beforeEach(async () => {
    console.log('Before each -- login to the app');
});

//Run after each test
test.afterEach(async () => {
    console.log('After each -- logout from the app');
});

//Run ONCE after all tests in the test file
test.afterAll(async () => {
    console.log('After all -- disconnect to the DB');
    //delete user
    //reset admin settings
    //delete test data
});

test('title test', async () => {

    console.log('title test');
});

test('home page test', async () => {

    console.log('home page test');
});

test('payment page test', async () => {

    console.log('payment page test');
});

test('cart page test', async () => {

    console.log('cart page test');
});

test('search page test', async () => {

    console.log('search page test');
});