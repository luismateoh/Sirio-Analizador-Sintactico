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

![Imagen1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/71b84de0-e9cf-4985-8d8b-39b2bf3af8c8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211011T080227Z&X-Amz-Expires=86400&X-Amz-Signature=200cbb08a5b1a73d384e8995b108e20eca3a0d63381996616e2438d2cac3d5c5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

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
