import { browser, element, by } from 'protractor';

export class MaterialAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getAppRoot() {
    return element(by.css('app-root'));
  }
}
