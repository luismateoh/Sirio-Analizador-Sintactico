export default function syntaxAnalyzer(dictTokens) {
    let tokensList = []


    dictTokens.map(function (item) {
        let key = item['key']
        let value = item['value']

        switch (key) {
            case 'Palabra reservada':
                tokensList.push(value.toString());
                break;
            case "Identificador":
                tokensList.push("id");
                break;
            case "Separador":
                tokensList.push(value.toString());
                break;
            case "Cadena de texto":
                tokensList.push("str");
                break;
            case "Constante Numérica":
                tokensList.push("num");
                break;
            case "Operador":
                tokensList.push(value.toString());
                break;
        }

    })
    let stack = ["$0"]
    let state = 0
    let accept = false
    tokensList.forEach(function (item) {

            switch (state) {
                case 0:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("id")
                            break;
                        case "num":
                            state = 6
                            stack.push("num")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 1:
                    switch (item) {
                        case "+":
                            state = 7
                            stack.push("+")
                            break;
                        case "-":
                            state = 8
                            stack.push("-")
                            break;
                        default:
                            state = "error"
                            accept = true

                    }
                case 2:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                    stack.pop()
                case 3:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 4:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 5:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 6:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 7:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 8:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 9:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 10:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 11:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 12:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 13:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 14:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 15:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 16:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 17:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }
                case 18:
                    switch (item) {
                        case "(":
                            state = 4
                            stack.push("(")
                            break;
                        case "id":
                            state = 5
                            stack.push("(")
                            break;
                        case "num":
                            state = 6
                            stack.push("(")
                            break;
                        case "E":
                            state = 1
                            break;
                        case "T":
                            state = 2
                            break;
                        case "F":
                            state = 3
                            break;
                        default:
                            state = "error"

                    }

            }

        }
    )
    return tokensList


    console.log(tokensList)


}
