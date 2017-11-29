# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171129210310) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bots", force: :cascade do |t|
    t.integer "task_id", null: false
    t.string "name", null: false
    t.string "description", null: false
    t.integer "order", null: false
    t.integer "time", null: false
    t.integer "wins", default: 0, null: false
    t.integer "losses", default: 0, null: false
    t.integer "ties", default: 0, null: false
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inputs", force: :cascade do |t|
    t.integer "task_id", null: false
    t.integer "order", null: false
    t.string "input_name", null: false
    t.string "input_type", null: false
    t.string "constraints", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_inputs_on_task_id"
  end

  create_table "level_sets", force: :cascade do |t|
    t.string "name", null: false
    t.integer "order", null: false
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "level_set_id"
    t.integer "order"
    t.string "fxn_name", null: false
    t.string "description", null: false
    t.string "example", null: false
    t.integer "time_limit", null: false
    t.string "output_type", null: false
    t.string "output_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["level_set_id"], name: "index_tasks_on_level_set_id"
  end

  create_table "test_inputs", force: :cascade do |t|
    t.integer "test_id", null: false
    t.integer "order", null: false
    t.string "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["test_id"], name: "index_test_inputs_on_test_id"
  end

  create_table "tests", force: :cascade do |t|
    t.integer "task_id", null: false
    t.integer "order", null: false
    t.string "output", null: false
    t.boolean "hidden", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_tests_on_task_id"
  end

  create_table "user_bot_completions", force: :cascade do |t|
    t.integer "bot_id", null: false
    t.integer "user_id", null: false
    t.integer "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", null: false
  end

  create_table "user_solutions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "task_id", null: false
    t.string "mode", null: false
    t.text "solution", null: false
    t.boolean "completed", default: false, null: false
    t.integer "score", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_user_solutions_on_task_id"
    t.index ["user_id", "task_id", "mode"], name: "index_user_solutions_on_user_id_and_task_id_and_mode", unique: true
  end

  create_table "user_task_completions", force: :cascade do |t|
    t.integer "task_id", null: false
    t.integer "user_id", null: false
    t.integer "chars", null: false
    t.string "mode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_user_task_completions_on_task_id"
    t.index ["user_id"], name: "index_user_task_completions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "img_url", null: false
    t.integer "score", default: 0, null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
