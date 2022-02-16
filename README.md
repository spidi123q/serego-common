# Documentation

https://spidi123q.github.io/serego-common/

# Installation

```
yarn add @classmate_technolabs/serego-common @emotion/react @emotion/styled @mui/icons-material @mui/lab @mui/material @mui/styles firebase yup redux redux-actions react-redux formik react-router-dom@6 notistack react react-dom
```

# publish

1. Create .npmrc file at project root
2. Add below to file

```
//registry.npmjs.org/:_authToken=${TOKEN}
```

# For development

Create symlinks

```
ln -s /Users/suraj/Documents/GitHub/Serego/serego-common/lib /Users/suraj/Documents/GitHub/Serego/serego-customer-web/node_modules/@classmate_technolabs/serego-common
```

or use

```
yarn link
```