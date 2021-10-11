import React, {useState} from 'react';
import automaton from "../Analizador-lexico/automaton";
import CardLex from './CardLex';
import {CodeEditorEditable} from 'react-code-editor-editable'
import 'highlight.js/styles/atom-one-dark.css';
import {
    Form,
    FormGroup,
    ControlLabel,
    Button,
    ButtonToolbar,
    Panel
} from 'rsuite';
import CardSin from "./CardSin";
import syntaxAnalyzer from "../Analizador-de-sintaxis/structures/syntaxAnalyzer";
import syntaxAnalyzer2 from "../Analizador-de-sintaxis/structures/syntaxAnalyzer2";


const panelStyle = {
    /* Extra small devices (phones, 600px and down) */
    width: "60rem"
}


function FormSirio({onSelect, activeKey, ...props}) {
    const [cardLex, setCardLex] = useState();
    const [cardSin, setCardSin] = useState();
    const [textArea, setTextArea] = useState("void main() {\n  print('Hello, World!');\n}");

    function showCard() {
        if (0 !== textArea.trim().localeCompare("")) {
            let tokens = []
            let response=""
            setCardLex()
            tokens = automaton(textArea.trim())
            response = syntaxAnalyzer2(tokens)
            setCardLex(
                <CardLex
                    tokens={tokens}
                />
            )
            setCardSin(
                <CardSin
                    response={response}
                />
            )


        } else {
            setCardLex()
        }
    }

    function clear() {
        setTextArea("")
        setCardLex()
        setCardSin()
    }

    return (
        <div>
            <Panel header="Analizador léxico y sintáctico" bordered style={panelStyle}>
                <p/>
                <Form fluid>
                    <FormGroup>
                        <ControlLabel>Código Dart</ControlLabel>
                        <CodeEditorEditable
                            value={textArea}
                            setValue={setTextArea}
                            width='100%'
                            height='40vh'
                            language='dart'
                            inlineNumbers
                            borderRadius="8px"
                            tabSize={5}
                        />

                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar>
                            <Button appearance="default" color="green" onClick={showCard}>Analizar</Button>
                            <Button appearance="default" onClick={clear}>Limpiar</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </Panel>
            {cardLex}
            {cardSin}
        </div>
    );
}

export default FormSirio;
