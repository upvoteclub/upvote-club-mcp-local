# Upvote.club — Self-serve Local MCP

Stdio MCP server for the [Upvote.club Public API](https://upvote.club/api). Works with Cursor, Claude Code, Claude Desktop (manual config), and any MCP host that spawns local processes.

## Install

From this monorepo:

```bash
cd upvote-club-mcp/local
npm install
```

Or via npx (after publishing to npm):

```bash
npx upvote-club-mcp-local
```

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `UPVOTE_API_KEY` | Yes* | API key (`upv_...`) for task tools |
| `UPVOTE_JWT` | No | Firebase access token for `list_api_keys` / `generate_api_key` |
| `UPVOTE_API_URL` | No | Default `https://api.upvote.club` |

\*Required for `create_task`, `get_task_status`, `delete_task`. `list_platforms` works without auth.

## Cursor / Claude Code config

```json
{
  "mcpServers": {
    "upvote-club": {
      "command": "node",
      "args": ["/ABS/PATH/upvote-club-mcp/local/server/index.js"],
      "env": {
        "UPVOTE_API_KEY": "upv_...",
        "UPVOTE_API_URL": "https://api.upvote.club"
      }
    }
  }
}
```

## Tools (8)

| Tool | Auth | Backend |
|------|------|---------|
| `get_api_reference` | none | full examples, prices, errors |
| `list_platforms` | none | static catalog |
| `list_api_keys` | JWT | `GET /api/public-api/list-keys/` |
| `generate_api_key` | JWT | `POST /api/public-api/generate-key/` |
| `create_task` | API key | `POST /api/public-api/create-task/` |
| `get_task_status` | API key | `GET /api/public-api/task-status/` |
| `delete_task` | API key | `DELETE /api/public-api/delete-task/{id}/` |

## Requirements

- Upvote.club **MATE** plan
- Sufficient point balance and daily task slots

## API reference

Full request examples, minimum prices, and error catalog:

- MCP tool: **`get_api_reference`**
- GitHub: https://github.com/alxgntv/upvote-club-mcp-core/blob/main/docs/API_REFERENCE.md

## Privacy

Connects only to `https://api.upvote.club`. See https://upvote.club/privacy-policy
