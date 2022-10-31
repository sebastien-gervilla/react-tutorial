import React from 'react';
import Code from '../components/Code';
import Info from '../components/Info';
import Step from '../components/Step';

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
                        <p>J'apellerais le mien 'react-note-app', pour un futur tutoriel ;D</p>
                    ]} />
                    <Step number={1} title={"Installation des packages"} components={[
                        <Info text={"Un package est un ensemble versionné de fonctionnalités."} />,
                        <p className='text'>Une fois votre dossier ouvert dans VS Code, commencez par ouvrir le terminal,</p>,
                        <p className='text'>puis tapez <Code code={'npx create-react-app .'} /></p>,
                        <p>Notez le point à la fin, qui est le chemin où l'on veut créer notre application.</p>,
                        <p>Si tout s'est bien passé, vous devriez avoir ce résultat :</p>,
                        <img src="" alt="" />
                    ]} />
                </div>
            </div>
        </section>
    );
};

export default FirstPart;