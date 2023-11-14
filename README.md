# edcds-vite

POC for client Design System with integration to Chromatic

## Architecture

This repository has been created using:

* VITE.JS
* Storybook (7.5.3)
* Chromatic (automated integration with github repo)

  * **Library: **
    [https://www.chromatic.com/library?appId=654d09a4436eeb0c90e4bd68](https://www.chromatic.com/library?appId=654d09a4436eeb0c90e4bd68)
  * **Storybook:**
  * [https://654d09a4436eeb0c90e4bd68-wpblmrmxwz.chromatic.com/?path=/docs/configure-your-project--docs](https://www.chromatic.com/library?appId=654d09a4436eeb0c90e4bd68)
* GitHub Pages (automated integration with github repo)

  * [https://hectorosbornerodriguez.github.io/edcds-vite](https://hectorosbornerodriguez.github.io/edcds-vite)



Automated integration has been done in "/main" branch and git hub actions. Whe a developer pushes code to /main, two actions are triggered:
1. Updates Chromatic
2. Deploys a github page


### Run Storybook

Use Storybook to read documentation and see the available components

```
npm run storybook
```

### Publish your Storybook to Chromatic

On the command line, publish to Chromatic’s secure CDN for the first time with the following command:

```
npm run chromatic
```
