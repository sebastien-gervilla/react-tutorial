import React from 'react';
import Code from '../components/Code';
import Info from '../components/Info';
import Step from '../components/Step';

import CreateReactApp from '../assets/images/create-react-app.png';
import Dependencies from '../assets/images/dependencies.png';
import IndexHTML from '../assets/images/index-html.png';
import IndexJS from '../assets/images/index-js.png';
import FinalResult from '../assets/images/final-result.PNG';

const FirstPart = () => { // USE CLIPBOARD FOR CODE
    return (
        <section className="first-part">
            <div className="main-area">
                <div className="main-content">
                    <Step number={0} title={"Prérequis"} components={[
                        <p>Avant de commencer le tutoriel, il vous faudra installer certains outils :</p>,
                        <ul>
                            <li>- <a href="https://nodejs.org/en/">NodeJS</a> : Un environnement d'exécution JavaScript</li>
                            <li>- NPM : Le gestionnaire de packages correspondant. (Vient avec NodeJS)</li>
                            <li>- IDE : Une éditeur de code (Ici j'utilise <a href="https://code.visualstudio.com/">VS Code</a>)</li>
                        </ul>,
                        <p className='text'>Une fois ceux-ci installés, créez un dossier pour votre application.</p>,
                        <p>J'apellerais le mien "react-note-app", pour un futur tutoriel ;D</p>
                    ]} />
                    <Step number={1} title={"Installation des packages"} components={[
                        <Info text={"Un package est un ensemble versionné de fonctionnalités."} />,
                        <p className='text'>Une fois votre dossier ouvert dans VS Code, commencez par ouvrir le terminal,</p>,
                        <p className='text'>puis tapez <Code code={'npx create-react-app .'} /></p>,
                        <p>Notez le point à la fin, qui est le chemin où l'on veut créer notre application.</p>,
                        <p>Si tout s'est bien passé, vous devriez avoir ce résultat :</p>,
                        <img src={CreateReactApp} alt="Create React App Result" />,
                        <p>On va ensuite installer les packages utilisés pour ce tutoriel.</p>,
                        <ul>
                            <li>- react-router-dom : Permet de gérer vos routes en React.</li>
                            <li>- sass : Un préprocesseur pour CSS, le rendant plus lisible et maintenable.</li>
                        </ul>,
                        <p>Tapez donc <Code code={'npm install -s react-router-dom sass'} /></p>,
                        <Info text={"Le -s est un raccourci de l'option --silent, masquant le texte de sortie de npm."} />,
                        <p className='text'>Une fois installés, les packages sont inscrits dans les "dependencies" du "package.json".</p>,
                        <p>"dependencies" signifient qu'ils sont nécéssaires à l'exécution de votre application. </p>,
                        <img src={Dependencies} alt="Dependencies in package.json" />
                    ]} />
                    <Step number={2} title={"Nettoyage du projet"} components={[
                        <p className='text'>Cette manière de créer une application React est très pratique,</p>,
                        <p className='text'>mais elle a tout de même un inconvénient : elle est très générale, </p>,
                        <p>et génère donc du code et des fichiers inutiles pour le commun des mortels.</p>,
                        <p>On va donc se faire un plaisir de tout nettoyer, en commançant par le dossier "/public".</p>,
                        <p className='text'>Ici on va garder uniquement les fichiers "favicon.ico", ainsi que "index.html",</p>,
                        <p>que vous allez ensuite ouvrir, pour y retirer tout le code inutile : </p>,
                        <img src={IndexHTML} alt="Index after cleanup" />,
                        <p className='text'>Vous pouvez également changer le titre, pour moi ça sera "React Note Application",</p>,
                        <p>ainsi que la description, voire même la langue si vous le souhaitez.</p>,
                        <p>Quand c'est fait, on peut passer directement au dossier "/src".</p>,
                        <p className='text'>Ici encore on ne va garder que deux fichiers: "App.js" ainsi que "index.js",</p>,
                        <p>que l'on va nettoyer comme suit :</p>,
                        <p className='text' style={{fontStyle: 'italic'}}>index.js</p>,
                        <img src={IndexJS} alt="IndexJS after cleanup" />
                    ]} />
                    <Step number={3} title={"Organisation du projet"} components={[
                        <p className='text'>Il y a plein de façons d'organiser sont projet, et ça va surtout dépendre de l'objectif de celui-ci.</p>,
                        <p>Ici je vais vous montrer la mienne, mais libre à vous de la modifier selon vos besoins&nbsp;!</p>,
                        <p>Pour commencer, on va se rendre dans "/src", et créer 4 dossiers :</p>,
                        <ul>
                            <li>- "components" : Tous nos composants réutilisables React.</li>
                            <li>- "pages" : Les différentes pages de notre application.</li>
                            <li>- "styles" : Nos feuilles de styles. (SASS pour ce tutoriel).</li>
                        </ul>,
                        <Info text={"Pour VS Code je vous recommande fortement l'extension Material Icon Theme."} />,
                        <p className='text'>Une fois ça fait, vous allez ensuite créer un autre dossier "assets",</p>,
                        <p>dans lequel on va ajouter 2 autres dossiers (sa fé bcp là nn ? oui.) :</p>,
                        <ul>
                            <li>- "fonts" : Vos typographies.</li>
                            <li>- "images" : Toutes vos images.</li>
                        </ul>,
                        <p>Si vous avez suivi <i>&nbsp;chacune&nbsp;</i> des étapes :upsidedown_smile:, vous devriez avoir ce résultat :</p>,
                        <img src={FinalResult} alt="Final result after tutorial" />
                    ]} />
                </div>
            </div>
        </section>
    );
};

export default FirstPart;