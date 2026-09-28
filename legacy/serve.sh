#!/usr/bin/env bash
# ==============================================================================
# Local Preview Server for New Caledonia Family Itineraries Website
# ==============================================================================
cd "/Users/hitch/.gemini/users/user1/new-caledonia-itineraries"

PORT=8080
echo "========================================================"
echo "🌴 Launching Local Web Server on http://localhost:$PORT"
echo "========================================================"
echo "Press Ctrl+C to stop the server."
echo ""

# Attempt to open browser automatically
if command -v open &> /dev/null; then
    (sleep 1 && open "http://localhost:$PORT/index.html") &
fi

python3 -m http.server $PORT
