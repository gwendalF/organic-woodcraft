# Suivi du showroom Organic Woodcraft

Dernière vérification : 13 novembre 2026.

## État vérifié

- Les cinq dossiers Drive « Meilleures » contiennent **194 fichiers sources** : 78 créations finies, 29 créations en cours, 26 extérieur/abattage/grumes, 21 atelier et 40 planches.
- **189 photographies distinctes intégrées** dans `src/data/showroom.json`.
- **1 doublon visuel écarté**.
- **4 visuels en attente d’identification** (mises en scène, fichiers commençant par `file_` dans les créations finies). Ils ne sont pas présentés comme des photographies de réalisations.
- Le précédent objectif de 187 était une estimation ; le comptage actuel provient de l’inventaire réel, sans gonfler les chiffres avec des miniatures ou des doublons.
- Les 69 anciennes entrées correspondaient à des photos retrouvées parmi ces sources. Leurs copies et versions redondantes ont été remplacées par un index unique.
- Chaque photo possède une version WebP de 1600 px maximum et une miniature de 640 px maximum. Les coordonnées EXIF ne sont pas recopiées.
- **378 fichiers WebP = 189 photos × 2 formats**, et non 378 photographies.

## Rubriques (une photo peut figurer dans plusieurs rubriques)

| Rubrique | Photos |
| --- | ---: |
| Réalisations terminées | 70 |
| Créations en cours | 29 |
| Extérieur, abattage et grumes | 26 |
| L’atelier | 22 |
| Planches | 57 |
| Essences de bois | 4 |
| Réalisations sur mesure | 36 |
| Tout découvrir — photos uniques | 189 |

Les essences explicitement inscrites sur les photos sont reprises : chêne d’Amérique, chêne, bouleau et châtaignier. Les autres légendes restent descriptives sans inventer une essence, des dimensions ou un prix.

## Navigation et vérifications

- 24 photos affichées au départ, bouton « Voir plus de photos » par lots de 24.
- Filtres, liens vers les rubriques, compteur et visionneuse conservés.
- Visionneuse : boutons précédent/suivant, clavier, fermeture et geste horizontal sur écran tactile.
- Contrôles : présence des 378 assets, dimensions exactes, index sans doublon, compilation Astro et vérification dans le navigateur des filtres, de la visionneuse et de l’affichage progressif.

## Points encore à confirmer

- Origine et usage souhaité des quatre mises en scène non publiées.
- Réalisations antérieures chez **Biocréation Bois** : classement prévu « Réalisations antérieures → Biocréation Bois », après vérification des droits et identification des photos concernées. Ne pas les attribuer à Organic Woodcraft.
- Légende prévue pour ces anciennes réalisations : « Meuble fabriqué par Lucien Duval, d’après les plans de Biocréation Bois, dans le cadre de son activité salariée. Photographie : Lucien Duval. »
- Attendre les précisions de Lucien pour enrichir les essences, dimensions et détails commerciaux des pièces.

## Règles pour les prochains ajouts

1. Comparer le contenu avec les photos déjà publiées avant d’importer.
2. Vérifier le contenu réel et l’attribution de chaque image.
3. Ajouter les deux formats et une seule entrée par photo unique.
4. Recalculer les compteurs à partir de l’index réel.
5. Compiler avant de pousser sur `main` (déploiement Netlify automatique).

## Fichiers de déploiement

Les deux formats des 189 photos sont conservés dans les 39 paquets de `assets/showroom/`. `npm run build` vérifie leurs empreintes SHA-256 et restaure les 378 images avant la compilation Astro. La configuration Netlify appelle cette commande. Les identifiants et liens privés des sources ne sont pas publiés.
