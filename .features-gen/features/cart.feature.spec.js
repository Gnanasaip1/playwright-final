// Generated from: features\cart.feature
import { test } from "playwright-bdd";

test.describe('Cart', () => {

  test('Add random products to cart', { tag: ['@cart', '@regression'] }, async ({ When, Then, And, page }) => { 
    await When('User logs in as "validUser"', null, { page }); 
    await And('User adds random products to cart', null, { page }); 
    await Then('Cart badge should match selected product count', null, { page }); 
    await When('User opens cart', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@cart","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User logs in as \"validUser\"","stepMatchArguments":[{"group":{"start":16,"value":"\"validUser\"","children":[{"start":17,"value":"validUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And User adds random products to cart","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Cart badge should match selected product count","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User opens cart","stepMatchArguments":[]}]},
]; // bdd-data-end