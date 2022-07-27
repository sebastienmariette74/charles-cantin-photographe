# Projet Charles CANTIN - Photographe #

## Description : ##

Dans le cadre d'une évaluation lors de ma formation de Developpeur Web et Web Mobile, j'ai réalisé ce projet axé front-end. Il consistait à créer le portfolio d'un photographe contenant 4 pages (accueil, galerie, tarifs, contact). L'intérêt de cet exercice a été d'utiliser le générateur de site statique Eleventy couplé à un CMS headless tel que NetlifyCMS afin que le propriétaire du site puisse faire les modifications qu'il souhaite.


Les documents annexes sont disponibles dans le dossier "annexes" :
- Charte graphique, wireframes et mockups
  

Le maquettage a été réalisé à partir de Figma. Il est visible à cette adresse : https://www.figma.com/file/ULRVRPpFkBPhsRvI9dHcM4/Charles-CANTIN?node-id=0%3A1

## Déploiement ##

### Installation en locale ###

Si vous souhaitez installer l'application en locale, assurez-vous d'avoir installé [git](https://git-scm.com/downloads) et [nodejs](https://nodejs.org/en/).


Vous pouvez vérifier dans votre terminal :
```
git --version
node -v
npm -v
```


Pour récupérer et installer le projet, placez-vous sur un dossier de travail et tapez les commandes suivantes en ligne de commande :


#### Récupération du projet

```bash
git clone https://github.com/sebastienmariette74/charles-cantin-photographe.git
```


#### Installation du projet

```bash
# Déplacement dans le dossier projet
cd charles-cantin-photographe/

# Installation des dépendances
npm install

# Lancement de l'application
npm start
```
___

### Mise en ligne ###
1. Vous devez créer un repository sur [Github](https://github.com/) puis taper les commandes suivantes à partir de votre dossier projet :
    ```
    git remote add origin  https://github.com/xxxxxxxxxx/nomDuRepository.git
    git branch -M main
    git push -u origin main
    ```


2. Allez sur le site [Netlify](https://www.netlify.com/) et inscrivez-vous si vous n'avez pas encore de compte.
   - Cliquez sur "Add new site/import an existing project/GitHub" et choisissez votre repository.
   - Cliquez sur "Deploy site".

**Changement du nom du site** :
- Cliquez sur "Site settings/Change site name".

**Accès à l'espace administrateur** :
- Cliquez sur "Site settings/Identity/Enable Identity.
- Cliquez sur "Identity/Services/Enable Git Gateway.
- Allez sur votre site en cliquant sur le lien vers le haut de la page netlify.
- Dans la barre d'adresse, à la suite de l'url, tapez '/admin'.
- Cliquez sur Sign up pour créer le compte admin.
- Un email de confirmation vient de vous être envoyé. Cliquez sur le lien. Celui ci vous renvoie sur la page d'accueil du site.
- Dans la barre d'adresse, modifiez l'url en ajoutant le mot admin avant "#confirmation" et validez. Ex : cc-photo.netlify.app/**admin**#confirmation_token=GXctQSSE5SNZktymT0LFUw

**Notifications des formulaires de contact par mail** :
- Cliquez sur "Site settings/Forms/Form notifications/Add notification".
- Cliquez sur "Email notification".
- Entrez votre email, le nom du formulaire concerné et sauvegardez.

