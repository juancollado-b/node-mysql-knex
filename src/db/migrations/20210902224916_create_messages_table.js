exports.up = function (knex) {
    knex.schema.hasTable("messages").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("messages", (table) => {
                table.increments("id").primary();
                table.string("email").notNullable();
                table.string("message").notNullable();
                table.timestamps(true, true);
            });
        }

        console.warn("Table messages already exist.");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("messages");
};
