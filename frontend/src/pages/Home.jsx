import ImageCs from "../image/CSGO.jpg";

export default function Home() {
  return (
    <main className="pb-5/6 imgP">
      <img
        src={ImageCs}
        alt="CSGO"
        className="w-3/6 my-4 rounded-lg shadow-md"
      />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Counter Strike Global Offensive
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        C’est quoi ?
        <br />
        <br />
        Counter Strike, c’est un peu l’un des ancêtres des jeux de tir. Le
        premier titre de la série est en effet sorti en 2000… soit plusieurs
        années avant le premier épisode de Call of Duty. Ce FPS (First Person
        Shooter), ou jeu de tir à la première personne (le joueur suit l’action
        à travers les yeux de son personnage), a ensuite évolué pour donner
        naissance en 2012 à Counter Strike: Global Offensive, généralement
        abrégé en CS:GO.
        <br />
        <br />
        Dans ce jeu de tir compétitif, deux équipes de joueurs (généralement au
        nombre de cinq) s’affrontent pour empêcher ou perpétrer un acte
        terroriste. La première incarne une troupe d’intervention, les
        antiterroristes, la seconde, les terroristes. Selon le mode de jeu
        choisi, les missions varient, consistant par exemple à parvenir à
        désamorcer une bombe (l’autre équipe tente de son côté de faire échouer
        la manœuvre), à exfiltrer un otage libéré ou, de façon plus classique, à
        éliminer l’équipe adverse lors d’un match à mort. Le mode Wingman
        propose des affrontements à deux contre deux sur des cartes plus
        réduites. Le mode Danger Zone est un mode Battle Royale qui met en
        compétition jusqu’à 18 joueurs, largués sur une île, dans une course de
        survie ultrarapide à l’issue de laquelle il ne doit en rester qu’un.
        <br />
        <br />
        Quel que soit le mode de jeu sélectionné, Counter Strike: Global
        Offensive est, au-delà d’un simple jeu d’action, un titre qui requiert
        des compétences tactiques. Il faut savoir élaborer des stratégies et se
        coordonner pour espérer l’emporter, surtout dans les modes de jeu plus
        avancés (comme le mode compétitif).
        <br />
        <br />
        Commercialisé à l’origine de façon classique, le jeu est devenu en
        décembre 2018 un free-to-play (jeu gratuit) présent sur la plateforme de
        téléchargement Steam. Si le titre est gratuit, il propose en revanche de
        nombreux achats intégrés.
        <br />
        <br />
        CS-GO est l’un des titres les plus joués lors des compétitions de jeux
        vidéo esportives . Il existe de nombreux tournois, qu’il est possible de
        suivre en ligne.
      </p>
    </main>
  );
}
