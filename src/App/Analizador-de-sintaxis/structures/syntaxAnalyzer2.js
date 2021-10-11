export default function syntaxAnalyzer2(dictTokens) {
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
            case "Constante Numerica":
                tokensList.push("num");
                break;
            case "Operador":
                tokensList.push(value.toString());
                break;
        }

    })

    var EPSILON = '\'\'';
    var result = "Sintaxis Correcta";
    let result2;
    var alphabet;
    var nonterminals;
    var terminals;
    var rules;
    var firsts;
    var follows;
    var ruleTable;
    let grammar="PROGRAM -> DECLIST\n" +
        "DECLIST ->\tDECL DECLIST1\n" +
        "DECLIST1 ->\tDECL DECLIST1\n" +
        "DECLIST1 -> ''\n" +
        "DECL ->\tVARDECL\n" +
        "DECL -> STMT\n" +
        "VARDECL ->\tvar VARDECLIST ;\n" +
        "VARDECLIST ->\tVARDECINIT VARDECLIST\n" +
        "VARDECLIST -> , VARDECINIT VARDECLIST\n" +
        "VARDECLIST -> ''\n" +
        "VARDECINIT ->\tid VARINITEXP\n" +
        "VARINITEXP ->\t= SIMPLEEXP\n" +
        "VARINITEXP -> ''\n" +
        "STMT ->\tSELECTMT\n" +
        "STMT -> ITERSTMT\n" +
        "SELECTMT ->\tif ( SIMPLEEXP ) { DECLIST } ELSE\n" +
        "ELSE ->\telse { DECLIST }\n" +
        "ELSE -> ''\n" +
        "ITERSTMT ->\twhile ( SIMPLEEXP ) { DECLIST }\n" +
        "\n" +
        "SIMPLEEXP ->\tANDCOND\n" +
        "ANDCOND ->\tORCOND ANDCOND1\n" +
        "ANDCOND1 ->\tand ORCOND ANDCOND1\n" +
        "ANDCOND1 -> ''\n" +
        "ORCOND ->\tLOGCOND ORCOND1\n" +
        "ORCOND1 ->\tor LOGCOND ORCOND1\n" +
        "ORCOND1 -> ''\n" +
        "LOGCOND ->\tE LOGCOND1\n" +
        "LOGCOND1 ->\t< E LOGCOND1\n" +
        "LOGCOND1 -> <= E LOGCOND1\n" +
        "LOGCOND1 -> > E LOGCOND1\n" +
        "LOGCOND1 -> >= E LOGCOND1\n" +
        "LOGCOND1 -> == E LOGCOND1\n" +
        "LOGCOND1 -> != E LOGCOND1\n" +
        "LOGCOND1 -> ''\n" +
        "E ->\tT E1\n" +
        "E1 ->\t+ T E1\n" +
        "E1 -> - T E1\n" +
        "E1 -> ''\n" +
        "T ->\tF T1\n" +
        "T1 ->\t* F T1\n" +
        "T1 -> / F T1\n" +
        "T1 -> % F T1\n" +
        "T1 -> ''\n" +
        "F ->\t( SIMPLEEXP )\n" +
        "F -> id\n" +
        "F -> num\n"

        rules = grammar.split('\n');
        console.log(rules);
        alphabet = [];
        nonterminals = [];
        terminals = [];

        collectAlphabetAndNonterminalsAndTerminals();
        collectFirsts();
        collectFollows();
        makeRuleTable();
        parseInput();

    function makeRuleTable() {
        ruleTable = new Object();

        for (var i in rules) {
            var rule = rules[i].trim().split('->');

            if (rule.length < 2) {
                continue;
            }

            var nonterminal = rule[0].trim();
            var development = trimElements(rule[1].trim().split(' '));

            var developmentFirsts = collectFirsts3(development);

            for (var j in developmentFirsts) {
                var symbol = developmentFirsts[j];

                if (symbol != EPSILON) {
                    if (ruleTable[nonterminal] == undefined) {
                        ruleTable[nonterminal] = new Object();
                    }

                    var oldTableRule = ruleTable[nonterminal][symbol];

                    if (oldTableRule == undefined) {
                        ruleTable[nonterminal][symbol] = rules[i].trim();
                    } else {
                        ruleTable[nonterminal][symbol] = oldTableRule + "<br>" + rules[i].trim();
                    }
                } else {
                    for (var j in follows[nonterminal]) {
                        var symbol2 = follows[nonterminal][j];

                        if (ruleTable[nonterminal] == undefined) {
                            ruleTable[nonterminal] = new Object();
                        }

                        var oldTableRule = ruleTable[nonterminal][symbol2];

                        if (oldTableRule == undefined) {
                            ruleTable[nonterminal][symbol2] = rules[i].trim();
                        } else {
                            ruleTable[nonterminal][symbol2] = oldTableRule + "<br>" + rules[i].trim();
                        }
                    }
                }
            }
        }
    }

    function emptyIfUndefined(string) {
        return string == undefined ? '' : string;
    }

    function collectFirsts() {
        firsts = new Object();

        var notDone;

        do {
            notDone = false;

            for (var i in rules) {
                var rule = rules[i].split('->');

                if (rule.length < 2) {
                    continue;
                }

                var nonterminal = rule[0].trim();
                var development = trimElements(rule[1].trim().split(' '));
                var nonterminalFirsts = firsts[nonterminal];

                if (nonterminalFirsts == undefined) {
                    nonterminalFirsts = [];
                }

                if (development.length == 1 && development[0] == EPSILON) {
                    notDone |= addUnique(EPSILON, nonterminalFirsts);
                } else {
                    notDone |= collectFirsts4(development, nonterminalFirsts);
                }

                firsts[nonterminal] = nonterminalFirsts;
            }
        } while (notDone);
    }

    /**
     * @param development
     * <br>Array of symbols
     * @param nonterminalFirsts
     * <br>Array of symbols
     * <br>Input-output
     * @return <code>true</code> If <code>nonterminalFirsts</code> has been modified
     */
    function collectFirsts4(development, nonterminalFirsts) {
        var result = false;
        var epsilonInSymbolFirsts = true;

        for (var j in development) {
            var symbol = development[j];
            epsilonInSymbolFirsts = false;

            if (isElement(symbol, terminals)) {
                result |= addUnique(symbol, nonterminalFirsts);

                break;
            }

            for (var k in firsts[symbol]) {
                var first = firsts[symbol][k];

                epsilonInSymbolFirsts |= first == EPSILON;

                result |= addUnique(first, nonterminalFirsts);
            }

            if (!epsilonInSymbolFirsts) {
                break;
            }
        }

        if (epsilonInSymbolFirsts) {
            result |= addUnique(EPSILON, nonterminalFirsts);
        }

        return result;
    }

    /**
     * @param sequence
     * <br>Array of symbols
     */
    function collectFirsts3(sequence) {
        var result = [];
        var epsilonInSymbolFirsts = true;

        for (var j in sequence) {
            var symbol = sequence[j];
            epsilonInSymbolFirsts = false;

            if (isElement(symbol, terminals)) {
                addUnique(symbol, result);

                break;
            }

            for (var k in firsts[symbol]) {
                var first = firsts[symbol][k];

                epsilonInSymbolFirsts |= first == EPSILON;

                addUnique(first, result);
            }

            epsilonInSymbolFirsts |= firsts[symbol] == undefined || firsts[symbol].length == 0;

            if (!epsilonInSymbolFirsts) {
                break;
            }
        }

        if (epsilonInSymbolFirsts) {
            addUnique(EPSILON, result);
        }

        return result;
    }

    function collectFollows() {
        follows = new Object();

        var notDone;

        do {
            notDone = false;

            for (var i in rules) {
                var rule = rules[i].split('->');

                if (rule.length < 2) {
                    continue;
                }

                var nonterminal = rule[0].trim();
                var development = trimElements(rule[1].trim().split(' '));

                if (i == 0) {
                    var nonterminalFollows = follows[nonterminal];

                    if (nonterminalFollows == undefined) {
                        nonterminalFollows = [];
                    }

                    notDone |= addUnique('$', nonterminalFollows);

                    follows[nonterminal] = nonterminalFollows;
                }

                for (var j in development) {
                    var symbol = development[j];

                    if (isElement(symbol, nonterminals)) {
                        var symbolFollows = follows[symbol];

                        if (symbolFollows == undefined) {
                            symbolFollows = [];
                        }

                        var afterSymbolFirsts = collectFirsts3(development.slice(parseInt(j) + 1));

                        for (var k in afterSymbolFirsts) {
                            var first = afterSymbolFirsts[k];

                            if (first == EPSILON) {
                                var nonterminalFollows = follows[nonterminal];

                                for (var l in nonterminalFollows) {
                                    notDone |= addUnique(nonterminalFollows[l], symbolFollows);
                                }
                            } else {
                                notDone |= addUnique(first, symbolFollows);
                            }
                        }

                        follows[symbol] = symbolFollows;
                    }
                }
            }
        } while (notDone);
    }

    function collectAlphabetAndNonterminalsAndTerminals() {
        for (var i in rules) {
            var rule = rules[i].split('->');
            if (rule.length != 2) {
                continue;
            }

            var nonterminal = rule[0].trim();
            var development = trimElements(rule[1].trim().split(' '));

            addUnique(nonterminal, alphabet);
            addUnique(nonterminal, nonterminals);

            for (var j in development) {
                var symbol = development[j];

                if (symbol != EPSILON) {
                    addUnique(symbol, alphabet);
                }
            }
        }

        subtract(alphabet, nonterminals, terminals);
    }

    /**
     * @param result
     * <br>Array
     * <br>Input-output
     * @return <code>result</code>
     */
    function subtract(array1, array2, result) {
        for (var i in array1) {
            var element = array1[i];

            if (!isElement(element, array2)) {
                result[result.length] = element;
            }
        }

        return result;
    }

    /**
     * @return
     * <br>Array
     * <br>New
     */
    function trimElements(array) {
        var result = [];

        for (var i in array) {
            result[i] = array[i].trim();
        }

        return result;
    }

    function isElement(element, array) {
        for (var i in array) {
            if (element == array[i]) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param array
     * <br>Input-output
     * @return <code>true</code> iff <code>array</code> has been modified
     */
    function addUnique(element, array) {
        if (!isElement(element, array)) {
            array[array.length] = element;

            return true;
        }

        return false;
    }

    function parseInput() {

        var input = tokensList;
        var stack = ['$', nonterminals[0]];

        var tree = new Object();
        tree.label = 'root';
        tree.children = [];
        var parents = [tree];

        for (var i = 0, index = 0; i < 1000 && 1 < stack.length; ++i) {
            var stackTop = stack[stack.length - 1];
            var symbol = index < input.length ? input[index] : '$';

            if (symbol.trim() == '') {
                symbol = '$';
            }

            var rule = '';

            if (stackTop == symbol) {
                stack.pop();
                ++index;
                parents.pop().children.push(symbol);
            } else {
                if (isElement(stackTop, nonterminals)) {
                    rule = ruleTable[stackTop][symbol];
                    var node = new Object();
                    node.label = stackTop;
                    node.children = [];
                    parents.pop().children.push(node);



                    if (rule == undefined) {
                        result = "Error de sintaxis: "+"Se esperaba, " + node.label + " se obtuvo: "+ symbol.toString();

                        break;
                    }


                    stack.pop();

                    var reverseDevelopment = rule.split('->')[1].trim().split(' ').slice(0).reverse();

                    for (var i in reverseDevelopment) {
                        parents.push(node);
                    }

                    if (!isElement(EPSILON, reverseDevelopment)) {
                        stack = stack.concat(reverseDevelopment);
                    } else {
                        parents.pop().children.push(EPSILON);
                    }
                } else {
                    result = "Error de sintaxis: "+"Se esperaba, " + node.label + " se obtuvo: "+ symbol.toString();

                    console.log(stack)
                    break;
                }
            }

        }

    }
return result
}
