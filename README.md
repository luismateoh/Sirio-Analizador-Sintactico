# Sirio · Analizador Léxico y Sintáctico

Sirio pretende ser un analizador léxico y sintactico el cual mediante expresiones regulares y autómatas finitos lee alguna una entrada (código fuente de un programa)  y genera una lista ligada o array de tokens. Estos tokens se componen de la siguiente manera: un atributo que identifica el tipo del token y el lexema o valor del token. Para después validar la sintaxis mediante gramáticas.


Después de implementar el análisis léxico se adicionara el analizador de sintaxis, el cual mediante gramáticas LL(1) permite revisar la lista ligada o array de tokens, identificando si las estructuras planteadas son correctas y tienen un sentido lógico según sus tipos de token.

:blue_book: [Documento sobre el proceso del analixis sintactico que realiza sirio](https://luismateoh.notion.site/Sirio-Analizador-de-Sintaxis-d16f9228cad94ef1a302c45088d25fe3)

:blue_book: [Documento sobre el proceso del analixis lexico que realiza sirio](https://www.notion.so/luismateoh/Sirio-Analizador-L-xico-14498473d3b24697b760bec59667e772)

:blue_book: [Manual de usuario](https://luismateoh.notion.site/Sirio-Manual-de-usuario-7b2c755f301e4c3b840d8e732ea64088)

:blue_book: [Manual técnico](https://luismateoh.notion.site/Sirio-Manual-t-cnico-a86e4e61d1be43e3a32e2f5e8409e269)

Se tratara de explicar la forma en que se implementara y construirá el modulo de análisis de sintaxis de Sirio, las gramáticas, las restricciones y condiciones que se tendrán, así como las estructuras y el diseño que se uso para construirlo.

Para acceder a sirio siga:
[https://luismateoh.github.io/Sirio-Analizador-Sintactico/](https://luismateoh.github.io/Sirio-Analizador-Sintactico/)

Realizar los siguientes pasos para ejecutar Sirio.
Recordar que antes de eso se debe tener instalado *[Node.js](https://nodejs.org/es/) (v14.17.0), con [Yarn](https://yarnpkg.com/) (v1.22.10).*

Clonar el repositorio desde: [https://github.com/luismateoh/Sirio-Analizador-Sintactico](https://github.com/luismateoh/Sirio-Analizador-Sintactico)

```bash
git clone https://github.com/luismateoh/Sirio-Analizador-Sintactico
```

Entrar a la carpeta del repositorio clonado.

```bash
cd .\Sirio-Analizador-Sintactico\
```

Instalar las librerías.

```bash
yarn install
```

Correr el servidor de forma local.

```bash
yarn start
```

Si el puerto 3000 esta disponible la aplicación se puede abrir desde `http://localhost:3000/Sirio-Analizador-Sintactico`.
