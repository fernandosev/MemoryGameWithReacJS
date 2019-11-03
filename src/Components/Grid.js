import React, {useState, useEffect} from 'react';
import Card from './Card';

//retorna o vetor passado como parametro com os numeros embaralhados
//Créditos funcao shuffle: https://pt.stackoverflow.com/questions/94646/como-misturar-um-array-em-javascript
const shuffle = (array) => {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

const imgs = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

export default function Grid({width, height}){
    //Guarda a pontuacao do usuário
    const[score, setScore] = useState(0);
    //Guarda qual é o card ativo no momento (Primeiro card que o usuario clicou)
    const[cardActive, setCardActive] = useState([null, null]);
    //Inicia com todas as cartas viradas mostrando os personagens
    const[status, setStatus] = useState(['rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)', 'rotateY(180deg)']);

    //Essa funcao faz as cartar virarem depois de 2 segundos e inicia com a primeira montagem do componentE
    //Por isso o vetor vazio ao final da useState
    useEffect(() => {
        setTimeout(() => {
            setStatus([null, null, null, null, null, null, null, null, null, null, null, null])
        }, 2000);
    }, [])

    //Verifica se o card ativo é igual ao segundo card clicado, se nao vira novamente os dois cards apos meio segundo
    //Se o o usuario acertar ganha um ponto se nao perde um ponto
    const func = (id, img) => {
        //So inicia a funcao se a carta nao estiver sido virada ainda
        if(!status[id-1])
            if(!cardActive[0] && !cardActive[1]){
                let newStatus = [...status];

                newStatus[id-1] = 'rotateY(180deg)';

                setCardActive([img, id]);
                setStatus(newStatus);
            }else{
                let newStatus = [...status];

                newStatus[id-1] = 'rotateY(180deg)';

                setStatus(newStatus);

                if(img%6 !== cardActive[0]%6){
                    let newStatus = [...status];

                    newStatus[id-1] = null;
                    newStatus[cardActive[1]-1] = null;

                    setScore(score-1);

                    setTimeout(() => {
                        setStatus(newStatus);
                    }, 500);
                }else{
                    setScore(score+1);
                }

                setCardActive([null, null]);
            }
    }

    return(
        <>
            Score: {score}
            <div className='container' style={{width, height}}>
                <Card width={84} height={108} img={imgs[0]} position={1} status={status[0]} func={func}/>
                <Card width={84} height={108} img={imgs[1]} position={2} status={status[1]} func={func}/>
                <Card width={84} height={108} img={imgs[2]} position={3} status={status[2]} func={func}/>
                <Card width={84} height={108} img={imgs[3]} position={4} status={status[3]} func={func}/>
                <Card width={84} height={108} img={imgs[4]} position={5} status={status[4]} func={func}/>
                <Card width={84} height={108} img={imgs[5]} position={6} status={status[5]} func={func}/>
                <Card width={84} height={108} img={imgs[6]} position={7} status={status[6]} func={func}/>
                <Card width={84} height={108} img={imgs[7]} position={8} status={status[7]} func={func}/>
                <Card width={84} height={108} img={imgs[8]} position={9} status={status[8]} func={func}/>
                <Card width={84} height={108} img={imgs[9]} position={10} status={status[9]} func={func}/>
                <Card width={84} height={108} img={imgs[10]} position={11} status={status[10]} func={func}/>
                <Card width={84} height={108} img={imgs[11]} position={12} status={status[11]} func={func}/>
            </div>
        </>
    )
}