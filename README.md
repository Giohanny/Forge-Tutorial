# Forge-Tutorial :octocat:
Use this documentation [Install Forge](https://developer.atlassian.com/platform/forge/getting-started)


 ## 1. Previous install  :cherry_blossom:
 You must already have installed Docker and Node.js

![](https://i.ibb.co/Hn10d3R/image.png)

## 2. Install WSL :cherry_blossom:
For windows use this documentation [Forge on Windows](https://developer.atlassian.com/platform/forge/installing-forge-on-windows/)

Run this command as administrator
```sh
wsl --install
```
![](https://i.ibb.co/vvDz3Nc/wsl-install.png)

## 3. Install Forge :cherry_blossom:
```sh
npm install -g @forge/cli
```
![](https://i.ibb.co/XDH8StX/forge-install.png)


## 4. Check the installation :cherry_blossom:
```sh
forge --version
```
![](https://i.ibb.co/MZsSBbT/forge-version.png)

## 5. Create an API token :cherry_blossom:

Create an API token in [Manage API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)

![](https://i.ibb.co/xYJFH4f/image.png)

## 6. Login with your Atlassian acount :cherry_blossom:
```sh
forge login
```
![](https://i.ibb.co/6RFbWvd/forge-login.png)

## 7. Create a development site :cherry_blossom:
If you don't have a cloud developer site, you can create here [Atlassian Cloud developer site]( http://go.atlassian.com/cloud-dev)
