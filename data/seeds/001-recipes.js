exports.seed = function(knex) {
    return knex("recipes").del()
      .then(function () {
        return knex("recipes").insert([
          {id: 1, name: "Linguine with Red Wine Sauce"},
          {id: 2, name: "Korean Spinach Banchan"}
        ])
      })
  }