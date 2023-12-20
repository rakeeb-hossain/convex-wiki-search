import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  dataset: defineTable({
    text: v.string(),
    rand: v.float64(),
  }).searchIndex("search_text", {
    searchField: "text",
  }).index("by_rand", ["rand"]),
  // Copy of dataset but with stuff being randomly inserted in it!
  searchTable: defineTable({
    text: v.string(),
  }).searchIndex("search_text", {
    searchField: "text",
  })
});
