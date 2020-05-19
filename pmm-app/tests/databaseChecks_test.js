Feature('Database Failed Checks (disabledSTT state)');

Before( async (I, pmmSettingsPage) => {
    I.Authorize();
    I.amOnPage(pmmSettingsPage.url);
    await pmmSettingsPage.disableSTT();
});

Scenario(
    'PMM-T294 Verify user is able to see message about Disabled STT in Checks panel at Home Page @not-pr-pipeline',
    async (I, homePage, databaseChecksPage) => {
        I.amOnPage(homePage.url);
        I.waitForVisible(homePage.fields.sttDisabledFailedChecksPanelSelector, 30);
        I.see(databaseChecksPage.messages.homePagePanelMessage, homePage.fields.sttDisabledFailedChecksPanelSelector);
    }
);

Scenario(
    'PMM-T295 Verify user is able to see message about Disabled STT at Database Checks page @not-pr-pipeline',
    async (I, databaseChecksPage) => {
        I.amOnPage(databaseChecksPage.url);
        I.waitForVisible(databaseChecksPage.fields.dbCheckPanelSelector, 30);
        I.waitForVisible(databaseChecksPage.fields.disabledSTTMessageSelector, 30);
        I.see(databaseChecksPage.messages.disabledSTTMessage, databaseChecksPage.fields.disabledSTTMessageSelector);
        I.seeElement(`${databaseChecksPage.fields.disabledSTTMessageSelector}/a`)
    }
);

Feature('Database Failed Checks (enabledSTT state)');

Before( async (I, pmmSettingsPage) => {
    I.Authorize();
    I.amOnPage(pmmSettingsPage.url);
    await pmmSettingsPage.enableSTT();
});

Scenario(
    'PMM-T233 Verify user is able to access PMM Database Checks through UI and with URL @not-pr-pipeline',
    async (I, adminPage, databaseChecksPage) => {
        adminPage.selectItemFromPMMDropdown('PMM Database Checks');
        I.waitForVisible(databaseChecksPage.fields.dbCheckPanelSelector, 30);
        I.amOnPage(databaseChecksPage.url);
        I.waitForVisible(databaseChecksPage.fields.dbCheckPanelSelector, 30);
    }
);

Scenario(
    'PMM-T233 Verify user can see Number of failed checks at Home Page and open PMM Database Checks page from it @not-pr-pipeline',
    async (I, homePage, databaseChecksPage) => {
        I.amOnPage(homePage.url);
        I.waitForVisible(homePage.fields.checksPanelSelector, 30);
        await homePage.waitForCheckResultsToAppearInPanel();
        I.doubleClick(homePage.fields.sttFailedChecksPanelSelector);
        databaseChecksPage.verifyDatabaseChecksPageOpened(true);
    }
);

Scenario(
    'PMM-T236 Verify user is able to hover Failed Checks values and see tooltip @not-pr-pipeline',
    async (I, databaseChecksPage) => {
        const row = 1;
        I.amOnPage(databaseChecksPage.url);
        await databaseChecksPage.waitForCheckResultsToAppear();
        databaseChecksPage.verifyDatabaseChecksPageOpened(true);
        databaseChecksPage.mouseOverInfoIcon(row);
        await databaseChecksPage.compareTooltipValues(row);
    }
);

Scenario(
    'PMM-T241 Verify user can see correct service name for failed checks @not-pr-pipeline',
    async (I, databaseChecksPage) => {
        I.amOnPage(databaseChecksPage.url);
        await databaseChecksPage.waitForCheckResultsToAppear();
        databaseChecksPage.verifyDatabaseChecksPageOpened(true);
        await databaseChecksPage.verifyServiceNamesExistence();
    }
);
