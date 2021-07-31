# Next.js Template

This is a [Next.js](https://github.com/vercel/next.js) template project, with TypeScript, ESLint, Prettier, EditorConfig, Styled-Components and Next-Images.

## How to use

1. Press the `Use this template` button;
2. In the next screen, choose your Repository name and press the `Create repository from template` button;
3. The next step is to clone the newly created Repository to your computer.

4. With the project open, run:

```bash
npm install
# or
yarn install
```
_This will install all project dependencies._

5. Now, to view the project in your browser, run:

```bash
npm run dev
# or
yarn dev
```

_If all goes well, you should see a screen like this:_

![Screenshot from 2021-07-26 22-20-44](https://user-images.githubusercontent.com/50345682/127079833-fa902500-a4f2-4749-967e-f0f38fd49e8d.png)



## ESLint and Prettier setup

1. In Visual Studio Code, install the extentions below:

* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

2. Now, to automatically fix your code whenever you save a file, add the following lines to your **settings.json** file and save it:

```json
{
  //...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

_To test if it's working, let's edit the **index.tsx** file in the **src/pages** folder:_

3. Comment the React import in the first line:

![Screenshot from 2021-07-30 21-37-13](https://user-images.githubusercontent.com/50345682/127723250-8f58a765-8061-483a-ba99-4e8852bdd301.png)

4. ESLint should display the following error within the return:

![Screenshot from 2021-07-30 21-48-13 1](https://user-images.githubusercontent.com/50345682/127723580-2e0737b7-3b72-455c-af2f-f3a91a478ded.png)

5. To test Prettier, let's add a comma after Wrapper import in the eighth line, like this: 

![Screenshot from 2021-07-30 22-02-51](https://user-images.githubusercontent.com/50345682/127723831-781a88eb-2a0d-47e3-896c-91f7af02802c.png)

6. When saving the file, Prettier must remove the comma:

![Screenshot from 2021-07-30 22-08-43](https://user-images.githubusercontent.com/50345682/127723964-937b37f0-5081-4113-83ef-984d32deb383.png)

_Remember, this happens because it is defined in the rules. You can see how to customize them in the next topic._

## Customize ESLint and Prettier rules
