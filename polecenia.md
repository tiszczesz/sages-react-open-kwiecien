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

Chrome DevTools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## VsCode - wtyczki:
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

https://code.visualstudio.com/docs/editor/emmet

https://quicktype.io/typescript
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype


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

## Playlists
mkdir -p src/playlists/containers
mkdir -p src/playlists/components

touch src/playlists/containers/PlaylistView.tsx

touch src/playlists/components/PlaylistList.tsx
touch src/playlists/components/PlaylistDetails.tsx
touch src/playlists/components/PlaylistForm.tsx

## Music-search
mkdir -p src/music-search/containers
mkdir -p src/music-search/components

touch src/core/model/Search.tsx

touch src/music-search/containers/MusicSearchView.tsx

touch src/music-search/components/AlbumsCardGrid.tsx
touch src/music-search/components/AlbumCard.tsx
touch src/music-search/components/SearchForm.tsx


## Hooks

// https://github.com/schettino/react-request-hook
// https://swr.vercel.app/getting-started

## SWR
npm i swr axios
yarn add swr axios 


npm i react-oauth2-hook immutable react-storage-hook
yarn add react-oauth2-hook immutable react-storage-hook


## Routing - change url to change screen

npm install react-router-dom
yarn add react-router-dom

npm i --save-dev @types/react-router-dom
yarn add @types/react-router-dom

## Redux
https://redux.js.org/

https://redux-toolkit.js.org/tutorials/quick-start

