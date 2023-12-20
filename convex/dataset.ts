import { v } from "convex/values";
import { query } from "./_generated/server";

export const search = query({
  args: { query: v.string() },
  handler: async (ctx, { query }) => {
    return await ctx.db
      .query("dataset")
      .withSearchIndex("search_text", (q) => q.search("text", query))
      .take(32);
  },
});

export const summary = query(async (ctx) => {
  return await ctx.db.query("dataset")
      .count();
});
