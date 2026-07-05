// Generated from: features\checkout.feature
import { test } from "playwright-bdd";

test.describe('Checkout', () => {

  test('Complete checkout', { tag: ['@checkout', '@regression'] }, async ({ When, Then, And, page }) => { 
    await When('User logs in as "validUser"', null, { page }); 
    await And('User adds random products to cart', null, { page }); 
    await And('User opens cart', null, { page }); 
    await And('User proceeds to checkout', null, { page }); 
    await And('User completes checkout information', null, { page }); 
    await And('User finishes the order', null, { page }); 
    await Then('Order should be placed successfully', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@checkout","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User logs in as \"validUser\"","stepMatchArguments":[{"group":{"start":16,"value":"\"validUser\"","children":[{"start":17,"value":"validUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And User adds random products to cart","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And User opens cart","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And User proceeds to checkout","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And User completes checkout information","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And User finishes the order","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Order should be placed successfully","stepMatchArguments":[]}]},
]; // bdd-data-end