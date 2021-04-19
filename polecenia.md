## GIT 
cd ..
git clone https://bitbucket.org/ev45ive/sages-react-open-kwiecien.git sages-react-kwiecien
cd sages-react-kwiecien  
####  <!-- LUB  "File -> Open Folder -> sages-react-kwiecien" -->
npm i 
npm start

## Instalacje
node -v
v14.16.1

npm -v
6.14.6

code -v
1.55.2
3c4e3df9e89829dce27b7b5c24508306b151f30d
x64

git --version
git version 2.28.0.windows.1

## VsCode - wtyczki:
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

https://code.visualstudio.com/docs/editor/emmet

## Create React App
npm i -g create-react-app 
create-react-app --help

cd ..
create-react-app sages-react-open-kwiecien --template typescript 

cd sages-react-open-kwiecien
npm start
npm start -- --port 1234

## Bootstrap CSS
<!-- npm install react-bootstrap bootstrap -->
npm install bootstrap

mkdir -p src/playlists/containers
mkdir -p src/playlists/components

touch src/playlists/containers/PlaylistView.tsx

touch src/playlists/components/PlaylistList.tsx
touch src/playlists/components/PlaylistDetails.tsx
touch src/playlists/components/PlaylistForm.tsx

