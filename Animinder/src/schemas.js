
import { schema } from "normalizr";

export const animeSchema = new schema.Entity(
  "animes",
  {},
  { idAttribute: "_id" }
);