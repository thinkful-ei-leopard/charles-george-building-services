const ShoppingListService = require('../src/shopping-list-service');
const knex = require('knex');

describe(`Articles service object`, function() {
    let db
    let testArticles = [
      {
      id: 1,
      name: 'chips',
      price: '1.99',
      category:'Main',
      checked: false,
      date_added: new Date('1919-12-22T16:28:32.615Z')
        },
        {
      id: 2,
      name: 'ham',
      price: '4.99',
      category:'Main',
      checked: false,
      date_added: new Date('1919-12-22T16:28:32.615Z')
        },
        {
      id:3,
      name: 'salsa',
      price: '7.99',
      category:'Main',
      checked: false,
      date_added: new Date('1919-12-22T16:28:32.615Z')
        },
      ]
  
     before(() => {
       db = knex({
         client: 'pg',
         connection: process.env.TEST_DB_URL,
       })
     })
     
     before(() => db('shopping_list').truncate())
     
     before(() => {
         return db
           .into('shopping_list')
           .insert(testArticles)
       })

      after(() => db.destroy())

  })

describe(`getAllItems()`, () => {
  let db
  let testArticles = [
    {
      id: 1,
      name: 'chips',
      price: '1.99',
      category:'Main',
      checked: false,
      date_added: new Date('1919-12-22T16:28:32.615Z')
        },
        {
      id: 2,
      name: 'ham',
      price: '4.99',
      category:'Main',
      checked: false,
      date_added: new Date('1919-12-22T16:28:32.615Z')
        },
        {
      id:3,
      name: 'salsa',
      price: '7.99',
      category:'Main',
      checked: false,
      date_added: new Date('1919-12-22T16:28:32.615Z')
        },
      ]

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
  })

  before(() => db('shopping_list').truncate())

  before(() => {
      return db
        .into('shopping_list')
        .insert(testArticles)
    })
    after(() => db.destroy())
  
    it(`resolves all items from 'shopping_list' table`, () => {
    // test that ArticlesService.getAllArticles gets data from table
    return ShoppingListService.getAllItems(db)
      .then(actual => {
        expect(actual).to.eql(testArticles)
      
        })
      })
    })
