import {
    Panel
} from 'rsuite';

function CardLex({response, onSelect, activeKey, ...props}) {
    //css
    const panelStyle = {
        marginTop: "2%"
    }


    let responseList = response
    console.log(response)
    return (

        <Panel header="Analisis Sintáctico" collapsible bordered style={panelStyle}>
            <div >
                {responseList}
            </div>
        </Panel>



    );
}

export default CardLex;
