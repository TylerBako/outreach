# Outreach Development Notes

## Backend Debugging - API Authentication & Server Issues

### Problem
Post creation was failing with a 401 Unauthorized error.

### Investigation
Initially suspected frontend authentication because the browser console suggested adding a Bearer token. However, the posts route did not contain any authentication middleware.

Tested the endpoint directly using Bruno:

- GET `/posts` worked
- POST `/posts` reached the controller
- Error was traced to the Anthropic API moderation request

### Cause
The Anthropic API key stored in the backend `.env` file was invalid after moving the project to another machine.

### Fix
- Generated a new Anthropic API key
- Updated `apps/server/.env`
- Restarted the backend server

### Lessons learned

Test API endpoints independently before debugging the frontend
Use Tools like bruno to isolate backend issues
Check running processes when ports behave unexpectedly
Enviorment variables need to be recreated when movine projects between machines

### Additional Issue
After fixing the API key, requests appeared to hang.

Investigation showed the Express server was not receiving requests correctly because an old Node process was still running on port 3000.

Found the process using:

```bash
lsof -i :3000

