import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Add seo group columns to posts table (safe — IF NOT EXISTS)
  await db.execute(sql`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'posts'
      ) THEN
        ALTER TABLE "public"."posts"
          ADD COLUMN IF NOT EXISTS "seo_meta_title" varchar,
          ADD COLUMN IF NOT EXISTS "seo_meta_description" varchar,
          ADD COLUMN IF NOT EXISTS "seo_og_title" varchar,
          ADD COLUMN IF NOT EXISTS "seo_og_description" varchar,
          ADD COLUMN IF NOT EXISTS "seo_focus_keyword" varchar;
      END IF;
    END
    $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'posts'
      ) THEN
        ALTER TABLE "public"."posts"
          DROP COLUMN IF EXISTS "seo_meta_title",
          DROP COLUMN IF EXISTS "seo_meta_description",
          DROP COLUMN IF EXISTS "seo_og_title",
          DROP COLUMN IF EXISTS "seo_og_description",
          DROP COLUMN IF EXISTS "seo_focus_keyword";
      END IF;
    END
    $$;
  `)
}
