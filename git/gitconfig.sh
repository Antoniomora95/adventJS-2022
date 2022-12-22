#!/bin/zsh

# Before you run this sh file, be sure to set permissions for file
# run this on command line, be sure to be on the right folder: sudo chmod +x gitconfig.sh 
# Set colors
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'


# Connect .gitconfig
git config --local user.email morabautistaantonio@gmail.com
git config --local user.name 'Antonio Mora Bautista'
echo "${GREEN}Git config updated:${GREEN}\n"
git config --local --list
