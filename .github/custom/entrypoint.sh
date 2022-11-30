#!/bin/bash

echo "------------------Firefox Version entrypoint-----------------------"
echo ""
firefox --version

echo "------------------Run Tests-----------------------"
echo ""
npm install -g npm

cd .github/custom/testProject

echo "---------Installing Dependencies---------"
echo ""
npm i

echo "------------------Geckodriver Version entrypoint-----------------------"
echo ""
geckodriver --version

echo "------------------Geckodriver PID-----------------------"
echo ""
pidof geckodriver

echo "------------------Geckodriver CAT-----------------------"
echo ""
cat etc/hosts

echo "---------Starting---------"
echo ""
node index.js