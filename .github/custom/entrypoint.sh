
#!/bin/sh -l

echo "------------------Firefox Version entrypoint-----------------------"
echo ""
firefox --version

echo "------------------Run Tests-----------------------"
echo ""
npm install -g npm

cd ./.github/custom/testProject

echo "---------Installing Dependencies---------"
echo ""
npm i

echo "------------------Geckodriver Version entrypoint-----------------------"
echo ""
geckodriver --version

echo "---------Starting---------"
echo ""
node index.js