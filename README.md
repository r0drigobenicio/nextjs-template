# Next.js Template

This is a [Next.js](https://github.com/vercel/next.js) template project, with TypeScript, ESLint, Prettier, EditorConfig, Styled-Components and Next-Images.

* [About the dependencies in this template](#about-the-dependencies-in-this-template)
* [How to use](#how-to-use)
* [ESLint, Prettier and EditorConfig setup](#eslint-prettier-and-editorconfig-setup)
* [Customize ESLint, Prettier and EditorConfig rules](#customize-eslint-prettier-and-editorconfig-rules)
* [References](#references)

## About the dependencies in this template

* **TypeScript**: Is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. The advantage of using TypeScript is that it provides a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly;
* **ESLint**: Is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines. The advantage of using ESLint is that it forces you to follow best practices when writing code;
* **Prettier**: Is an opinionated code formatter with support for many languages and integration with most editors. The advantage of using Prettier is that it removes all original styling and ensures that all outputted code conforms to a consistent style;
* **EditorConfig**: The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. The advantage of using EditorConfig is that it helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs;
* **Styled-Components**: It's a React library focused on making writing css easier. Among the main advantages of using Styled-Components are: generation of unique class names for your styles, easy maintenance, fast rendering and much more;
* **Next-Images**: It's a library made to make it easy to import images of various types into Next.js. Supports jpg, jpeg, png, svg, fig, ico, webp, jp2 and avif images by default.

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



## ESLint, Prettier and EditorConfig setup

_For ESLint, Prettier and EditorConfig to work in your development environment, you need to install their extensions and do some settings._ 

1. In Visual Studio Code, install the extentions below:

* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

_If you get some errors in the files after installing the extensions, don't worry, just go to the next step to fix it._

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

_To make sure the extensions and settings we've added will work, it's recommended that you restart your Visual Studio Code._

_Now, if you have errors, save the files to fix them automatically. If you haven't received any errors, let's manually test if it's working. To do that, let's edit the **index.tsx** file in the **src/pages** folder._

3. Comment the React import in the first line:

![Screenshot from 2021-07-30 21-37-13](https://user-images.githubusercontent.com/50345682/127723250-8f58a765-8061-483a-ba99-4e8852bdd301.png)

4. ESLint should display the following error within the return:

![Screenshot from 2021-07-30 21-48-13 1](https://user-images.githubusercontent.com/50345682/127723580-2e0737b7-3b72-455c-af2f-f3a91a478ded.png)

5. To test Prettier, let's add a comma after Wrapper import in the eighth line, like this: 

![Screenshot from 2021-07-30 22-02-51](https://user-images.githubusercontent.com/50345682/127723831-781a88eb-2a0d-47e3-896c-91f7af02802c.png)

6. When saving the file, Prettier must remove the comma:

![Screenshot from 2021-07-30 22-08-43](https://user-images.githubusercontent.com/50345682/127723964-937b37f0-5081-4113-83ef-984d32deb383.png)

_Remember, this happens because it is defined in the rules. If you want to customize them, see how to do this in the next topic._

## Customize ESLint, Prettier and EditorConfig rules

_This project uses the ESLint recommended rules by default. So, to change them, follow the next step._

1. To customize the ESLint rules, you can change them in the **.eslintrc.json** file;

_Here is a list of the ESLint rules that you can use:_
* https://eslint.org/docs/rules/

_If you prefer to use a popular style guide instead of the recommended rules, go to the next step, otherwise, just ignore it._

2. To override the ESLint default settings, just run the command below and choose the desired options:

```bash
npx eslint --init
# or
yarn eslint --init
```

3. To customize the Prettier rules, you can edit the **prettier.config.js** file.

_Here is a list of the Prettier rules that you can use:_
* https://prettier.io/docs/en/options.html

4. To customize the EditorConfig rules, you can edit the **.editorconfig** file.

## References

* https://www.typescriptlang.org/
* https://eslint.org/docs/about/
* https://prettier.io/docs/en/index.html
* https://editorconfig.org/#overview
* https://styled-components.com/docs/basics#motivation
* https://www.npmjs.com/package/next-images
