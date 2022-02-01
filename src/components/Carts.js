import React, {useState} from 'react'
import  './carts.css'
import axios from 'axios'
import close from '../images/close.png'
import coeur from '../images/coeur.png'

const Carts = () => {
    const [gryffondor, updateGryffondor] = useState(0);
    const [serpentard, updateSerpentard] = useState(0);
    const [poufsouffle, updatePoufsouffle] = useState(0);
    const [serdaigle, updateSerdaigle] = useState(0);
    const [phrases, updatePhrases] = useState('');
    const [maison, updateMaison] = useState('');
    const [images, updateImages] = useState('');
    const monsteraPrice = 8;
    const [compteur, updateCompteur] = useState(0);
    
    let phrase = '';

    const ExecutionYes = () => {
        axios.get('phrases.json')
            .then((res)=>{
                const int = Math.floor(Math.random() * 32);
                updatePhrases(res.data[int].phrase)
                updateMaison(res.data[int].maison)
                updateImages(res.data[int].image)

            }).catch((err)=>{
                console.log(err);
            })
        updateCompteur(compteur + 1);
        switch(maison) {
            case "Gryffondor" : 
                return updateGryffondor(gryffondor + 1)
            case "Serpentard" : 
                return updateSerpentard(serpentard + 1)
            case "Poufsouffle" : 
                return updatePoufsouffle(poufsouffle + 1)
            case "Serdaigle" : 
                return updateSerdaigle(serdaigle + 1)
        }   
    }
    const ExecutionNo = () => {
        axios.get('phrases.json')
            .then((res)=>{
                const int = Math.floor(Math.random() * 32);
                updatePhrases(res.data[int].phrase)
                updateMaison(res.data[int].maison)

            }).catch((err)=>{
                console.log(err);
            })
        updateCompteur(compteur + 1);
        switch(maison) {
            case "Gryffondor" : 
                return updateGryffondor(gryffondor + 1)
            case "Serpentard" : 
                return updateSerpentard(serpentard + 1)
            case "Poufsouffle" : 
                return updatePoufsouffle(poufsouffle + 1)
            case "Serdaigle" : 
                return updateSerdaigle(serdaigle + 1)
        }   
    }

    const Affichage = () => {
        
        if (compteur > 20) {
            if (gryffondor > serpentard && gryffondor > poufsouffle && gryffondor > serdaigle ) {
                phrase = 'Tu appartiens à la maison Gryffondor'
            } else if( serpentard > gryffondor && serpentard > poufsouffle && serpentard > serdaigle) {
                phrase = 'Tu appartiens à la maison Serpentard'
            } else if( poufsouffle > gryffondor && poufsouffle > serpentard && poufsouffle > serdaigle) {
                phrase = 'Tu appartiens à la maison PoufSouffle'
            } else {
                phrase = 'Tu appartiens à la maison Serdaigle'
            }
        }     

    } 


    Affichage();
 
    return (
        <div className="background">
            <div className="navbar">
                <h2>Match ta maison Poudlard </h2>
            </div>
            <div className="cards-container">
                
                {
                   phrase == '' 
                    ?<div className="textPhrases">
                       {phrases ?  phrases : <p>Il est temps de découvrir dans quelle maison de Poudlard tu es ! <br /><br />Avec cette nouvelle manière d'aborder le test, il te suffit d'affirmer (coeur) ou de ne pas être d'accord (croix) avec les propositions tirées du quiz de Pottermore. <br /> <br /> Let's go !!!</p>}
                    </div>
                    :<div>
                        {phrase}
                    </div>

                }
                        
   
                
            </div>
            <div className="bouton-container">
                <div className="bouton">
                    <button onClick={ExecutionNo} className="buttonNo"> 
                        <img className="close-size" src={close}/>
                    </button>
                    
                    <button onClick={ExecutionYes} className="buttonYes"> 
                        <img className="coeur-size" src={coeur}/>
                    </button>
                </div>
                
            </div>
            <div className="phrase-bas">
                on est pas sur une app de rencontre donc ça sert à rien de swipe
            </div>
        </div>             
        )
}

export default Carts
