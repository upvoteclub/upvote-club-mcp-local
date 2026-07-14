# Upvote.club — Self-serve Local MCP

Stdio MCP server for the [Upvote.club Public API](https://upvote.club/api).

## Upvote Club MCP packages

| Package | Repository | Use case |
|---------|------------|----------|
| Core | [upvote-club-mcp-core](https://github.com/upvoteclub/upvote-club-mcp-core) | Shared MCP server library (6 tools) |
| **Local** | **This repo** — [upvote-club-mcp-local](https://github.com/upvoteclub/upvote-club-mcp-local) | Cursor, Claude Code, manual Claude Desktop (`stdio`) |
| MCPB | [upvote-club-mcp-mcpb](https://github.com/upvoteclub/upvote-club-mcp-mcpb) | Single-click Claude Desktop `.mcpb` install |
| Remote | [upvote-club-mcp-remote](https://github.com/upvoteclub/upvote-club-mcp-remote) | Claude.ai custom connector (Streamable HTTP) |
| Apps | [upvote-club-mcp-apps](https://github.com/upvoteclub/upvote-club-mcp-apps) | MCP Apps + inline task progress UI |

## Setup

1. Register at **https://upvote.club**
2. **MATE** plan
3. API key at **https://upvote.club/api** → copy `upv_...`
4. Install and configure:

```bash
git clone https://github.com/upvoteclub/upvote-club-mcp-local.git
cd upvote-club-mcp-local
npm install
```

```json
{
  "mcpServers": {
    "upvote-club": {
      "command": "node",
      "args": ["/ABS/PATH/upvote-club-mcp-local/server/index.js"],
      "env": {
        "UPVOTE_API_KEY": "upv_..."
      }
    }
  }
}
```

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `UPVOTE_API_KEY` | Yes | From https://upvote.club/api |
| `UPVOTE_API_URL` | No | Default `https://api.upvote.club` |

## Tools (6)

`get_api_reference`, `list_platforms`, `create_task`, `get_task_status`, `delete_task`

Docs: [API_REFERENCE.md](https://github.com/upvoteclub/upvote-club-mcp-core/blob/main/docs/API_REFERENCE.md) (core repo)

## Related

- Core dependency: [@upvote-club/mcp-core](https://github.com/upvoteclub/upvote-club-mcp-core)
- Prefer one-click Desktop install? → [upvote-club-mcp-mcpb](https://github.com/upvoteclub/upvote-club-mcp-mcpb)
- Need Claude.ai HTTPS connector? → [upvote-club-mcp-remote](https://github.com/upvoteclub/upvote-club-mcp-remote)

## Privacy

Connects only to `https://api.upvote.club`. https://upvote.club/privacy-policy
