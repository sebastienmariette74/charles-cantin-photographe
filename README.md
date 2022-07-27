# Projet Charles CANTIN

# Déploiement #

## Description : ##

Dans le cadre d'une évaluation lors de ma formation de Developpeur Web et Web Mobile, j'ai réalisé ce projet axé front-end. Il consistait à créer le portfolio d'un photographe contenant 4 pages (accueil, galerie, tarifs, contact). L'intérêt de cet exercice a été d'utiliser le générateur de site statique Eleventy (flexibilité) couplé à un CMS headless tel que NetlifyCMS afin que le propriétaire du site puisse faire les modifications qu'il souhaite.

Les documents annexes sont disponibles dans le dossier "annexes" :
- Charte graphique, wireframes et mockups

Le maquettage a été réalisé à partir de Figma. Il est visible à cette adresse : https://www.figma.com/file/ULRVRPpFkBPhsRvI9dHcM4/Charles-CANTIN?node-id=0%3A1

## Installation en locale ##

Pour récupérer le projet, 

## Récupération du projet

Utiliser GIT Clone pour récupérer le dépôt

```bash
git clone https://github.com/codeBlooming/mediatheque.git
```

## Installation

```bash
# Déplacement dans le dossier
cd mediatheque

# Installation des dépendances
composer install

# Création de la base de données
php bin/console doctrine:database:create

# Création des tables (migrations)
php bin/console doctrine:migrations:migrate

# Insertions des jeux de données (fixtures)
php bin/console doctrine:fixtures:load --no-interaction
```


## Utilisation
Deux options pour lancer le serveur de développement PHP :
- Si vous avez installé **Symfony** :
```bash
symfony server:start
```
- Si vous utilisez **Composer**, il faut installer le **Web Server Bundle** :
```bash
composer require symfony/web-server-bundle --dev
php bin/console server:start
```

## Copies
Certains documents demandés sont aussi accessibles sur Google
[Drive](https://drive.google.com/drive/folders/1HOqJ9BdoCrocTIP_uzNLjyzJKpUWQuUs?usp=sharing)