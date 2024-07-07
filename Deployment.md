# Deploy a Simple Static HTML Website on Heroku

This guide helps you deploy a static HTML website on Heroku by tricking it into thinking it's a PHP application.

## Prerequisites
- GitHub account with Git installed
- Heroku account with Heroku CLI installed

## Steps

1. **Rename `index.html` to `home.html`:**
    ```sh
    mv index.html home.html
    ```

2. **Create `index.php` with the following content:**
    ```php
    <?php include_once("home.html"); ?>
    ```

3. **Create an empty `composer.json` file:**
    ```sh
    echo '{}' > composer.json
    ```

4. **Initialize a git repository:**
    ```sh
    git init
    git add .
    git commit -m "Initial commit"
    ```

5. **Login to Heroku and create an app:**
    ```sh
    heroku login
    heroku apps:create your-app-name
    ```

6. **Deploy to Heroku:**
    ```sh
    git push heroku master
    ```

Visit your app at `https://your-app-name.herokuapp.com`.

## Redeploying Changes
To redeploy changes, run the following commands:
```sh
git add .
git commit -m "A message describing the changes made"
git push heroku master
