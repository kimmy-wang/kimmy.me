import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  event.res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate")
})
