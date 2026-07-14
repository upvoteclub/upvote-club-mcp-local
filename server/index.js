#!/usr/bin/env node
// ─── Ariadne's Thread [AT-0534] ─────────────────────
// What: Self-serve local MCP entrypoint (stdio) for Upvote.club Public API
// Why:  npm/npx distribution for Cursor, Claude Code, and any stdio MCP host
// Date: 2026-07-14
// Related: upvote-club-mcp/core/create-server.js
// ─────────────────────────────────────────────────────
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createUpvoteClubServer } from "@upvote-club/mcp-core";

console.error("[upvote-mcp-local] Starting Upvote.club local MCP server (stdio)");

const server = createUpvoteClubServer({ logPrefix: "[upvote-mcp-local]" });
const transport = new StdioServerTransport();

await server.connect(transport);
console.error("[upvote-mcp-local] Connected on stdio and ready");
