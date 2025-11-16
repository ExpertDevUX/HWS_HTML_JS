#!/bin/bash
# Hacker Web School - GitHub Push Script
# Replace YOUR_USERNAME and YOUR_REPOSITORY_NAME with your actual GitHub details

echo "🚀 Pushing Hacker Web School to GitHub..."

# Set your GitHub repository URL
GITHUB_URL="https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git"

echo "Adding remote repository..."
git remote add origin $GITHUB_URL

echo "Pushing to GitHub..."
git push -u origin master

echo "✅ Push completed! Your code is now on GitHub."
echo "📍 Repository URL: $GITHUB_URL"