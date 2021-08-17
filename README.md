# Next.js Template

This is a [Next.js](https://github.com/vercel/next.js) template project with TypeScript, ESLint, Prettier, EditorConfig, Styled-Components, Next-Images, Commitlint and Commitizen.

* [About the dependencies in this template](#about-the-dependencies-in-this-template)
* [How to use](#how-to-use)
* [ESLint, Prettier and EditorConfig setup](#eslint-prettier-and-editorconfig-setup)
* [Customize ESLint, Prettier and EditorConfig rules](#customize-eslint-prettier-and-editorconfig-rules)
* [Using Commitlint and Commitizen](#using-commitlint-and-commitizen)
* [References](#references)

## About the dependencies in this template

* **TypeScript**: Is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. The advantage of using TypeScript is that it provides a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly;
* **ESLint**: Is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines. The advantage of using ESLint is that it forces you to follow best practices when writing code;
* **Prettier**: Is an opinionated code formatter with support for many languages and integration with most editors. The advantage of using Prettier is that it removes all original styling and ensures that all outputted code conforms to a consistent style;
* **EditorConfig**: The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. The advantage of using EditorConfig is that it helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs;
* **Styled-Components**: It's a React library focused on making writing css easier. Among the main advantages of using Styled-Components are: generation of unique class names for your styles, easy maintenance, fast rendering and much more;
* **Next-Images**: It's a library made to make it easy to import images of various types into Next.js. Supports jpg, jpeg, png, svg, fig, ico, webp, jp2 and avif images by default;
* **Commitlint**: Commitlint checks if your commit messages meet the conventional commit format. The advantages of using this are: automatically generating CHANGELOGs, automatically determining a semantic version bump (based on the types of commits landed), communicating the nature of changes to teammates, the public, and other stakeholders and etc;
* **Commitizen**: Is an open source project that helps contributors be good open source citizens. It accomplishes this by prompting them to follow commit message conventions at commit time. The advantage of using Commitizen is that it helps at commit time by displaying the options to be filled in the terminal.

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

This will install all project dependencies.

5. Now, to view the project in your browser, run:

```bash
npm run dev
# or
yarn dev
```

If all goes well, you should see a screen like this:

![Screenshot from 2021-07-26 22-20-44](https://user-images.githubusercontent.com/50345682/127079833-fa902500-a4f2-4749-967e-f0f38fd49e8d.png)

## ESLint, Prettier and EditorConfig setup

For ESLint, Prettier and EditorConfig to work in your development environment, you need to install their extensions and do some settings.

1. In Visual Studio Code, install the extentions below:

* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

If you get some errors in the files after installing the extensions, don't worry, just go to the next step to fix it.

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

To make sure the extensions and settings we've added will work, it's recommended that you restart your Visual Studio Code.

Now, if you have errors, save the files to fix them automatically. If you haven't received any errors, let's manually test if it's working. To do that, let's edit the **index.tsx** file in the **src/pages** folder.

3. Comment the React import in the first line:

![Screenshot from 2021-07-30 21-37-13](https://user-images.githubusercontent.com/50345682/127723250-8f58a765-8061-483a-ba99-4e8852bdd301.png)

4. ESLint should display the following error within the return:

![Screenshot from 2021-07-30 21-48-13 1](https://user-images.githubusercontent.com/50345682/127723580-2e0737b7-3b72-455c-af2f-f3a91a478ded.png)

5. To test Prettier, let's add a comma after Wrapper import in the eighth line, like this: 

![Screenshot from 2021-07-30 22-02-51](https://user-images.githubusercontent.com/50345682/127723831-781a88eb-2a0d-47e3-896c-91f7af02802c.png)

6. When saving the file, Prettier must remove the comma:

![Screenshot from 2021-07-30 22-08-43](https://user-images.githubusercontent.com/50345682/127723964-937b37f0-5081-4113-83ef-984d32deb383.png)

Remember, this happens because it is defined in the rules. If you want to customize them, see how to do this in the next topic.

## Customize ESLint, Prettier and EditorConfig rules

This project uses the ESLint recommended rules by default. So, to change them, follow the next step.

1. To customize the ESLint rules, you can change them in the **.eslintrc.json** file;

_Here is a list of the ESLint rules that you can use:_
* https://eslint.org/docs/rules/

If you prefer to use a popular style guide instead of the recommended rules, go to the next step, otherwise, just ignore it.

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

## Using Commitlint and Commitizen

Both seem to do the same thing, but each has its importance. Commitlint (and Husky) will ensure that the commit message follows conventional commits rules. And with Commitizen, we have a set of commit message options that make our work easier. See the examples below to learn how to use them.

1. A invalid commit message will display an error:

![Screenshot from 2021-08-14 21-58-53](https://user-images.githubusercontent.com/50345682/129463721-e61bb658-a6cd-497d-9ba8-39cbbb689753.png)

This is because Commitlint expects to receive a valid type and subject. The accepted types are: build, chore, ci, docs, feat, fix, perf, refactor, revert, style and test.

2. Now, with a valid type and subject our commit is done:

![Screenshot from 2021-08-14 22-13-32](https://user-images.githubusercontent.com/50345682/129463887-e71a22de-1cbc-49f1-aed8-11321a90dd9b.png)

To make this easier, we can use Commitizen.

3. In your terminal, just run:

```bash
npm run commit
# or
yarn commit
```

With that, Commitizen will ask you to fill in some fields. And your commit will be done following the conventional commits rules:

![Screenshot from 2021-08-16 21-10-19](https://user-images.githubusercontent.com/50345682/129644223-34aabda5-a0ea-40db-b046-a512e2b80f25.png)

## References

* https://www.typescriptlang.org/
* https://eslint.org/docs
* https://prettier.io/docs/en
* https://editorconfig.org/#overview
* https://styled-components.com/docs/basics#motivation
* https://github.com/twopluszero/next-images
* https://github.com/conventional-changelog/commitlint
* https://www.conventionalcommits.org/en/v1.0.0/#why-use-conventional-commits
* https://github.com/commitizen/cz-cli
