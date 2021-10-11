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
    tokensList.push("$")
    let erros=[]
    let valueI= tokensList
    let resultAsString = null;

        console.log("parsing script");
        if (!valueI || valueI.length === 1) {
            resultAsString = "invalid string: empty string";
            return;
        }

        var iterator = {
            valueItem : valueI,
            index: 0,
            currentItem: function() {
                return this.valueItem[this.index].toString();
            }
        };


        try {
            parse(iterator);
            resultAsString = tokensList + ": No hay errores de sintaxis";
        } catch(e) {
            resultAsString = tokensList + ": Error de sintaxis";
        }
        console.log(resultAsString)

    function parse(iterator) {
        exp(iterator);
        match(iterator, '$');
    }

    function exp(iterator) {
        term(iterator)
        while(iterator.currentItem() == '+' || iterator.currentItem() == '-') {
            match(iterator, iterator.currentItem());
            term(iterator);
        }
    }

    function term(iterator) {
        factor(iterator);
        while (iterator.currentItem() == '*' || iterator.currentItem() == '/') {
            match(iterator, iterator.currentItem());
            factor(iterator);
        }
    }

    function factor(iterator) {
        if (iterator.currentItem() == '(') {
            match(iterator, '(');
            exp(iterator);
            match(iterator, ')');
        } else
            digit(iterator);
    }

    function digit(iterator) {
        if (iterator.currentItem() == 'num')
            match(iterator, iterator.currentItem());
        else
            erros.push("Expected a num. Got '" + iterator.currentItem() + "'");
    }

    function match(iterator, c) {
        if (iterator.currentItem() == c)
            iterator.index = iterator.index + 1; // advance pointer
        else if (iterator.index >= tokensList.length)
            erros.push("Pointer went beyond the end of the string (forgot '$'?).");
        else
            erros.push("Unexpected character '" + iterator.currentItem() + "'. Expected '" + c + "'.");
    }

    return resultAsString
    console.log(erros)
}
