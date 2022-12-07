#!/bin/bash

echo "------------------Run Tests-----------------------"
echo ""
npm install -g npm

cat /usr/bin/firefox

cd .github/custom/testProject

echo "---------Installing Dependencies---------"
echo ""
npm i

echo "---------Starting---------"
echo ""
node index.js