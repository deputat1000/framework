const HomePage = require('../../test/pages/pastebin.com/HomePage');
const {ICanWinEntities} = require('../../test/entities/Entities');

describe('I Can Win', () => {
  let page;
  let entities;

  before(async() => {
    page = new HomePage();
    entities = new ICanWinEntities();
    
    await page.open();
    await page.createPaste(entities.code, entities.name);
  });
  
  it('should create new paste', () => {});
});
