import React from 'react';
import {
	Appear,
	BlockQuote,
	Cite,
	Deck,
	Heading,
	Image,
	Link,
	ListItem,
	List,
	Quote,
	Slide,
	Spectacle,
	Table,
	TableHeaderItem,
	TableItem,
	TableRow,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import plouf from '../assets/plouf.gif';
import boring from '../assets/boring.gif';
import memory from '../assets/memory.gif';
import quizz from '../assets/quizz.gif';
import request from '../assets/request.gif';
import processWeb from '../assets/processWeb.png';
import operation from '../assets/operation.gif';
import teapot from '../assets/teapot.gif';
import pages from '../assets/pages.gif';
import problem from '../assets/problem.gif';
import homework from '../assets/homework.gif';
import summary from '../assets/summary.gif';

// code
import requestCode from '../assets/request.example';
import responseCode from '../assets/response.example';

const theme = createTheme({
	primary: '#00a0e6',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Intro
				</Heading>
				<Heading size={1} fit caps>
					au développement web
				</Heading>
				<Heading size={1} fit caps textColor="black">
					Historique, fonctionnement et outils
				</Heading>
			</Slide>
			<Slide bgColor="black">
				<BlockQuote>
					<Quote>
						Internet est un outil formidable,
						dommage qu'on y perde notre temps à regarder des vidéos de chats.
					</Quote>
					<Cite>Winston Churchill</Cite>
				</BlockQuote>
			</Slide>
			<Slide bgColor="black">
				<Image src={plouf} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Le grand plongeon?
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					On fait quoi avec les technos web?
				</Heading>
				<List>
					<Appear><ListItem><Link href="http://rleonardi.com/interactive-resume/" target="_blank">Portfolio</Link></ListItem></Appear>
					<Appear><ListItem><Link href="http://visaglobe.jam3.net/" target="_blank">Dataviz</Link></ListItem></Appear>
					<Appear><ListItem><Link href="http://www.ro.me/" target="_blank">Clip interactif</Link></ListItem></Appear>
					<Appear><ListItem><Link href="http://codepen.io/Yakudoo/full/YXxmYR/" target="_blank">Des animaux mignons en 3D</Link></ListItem></Appear>
					<Appear><ListItem><Link href="https://www.trainline.fr/" target="_blank">Des apps</Link></ListItem></Appear>
					<Appear><ListItem>Et plein d'autres trucs...</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={boring} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Mais c'est quoi le web??
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Un peu d'histoire
				</Heading>
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					(c'est chiant mais ça vous permettra de gagner au Trivial Poursuit)
				</Heading>
				<List>
					<Appear><ListItem>
						1958 : création du premier modem
					</ListItem></Appear>
					<Appear><ListItem>
						1962 : début du projet ARPA visant à relier des ordinateurs
					</ListItem></Appear>
					<Appear><ListItem>
						1971 : connexion des 1ers ordinateurs de 4 universités américaines
					</ListItem></Appear>
					<Appear><ListItem>
						1971 : Envoi du premier mail par Ray Tomlinson
					</ListItem></Appear>
					<Appear><ListItem>
						1983 : Premier serveur de noms de domaine
					</ListItem></Appear>
					<Appear><ListItem>
						1989 : 100 000 ordinateurs connectés
					</ListItem></Appear>
					<Appear><ListItem>
						1990 : Disparition de l’ARPAnet
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Encore des dates!!
				</Heading>
				<List>
					<Appear><ListItem>
						1991 : Apparition du World Wide Web
					</ListItem></Appear>
					<Appear><ListItem>
						1993 : Apparition du navigateur NSCA Mosaic
					</ListItem></Appear>
					<Appear><ListItem>
						1996 : 10 000 000 ordinateurs connectés
					</ListItem></Appear>
					<Appear><ListItem>
						2000 : explosion d’internet
					</ListItem></Appear>
					<Appear><ListItem>
						2012 : 2 milliards d’utilisateurs dans le monde
					</ListItem></Appear>
					<Appear><ListItem>
						Depuis 2012, vous êtes au courant :)
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={memory} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Des mots à retenir!!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Jouons à retrouver les mot clés de cet historique!
				</Heading>
				<List>
					<Appear><ListItem>
						ordinateurs
					</ListItem></Appear>
					<Appear><ListItem>
						mail
					</ListItem></Appear>
					<Appear><ListItem>
						serveur
					</ListItem></Appear>
					<Appear><ListItem>
						noms de domaine
					</ListItem></Appear>
					<Appear><ListItem>
						World Wide Web
					</ListItem></Appear>
					<Appear><ListItem>
						navigateur
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={quizz} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Quizz time!
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Faire une phrase avec ces mots
				</Heading>
				<List>
					<ListItem>
						ordinateurs
					</ListItem>
					<ListItem>
						mail
					</ListItem>
					<ListItem>
						serveur
					</ListItem>
					<ListItem>
						noms de domaine
					</ListItem>
					<ListItem>
						World Wide Web
					</ListItem>
					<ListItem>
						navigateur
					</ListItem>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={request} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Une histoire de requêtes (et de réponses)
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={2} caps fit>Je souhaite consulter mes mails.</Heading>
				<Image src={processWeb} margin="40px auto 0px" width="850px" />
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Le navigateur ...
				</Heading>
				<List>
					<Appear><ListItem>
						est un logiciel qui permet d'émettre des requêtes
					</ListItem></Appear>
					<Appear><ListItem>
						permet de recevoir des réponses
					</ListItem></Appear>
					<Appear><ListItem>
						sait afficher le résultat de ces réponses
					</ListItem></Appear>
					<Appear><ListItem>
						il y en a plein! Chrome, Firefox, Safari, IE, etc.
					</ListItem></Appear>
					<Appear><ListItem>
						dans plein de versions différentes!
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Un serveur de noms c'est ...
				</Heading>
				<List>
					<Appear><ListItem>
						ce qu'on apelle un DNS (Domain Naming System)
					</ListItem></Appear>
					<Appear><ListItem>
						un serveur qui sait traduire une URL en adresse IP
					</ListItem></Appear>
					<Appear><ListItem>
						DIY: accédez à google.com via son IP, 172.217.18.229
					</ListItem></Appear>
					<Appear><ListItem>
						sans DNS, on taperait que des IPs dans la barre d'adresse!
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Un serveur web c'est ...
				</Heading>
				<List>
					<Appear><ListItem>
						un serveur qui reçoit des requêtes
					</ListItem></Appear>
					<Appear><ListItem>
						envoie des réponses
					</ListItem></Appear>
					<Appear><ListItem>
						page statiques, dynamiques, API, ...
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={operation} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Anatomie d'une requête et d'une réponse
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="markup"
				code={requestCode}
				ranges={[
					{ loc: [0, 1], note: 'Méthode de la requête, ici GET' },
					{ loc: [0, 1], note: 'Page du serveur demandée, ici /' },
					{ loc: [0, 1], note: 'Version du protocole HTTP, ici 1.1' },
					{ loc: [1, 2], note: 'Site web requêté' },
					{ loc: [2, 3], note: 'Type de contenu requêté par le navigateur' },
					{ loc: [3, 4], note: 'Navigateur utilisé, et OS' },
					{ loc: [4, 5], note: 'D\'autres trucs, qui nous intéressent pas' },
				]}
			/>
			<CodeSlide
				transition={[]}
				lang="markup"
				code={responseCode}
				ranges={[
					{ loc: [0, 1], note: 'Réponse du serveur' },
					{ loc: [1, 2], note: 'Date de la réponse' },
					{ loc: [2, 3], note: 'Type de serveur répondant' },
					{ loc: [3, 4], note: 'Type du contenu de la réponse' },
					{ loc: [5, 9], note: 'Contenu de la réponse du serveur' },
				]}
			/>
			<Slide bgColor="black">
				<Image src={teapot} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Les codes HTTP
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					HTTP codes
				</Heading>
				<Table>
					<TableRow>
						<TableHeaderItem>Famille</TableHeaderItem>
						<TableHeaderItem>Description</TableHeaderItem>
						<TableHeaderItem>Exemple</TableHeaderItem>
					</TableRow>
					<TableRow>
						<TableItem>1xx</TableItem>
						<TableItem>Information</TableItem>
						<TableItem />
					</TableRow>
					<TableRow>
						<TableItem>2xx</TableItem>
						<TableItem>Succès</TableItem>
						<TableItem>200 : succès de la requête</TableItem>
					</TableRow>
					<TableRow>
						<TableItem>4xx</TableItem>
						<TableItem>Erreur du client</TableItem>
						<TableItem>404 : resource non trouvée</TableItem>
					</TableRow>
					<TableRow>
						<TableItem>5xx</TableItem>
						<TableItem>Erreur du serveur</TableItem>
						<TableItem>500 : erreur interne du serveur</TableItem>
					</TableRow>
				</Table>
				<Link href="https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP" target="_blank">Liste des codes HTTP</Link>
			</Slide>
			<Slide bgColor="black">
				<Image src={pages} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Les différents types de réponses et pages d'un serveur
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Jouons à naviguer sur internet!
				</Heading>
				<List>
					<Appear><ListItem>
						allez sur votre boite mail
					</ListItem></Appear>
					<Appear><ListItem>
						allez sur votre réseau social préféré
					</ListItem></Appear>
					<Appear><ListItem>
						allez sur <Link href="https://xseignard.github.io/ecv-1" target="_blank">la page de ces slides</Link>
					</ListItem></Appear>
					<Appear><ListItem>
						allez sur <Link href="http://data.nantes.fr/api/getFluiditeAxesRoutiers/1.0/51G0VBM9453IF7R/?output=json" target="_blank">cette page</Link>
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Page statique
				</Heading>
				<List>
					<Appear><ListItem>
						toujours la même
					</ListItem></Appear>
					<Appear><ListItem>
						quelque soit la personne la visitant
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Page dynamique
				</Heading>
				<List>
					<Appear><ListItem>
						contenu adapté au visiteur
					</ListItem></Appear>
					<Appear><ListItem>
						authentification, localisation, langue, etc.
					</ListItem></Appear>
					<Appear><ListItem>
						deux types de pages dynamiques, générée sur le serveur ou sur le navigateur
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} caps lineHeight={1} textColor="black">
					API
				</Heading>
				<List>
					<Appear><ListItem>
						page dynamique ou statique?
					</ListItem></Appear>
					<Appear><ListItem>
						expose des données
					</ListItem></Appear>
					<Appear><ListItem>
						ensuite exploitables depuis une autre page HTML, une app mobile, etc.
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={problem} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Les réjouissances du développement web
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					World Wide Web ou World Wild Web?
				</Heading>
				<List>
					<Appear><ListItem>
						géré par le <Link href="https://www.w3.org/" target="_blank">W3C</Link>
					</ListItem></Appear>
					<Appear><ListItem>
						organisme de spécification et standardisation d'HTML et CSS (entre autres)
					</ListItem></Appear>
					<Appear><ListItem>
						les navigateurs "implémentent" ces spécifications
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					"One web for all", c'est beau mais c'est faux!
				</Heading>
				<List>
					<Appear><ListItem>
						les différents navigateurs n'implémentent pas les spécifications à la même vistesse
					</ListItem></Appear>
					<Appear><ListItem>
						une fonctionalité disponible sur un navigateur et pas sur un autre
					</ListItem></Appear>
					<Appear><ListItem>
						une fonctionalité disponible sur une version d'un navigateur et pas sur une autre
					</ListItem></Appear>
					<Appear><ListItem>
						un cauchemard pour le développeur web...
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Les outils à la rescousse!!!
				</Heading>
				<List>
					<Appear><ListItem>
						il existe une multitude d'outils pour harmoniser ces différences
					</ListItem></Appear>
					<Appear><ListItem>
						votre nouvel ami : <Link href="http://caniuse.com/#feat=css-matches-pseudo" target="_blank">caniuse.com</Link>
					</ListItem></Appear>
					<Appear><ListItem>
						et d'autres bons potes: <Link href="http://www.alsacreations.com/astuce/lire/36-reset-css.html" target="_blank">les resets CSS</Link>, <Link href="https://remysharp.com/2010/10/08/what-is-a-polyfill" target="_blank">les polyfills</Link>
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={homework} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					HTML, HTML5, CSS2, CSS3, WAAAT?
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					C'est vous les profs!
				</Heading>
				<List>
					<Appear><ListItem>
						trouver des références sur l'historique des versions HTML et CSS
					</ListItem></Appear>
					<Appear><ListItem>
						faire un topo là dessus!
					</ListItem></Appear>
					<Appear><ListItem>
						à vous de jouer!
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={summary} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Si on résume
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					les internets c'est
				</Heading>
				<List>
					<Appear><ListItem>
						des serveurs et des clients (navigateurs, app, etc.)
					</ListItem></Appear>
					<Appear><ListItem>
						des requêtes HTTP et des réponses HTTP
					</ListItem></Appear>
					<Appear><ListItem>
						des pages HTML, statiques ou dynamiques, des API
					</ListItem></Appear>
					<Appear><ListItem>
						des standards, différents navigateurs et différentes versions de tout ça!
					</ListItem></Appear>
					<Appear><ListItem>
						vieux et un cauchemard :) (mais pas tant que ça!)
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={plouf} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Alors, on plonge?
				</Heading>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
