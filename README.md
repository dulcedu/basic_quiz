# Basic Quiz app

Basic quiz app

## Basic setup

Let's create the `package.json` with the following


```
npm init -y
```


## Install dependencies

```
npm install lite-server --save-dev
```
For front-end, we are to use going. 

``` 
npm install bulma-extensions
```

### Create directories and files

```bash
mkdir -p js css
```

```bash
touch index.html README.md js/app.js css/styles.css
```

## Basic template

For the next step I use Bulma's [Starter template](https://bulma.io/documentation/overview/start/): 

> Copy the "Starter template"

```htmlmixed
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </body>
</html>
```
