import * as migration_20260527_add_seo_to_posts from './20260527_add_seo_to_posts';

export const migrations = [
  {
    up: migration_20260527_add_seo_to_posts.up,
    down: migration_20260527_add_seo_to_posts.down,
    name: '20260527_add_seo_to_posts',
  },
];
