#!/usr/bin/env bash
# ==============================================================================
# Publish Script for New Caledonia Family Itineraries Website
# ==============================================================================
set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

echo "========================================================"
echo "🌴 New Caledonia Itineraries — GitHub Publishing Script"
echo "========================================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: git is not installed or not in PATH."
    exit 1
fi

echo "Repository directory: $REPO_DIR"
git status

# Check if gh CLI is installed
if command -v gh &> /dev/null; then
    echo ""
    echo "Checking GitHub CLI authentication..."
    if gh auth status &> /dev/null; then
        echo "GitHub CLI is authenticated!"
        echo "Creating remote repository and pushing..."
        gh repo create new-caledonia-itineraries --public --source=. --remote=origin --push || true
        echo ""
        echo "Configuring GitHub Pages..."
        gh api --method POST /repos/:owner/:repo/pages -F "source[branch]=main" -F "source[path]=/" 2>/dev/null || true
        gh repo edit --homepage "https://$(gh api user -q .login).github.io/new-caledonia-itineraries/" || true
        echo ""
        echo "✅ Successfully published to GitHub!"
        gh repo view --web || true
        exit 0
    else
        echo "GitHub CLI found but not authenticated. Run 'gh auth login' first."
    fi
fi

# Fallback: Check if origin remote is already set
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")

if [ -z "$CURRENT_REMOTE" ]; then
    echo ""
    echo "Please enter your GitHub repository URL (e.g., https://github.com/username/new-caledonia-itineraries.git):"
    read -r REPO_URL
    if [ -n "$REPO_URL" ]; then
        git remote add origin "$REPO_URL"
        git branch -M main
        echo "Pushing main branch to $REPO_URL..."
        git push -u origin main
        echo "✅ Pushed to GitHub successfully!"
    else
        echo "No repository URL provided. Aborted."
        exit 1
    fi
else
    echo "Using existing remote: $CURRENT_REMOTE"
    git branch -M main
    git push -u origin main
    echo "✅ Pushed to GitHub successfully!"
fi

echo ""
echo "To view your site locally at any time, run:"
echo "  bash serve.sh"
echo "========================================================"
