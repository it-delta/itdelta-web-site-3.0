#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin production

echo "Install js dependencies..."
yarn install --non-interactive

echo "Compile npm assets..."
yarn build
pm2 delete itdelta.ru
pm2 start /usr/bin/yarn \
  --name itdelta.ru \
  --interpreter none \
  -- start -p 3010
pm2 save

echo "Deployment finished!"
