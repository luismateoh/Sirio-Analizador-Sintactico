import {
    Panel
} from 'rsuite';

function CardLex({response, onSelect, activeKey, ...props}) {
    //css
    const panelStyle = {
        marginTop: "2%"
    }

    const styleCenter = {
        display: 'flex',
        weight: "20px"
    };

    const dataStyle = {
        fontSize: '1.2em',
        fontWeight: 500,
        justifyContent: 'left',
    };
    const numberStyle = {
        fontSize: '1.2em',
        fontWeight: 500,
        textAlign:"right",
        paddingLeft:"1.2em"
    };

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
