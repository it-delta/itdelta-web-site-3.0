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
pm2 start yarn --name "itdelta.ru" -- start -p 3010

echo "Deployment finished!"
