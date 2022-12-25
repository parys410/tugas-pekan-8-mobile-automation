describe('Open application', () => {
  it('Success open the apps', async () => {
      await expect(await $(`//android.widget.TextView[@content-desc="Accessibility"]`)).toHaveTextContaining("Accessibility");
      driver.closeApp();
  });

  it('Success Open Accessibility Node Provider', async () => {
    driver.activateApp("io.appium.android.apis");
    await $(`//android.widget.TextView[@content-desc="Access'ibility"]`).click();
    await $(`//android.widget.TextView[@content-desc="Accessibility Node Provider"]`).click();
    await expect(await $(`//android.widget.TextView[@content-desc="Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares."]`)).toHaveTextContaining("Enable TalkBack and Explore");
    driver.closeApp();
  });

  it('Success Input Text in TextFields', async () => {
    driver.activateApp("io.appium.android.apis");
    await $(`//android.widget.TextView[@content-desc="Views"]`).click();
    
    // First Scroll
    driver.touchPerform([
      {
        action: 'press',
        options: {
          x: 800,
          y: 2200,
        },
      },
      {
        action: 'wait',
        options: {
          ms: 500,
        },
      },
      {
        action: 'moveTo',
        options: {
          x: 800,
          y: 300,
        },
      },
      {
        action: 'release',
        options: {},
      },
    ]);

    // Second Scroll
    driver.touchPerform([
      {
        action: 'press',
        options: {
          x: 800,
          y: 2100,
        },
      },
      {
        action: 'wait',
        options: {
          ms: 500,
        },
      },
      {
        action: 'moveTo',
        options: {
          x: 800,
          y: 1000,
        },
      },
      {
        action: 'release',
        options: {},
      },
    ]);

    await $(`//android.widget.TextView[@content-desc="TextFields"]`).click();
    await $(`android.widget.EditText`).setValue("Hello World");
    await expect(await $(`android.widget.EditText`)).toHaveTextContaining("Hello World");
    driver.closeApp();
  });

  it('Success Open Dialog Date Widget', async () => {
    driver.activateApp("io.appium.android.apis");
    await $(`//android.widget.TextView[@content-desc="Views"]`).click();
    await $(`//android.widget.TextView[@content-desc="Date Widgets"]`).click();
    await $(`//android.widget.TextView[@content-desc="1. Dialog"]`).click();
    await $(`//android.widget.Button[@content-desc="change the date"]`).click();
    await expect(await $(`android.widget.LinearLayout`)).toBeDisplayed();
    driver.closeApp();
  });

  it('Success View Normal Buttons', async () => {
    driver.activateApp("io.appium.android.apis");
    await $(`//android.widget.TextView[@content-desc="Views"]`).click();
    await $(`//android.widget.TextView[@content-desc="Buttons"]`).click();
    await expect(await $(`//android.widget.Button[@content-desc="Normal"]`)).toBeDisplayed();
    await expect(await $(`//android.widget.Button[@content-desc="Normal"]`)).toHaveTextContaining("NORMAL");
    driver.closeApp();
  });
});