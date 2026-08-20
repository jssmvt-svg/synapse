# Synapse UMFT

Plateforme bilingue de préparation et d’accompagnement de première année de médecine UMFT.

## Démarrage

```bash
npm run dev
```

## Mise en service sécurisée

### 1. Provisionner l’administrateur

L’inscription publique crée **toujours** un compte étudiant. Après avoir créé le compte de Jessica, un opérateur disposant de l’accès sécurisé à l’environnement peut lui attribuer le rôle administrateur une seule fois :

```bash
npm run provision:admin --workspace=server -- adresse-du-compte-existant
```

Cette commande ne peut promouvoir qu’un compte déjà existant ; elle ne constitue pas une route publique et ne dépend d’aucune adresse inscrite dans le code.

### 2. Créer la formule Stripe

Une fois la connexion Stripe complètement configurée dans Replit, crée ou vérifie la formule mensuelle de première année :

```bash
npm run seed:umft-year-one
```

La commande est idempotente. Elle crée la formule Synapse UMFT à 24,99 € / mois si elle n’existe pas déjà. Le checkout reste volontairement désactivé tant que cette formule et la connexion serveur Stripe ne sont pas disponibles.