CREATE TABLE "reports" (
  "id" SERIAL PRIMARY KEY,
  "full_name" TEXT NOT NULL,
  "date_of_birth" TIMESTAMP NOT NULL,
  "report_data" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "user_id" UUID NOT NULL
);