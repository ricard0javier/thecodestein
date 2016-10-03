# Single Page Application React

## Requirements
- [npm ^v6.4.0](2)
- [gulp ^3.10.7](3)
- [docker ^1.12.0](4)

Follow the following steps

- download and unzip the template from this [link](1) into your static sources folder
- install the project dependencies
```bash
npm install
bower install
```
- Build and serve the generated content in the 'dist' folder:
```bash
gulp
gulp serve:dist
```

- Serve the content using docker as you would do in your live server
```bash
docker run --name some-nginx -p 8080:80 -v $PWD/dist:/usr/share/nginx/html:ro -d nginx
```

## Caveats

- I faced some problems with Sass whe executing `gulp serve` and I solved them using `npm rebuild node-sass`
- While developing use the following commnads to help you to run the tests and reload changed files:
```
gulp serve
gulp test
gulp test:auto
```


[1]: https://github.com/FountainJS/fountain/releases/download/v0.7.2/react-inject-babel-scss-router-techs.zip
[2]: https://docs.npmjs.com/cli/install
[3]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
[4]: https://docs.docker.com/engine/installation/
