/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('enrollments', function(table) {
        table.increments('id').primary(); // Auto-incrementing ID
        table.integer('client_id').unsigned().notNullable();
        table.integer('program_id').unsigned().notNullable();
        table.date('enrolled_at').defaultTo(knex.fn.now()); 
        table.timestamps(true, true);
    
        // Foreign key constraints
        table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE');
        table.foreign('program_id').references('id').inTable('programs').onDelete('CASCADE');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('enrollments');
};
