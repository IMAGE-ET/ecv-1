import React from 'react';
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Markdown,
	Quote,
	Slide,
	Spectacle,
	Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import plouf from '../assets/plouf.gif';
import boring from '../assets/boring.gif';
import memory from '../assets/memory.gif';

const images = {

};

preloader(images);

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
		</Deck>
	</Spectacle>
);

export default Presentation;
