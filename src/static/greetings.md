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

```java
package com.ricardovz.romanNumerals;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerInitializedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

/**
 * Main class of the application, it is the initial point for all the configuration needed
 * to get the application running and configured
 */
@Slf4j
@SpringBootApplication(scanBasePackages = "com.ricardovz.romanNumerals")
public class Application {


    public static void main(String[] args) throws Exception {

        SpringApplication.run(Application.class, args);

    }

    @Bean
    public ApplicationListener applicationListener() {

        return new ApplicationListener<EmbeddedServletContainerInitializedEvent>() {

            @Override
            public void onApplicationEvent(final EmbeddedServletContainerInitializedEvent event) {
                int port = event.getEmbeddedServletContainer().getPort();

                //http://www.askapache.com/online-tools/figlet-ascii/
                log.info("");
                log.info("______                            _   _                                _ ");
                log.info("| ___ \\                          | \\ | |                              | |");
                log.info("| |_/ /___  _ __ ___   __ _ _ __ |  \\| |_   _ _ __ ___   ___ _ __ __ _| |");
                log.info("|    // _ \\| '_ ` _ \\ / _` | '_ \\| . ` | | | | '_ ` _ \\ / _ \\ '__/ _` | |");
                log.info("| |\\ \\ (_) | | | | | | (_| | | | | |\\  | |_| | | | | | |  __/ | | (_| | |");
                log.info("\\_| \\_\\___/|_| |_| |_|\\__,_|_| |_\\_| \\_/\\__,_|_| |_| |_|\\___|_|  \\__,_|_|");
                log.info("");


                log.info("The application is running...");
                log.info("Try it -> http://localhost:{}/convertToRomanNumeral/3999", port);
            }
        };

    }
}

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
