#!/usr/bin/env bash
# ==============================================================================
# Local Preview Server for New Caledonia Family Itineraries Website
# ==============================================================================
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

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
