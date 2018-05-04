Markdown File Example 
======================

*This file contains different examples of text blocks in markdown*

TODO

La Generalitat ha obtenido de forma ilegal los datos fiscales de todos los catalanes; ya tiene elaborada una lista de los jueces que comparten el objetivo independentista, además de haber llegado ya a un acuerdo secreto para permanecer en la OTAN cuando se produzca la secesión. Son algunas de las afirmaciones del senador de ERC Santi Vidal en el transcurso de una serie de conferencias organizadas por ERC y pronunciadas en los pasados meses.

Vidal, expulsado de la carrera judicial por elaborar en su momento un proyecto de constitución catalana, explica por ejemplo que la Generalitat ya tiene los datos fiscales de todos los catalanes, algo que, reconoce se ha obtenido de manera ilegal. Del mismo modo, y tras presumir de preparar el «nuevo sistema judicial catalán» junto al actual consejero Carles Mundó, Vidal asegura que a la plantilla de 801 jueces que hay en Cataluña se le dará tres meses para dedicir qué hacer; unos 300, según su cálculo, se quedarán.

https://localhost:6040/deepstream
openssl s_client -host localhost -port 6040 -prexit -showcerts </dev/null



```javascript
import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Articles} from './articles/articles';

require('./configuration/markedConfiguration');

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main className="container" style={styles.main}>
          <Articles url="http://www.vierica.com/api/articles"/>
        </main>
        <Footer/>
      </div>
    );
  }
}
```
