import test from "node:test";
import assert from "node:assert/strict";
import { createUpvoteClubServer } from "@upvote-club/mcp-core";
import {
  SOCIAL_NETWORKS,
  detectNetworkFromUrl,
  minPriceFor,
} from "@upvote-club/mcp-core/platforms";

test("platforms catalog has 18 networks", () => {
  assert.equal(SOCIAL_NETWORKS.length, 18);
});

test("detectNetworkFromUrl matches Reddit", () => {
  assert.equal(
    detectNetworkFromUrl("https://www.reddit.com/r/test/comments/abc/post"),
    "REDDIT"
  );
});

test("minPriceFor meaningful comment floor", () => {
  assert.equal(minPriceFor("TWITTER", "COMMENT", true), 64);
});

test("minPriceFor GitHub star floor", () => {
  assert.equal(minPriceFor("GITHUB", "STAR", false), 16);
});

test("createUpvoteClubServer returns McpServer instance", () => {
  const server = createUpvoteClubServer({ apiKey: "upv_test", logPrefix: "[test]" });
  assert.ok(server);
  assert.equal(typeof server.connect, "function");
});
