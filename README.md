# Upvote.club — Self-serve Local MCP

Stdio MCP server for the [Upvote.club Public API](https://upvote.club/api).

## Setup

1. Register at **https://upvote.club**
2. **MATE** plan
3. API key at **https://upvote.club/api** → copy `upv_...`
4. Install and configure:

```bash
git clone https://github.com/alxgntv/upvote-club-mcp-local.git
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

Docs: https://github.com/alxgntv/upvote-club-mcp-core/blob/main/docs/API_REFERENCE.md

## Privacy

Connects only to `https://api.upvote.club`. https://upvote.club/privacy-policy
