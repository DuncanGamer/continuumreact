import Concert from './Concerts';
import Battle from './/img/Battle-of-the-bands.png'
import Adele from './/img/Adele.png'
import Indie from './/img/Idieair.png'

function ConcertsMaster () {
    return (
        <>
        <div class=" container m-auto pb-5">
            <h3 class="text-3xl text-gray-600  font-bold">CONCERTS</h3>
        </div>

         <div class=" container relative snap-x overflow-x-auto mx-auto flex lg:flex-row gap-y-6 justify-between gap-5 px-6 py-6 ">
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
      </div>
        </>
    )
}
export default ConcertsMaster