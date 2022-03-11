# do-shit-CRUD-app

DO SHIT is a CRUD application akin to to do lists, for all bold designers and developers.

https://medium.com/geekculture/setting-up-a-react-app-from-scratch-withwebpack-babel-and-eslint-57eb3dcaf2e9

# ENVIRONMENT SETUP ERRORS

---

1. <strong>ReferenceError: \_\_dirname is not defined in ES module scope</strong><BR>
   This file is being treated as an ES module because it has a '.js' file extension and 'C:\personal-projects-folder\do-shit-CRUD-app\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
   at file:///C:/personal-projects-folder/do-shit-CRUD-app/webpack.config.js:7:18

    <strong>SOLUTION:</strong> https://www.kindacode.com/article/node-js-using-__dirname-and-__filename-with-es-modules/

2. <strong>ReferenceError: module is not defined in ES module scope</strong><BR>
   This file is being treated as an ES module because it has a '.js' file extension and 'C:\personal-projects-folder\do-shit-CRUD-app\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.<br>
   This error reffered to <em><strong>webpack.config.js</strong></em>

    <strong>SOLUTION: </strong> Remove "type": "module" from package.json. But it returns a new error:<br><br>
    =====> 3. import path from "path";

    <strong>SyntaxError: Cannot use import statement outside a module</strong>

    <strong>SOLUTION: </strong> If returning "type": "module" to package.json, ERROR assigned under point 2 occurs again.

    https://stackoverflow.com/questions/58273824/typescript-cannot-use-import-statement-outside-a-module/60225870#60225870

    IMPORTANT: Use ESM syntax, for importing and exporting files! Add "type": "module" to package.json.

    https://gist.github.com/johnrichardrinehart/c8ec6ab1e60f39fc3b8dc738db649ec0
