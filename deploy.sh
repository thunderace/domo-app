#!/bin/bash
# Deploy to local

DEST_DIR="/var/www/domo-server/app/domo-test"

echo "Deploy to localhost to $DEST_DIR"
sudo rm -r $DEST_DIR/
sudo cp -r ./dist $DEST_DIR/

