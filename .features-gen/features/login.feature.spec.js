// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test.describe('Login validation', () => {

    test('Valid User Login', { tag: ['@login', '@smoke'] }, async ({ When, Then, page }) => { 
      await When('User logs in as "validUser"', null, { page }); 
      await Then('Login result should be "success"', null, { page }); 
    });

    test('Locked User Login', { tag: ['@login', '@smoke'] }, async ({ When, Then, page }) => { 
      await When('User logs in as "lockedUser"', null, { page }); 
      await Then('Login result should be "error"', null, { page }); 
    });

    test('Invalid User Login', { tag: ['@login', '@smoke'] }, async ({ When, Then, page }) => { 
      await When('User logs in as "invalidUser"', null, { page }); 
      await Then('Login result should be "error"', null, { page }); 
    });

    test('Checking wrong user', { tag: ['@login', '@smoke'] }, async ({ When, Then, page }) => { 
      await When('User logs in as "checking wrong user"', null, { page }); 
      await Then('Login result should be "error"', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":13,"tags":["@login","@smoke"],"steps":[{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User logs in as \"validUser\"","stepMatchArguments":[{"group":{"start":16,"value":"\"validUser\"","children":[{"start":17,"value":"validUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Login result should be \"success\"","stepMatchArguments":[{"group":{"start":23,"value":"\"success\"","children":[{"start":24,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":14,"tags":["@login","@smoke"],"steps":[{"pwStepLine":14,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User logs in as \"lockedUser\"","stepMatchArguments":[{"group":{"start":16,"value":"\"lockedUser\"","children":[{"start":17,"value":"lockedUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Login result should be \"error\"","stepMatchArguments":[{"group":{"start":23,"value":"\"error\"","children":[{"start":24,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":["@login","@smoke"],"steps":[{"pwStepLine":19,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User logs in as \"invalidUser\"","stepMatchArguments":[{"group":{"start":16,"value":"\"invalidUser\"","children":[{"start":17,"value":"invalidUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Login result should be \"error\"","stepMatchArguments":[{"group":{"start":23,"value":"\"error\"","children":[{"start":24,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":16,"tags":["@login","@smoke"],"steps":[{"pwStepLine":24,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User logs in as \"checking wrong user\"","stepMatchArguments":[{"group":{"start":16,"value":"\"checking wrong user\"","children":[{"start":17,"value":"checking wrong user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Login result should be \"error\"","stepMatchArguments":[{"group":{"start":23,"value":"\"error\"","children":[{"start":24,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end