const ShoppingService = {
  getAllItems(knex) {
    return knex.select('*').from('shopping_list')
  
    }
}

module.exports = ShoppingService