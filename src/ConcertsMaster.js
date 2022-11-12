
import Battle from './/img/Battle-of-the-bands.png'
import Adele from './/img/Adele.png'
import Indie from './/img/Idieair.png'

import Artic from './/img/Artic.png'
import BruceSprinting from './/img/Bruce-sprinting.png'
import BryanAdams from './/img/Bryan-Adams.png'


function ConcertsMaster () {
    return (
        <>
        
        
        <Concert
        Image = {Battle}
        Title = "Battle of the bands"
        Text = " CALLING ALL BANDS!ENTRIES ARE NOW OPEN FOR THE BATTLE OF THE BANDS 2022 NATIONAL CHAMPIONSHIP You can register now to take part in this year's event."
        Tikets= "78 Billets restants disponibles"
        />
        <Concert
        Image = {Adele}
        Title = "Adele"
        Text = "On peut retrouver pleins de vidéos de gens qui chantent la toute nouvelle chanson d'Adele. La particularité avec celle-là? C'est la version francophone, qui est chantée. "
        Tikets= "321 Billets restants disponibles"
        />
         <Concert
        Image = {Indie}
        Title = "Air indie"
        Text = "Indie folk L'indie folk est un genre musical ayant émergé dans les années 1990 par des musiciens de rock indépendant inspiré par les musiques folk et ..."
        Tikets= "78 Billets restants disponibles"
        />
        <Concert
        Image = {Artic}
        Title = "Artic"
        Text = " Les Arctic Monkeys seront en concert à l'Accor Arena Bercy de Paris le mardi 9 mai 2023."
        Tikets= "69 Billets restants disponibles"
        />
        <Concert
        Image = {BruceSprinting}
        Title = "Bruce Sprinting"
        Text = "Bruce Springsteen  The E Street Band. Accueil. Bruce Springsteen PARIS lundi. 15. mai 2023. "
        Tikets= "76 Billets restants disponibles"
        />
         <Concert
        Image = {BryanAdams}
        Title = "Bryan Adams"
        Text = "  Bryan Adams, né le 5 novembre 1959 à Kingston (Ontario), est un auteur-compositeur-interprète multi-instrumentiste canadien."
        Tikets= "94 Billets restants disponibles"
        />
    
        </>
    )
}
export default ConcertsMaster