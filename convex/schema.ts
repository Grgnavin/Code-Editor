import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        userId: v.string(), //clerk userid
        email: v.string(),
        name: v.string(),
        isPro: v.boolean(),
        proSince: v.optional(v.number()),
        lemonSquizyCustomerId: v.optional(v.string()),
        lemonSquizyOrderId: v.optional(v.string())
    }).index("by_user_id", ["userId"])
});