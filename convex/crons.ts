import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

/*
crons.interval(
    "add 50 docs to search index",
    { seconds: 1 },
    api.inserter.insertRandom,
);
*/

export default crons;
