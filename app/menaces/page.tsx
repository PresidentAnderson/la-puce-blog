import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Modèle de Menaces - La Puce à L\'oreille',
  description: 'Comprendre les menaces réelles auxquelles font face les lanceurs d\'alerte : cyber-attaques, représailles, manipulation psychologique. Pour chaque menace : ce qu\'elle est, comment se protéger, et quoi éviter.',
  keywords: ['menaces lanceur alerte', 'cybersécurité whistleblower', 'représailles', 'protection données', 'sécurité numérique'],
  robots: 'index, follow',
}

interface Threat {
  id: string
  title: string
  category: string
  icon: JSX.Element
  description: string
  realExamples: string[]
  howToProtect: string[]
  whatNotToDo: string[]
  severity: 'critical' | 'high' | 'medium'
  relatedGuides: { title: string; href: string }[]
}

const threats: Threat[] = [
  {
    id: 'phishing-faux-emails',
    title: 'Faux emails de prétendus avocats ou journalistes',
    category: 'Cyber-attaques',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    description: "Des acteurs malveillants se font passer pour des avocats, journalistes, ou ONG pour vous soutirer des informations ou accéder à vos preuves.",
    severity: 'critical',
    realExamples: [
      "Email d'un prétendu avocat vous demandant d'envoyer toutes vos preuves par email non chiffré",
      "Faux journaliste d'investigation vous proposant une interview 'urgente' pour récupérer vos documents",
      "Prétendu représentant d'ONG vous invitant à cliquer sur un lien pour 'vérifier votre éligibilité à une aide'",
      "Email imitant le style de votre syndicat vous demandant vos identifiants pour 'dossier confidentiel'"
    ],
    howToProtect: [
      "Vérifiez TOUJOURS l'identité par un canal indépendant (téléphone officiel, site web officiel)",
      "Ne cliquez jamais sur des liens dans des emails non sollicités",
      "Vérifiez l'adresse email exacte (pas juste le nom affiché) : avocat@gmaiI.com vs avocat@gmail.com",
      "Demandez une rencontre en personne ou une vidéoconférence avant de partager quoi que ce soit",
      "Consultez le barreau, l'ordre des journalistes, ou le registre de l'ONG pour vérifier l'existence de la personne",
      "Utilisez un gestionnaire de mots de passe qui détecte les faux sites (Bitwarden, 1Password)"
    ],
    whatNotToDo: [
      "NE PAS envoyer vos preuves par email classique, même à un 'avocat'",
      "NE PAS cliquer sur les liens 'urgents' ou 'expire dans 24h'",
      "NE PAS faire confiance au nom affiché dans l'email (facile à falsifier)",
      "NE PAS donner vos identifiants, même si l'email semble légitime",
      "NE PAS ouvrir les pièces jointes de type .exe, .scr, .bat, .js",
      "NE PAS répondre aux emails suspects (confirme que votre adresse est active)"
    ],
    relatedGuides: [
      { title: 'Reconnaître un email de phishing', href: '/guides#phishing' },
      { title: 'Vérifier l\'identité d\'un contact', href: '/guides#verifier-identite' },
      { title: 'Sécuriser vos communications', href: '/securite#communications' }
    ]
  },
  {
    id: 'represailles-informelles',
    title: 'Représailles informelles et harcèlement indirect',
    category: 'Représailles psychologiques',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    description: "Harcèlement moral sans traces écrites : exclusion sociale, rumeurs, sabotage de votre travail, mise au placard progressive.",
    severity: 'high',
    realExamples: [
      "Exclusion des réunions importantes 'par oubli'",
      "Rumeurs circulant sur votre 'instabilité mentale' ou 'problèmes personnels'",
      "Vos dossiers sont réassignés progressivement sans explication formelle",
      "Collègues qui cessent de vous parler du jour au lendemain",
      "Votre bureau est déplacé dans un endroit isolé ou insalubre",
      "Refus systématique de vos demandes de congés ou formations 'pour raisons de service'"
    ],
    howToProtect: [
      "Documentez TOUT : dates, témoins présents, contexte, votre ressenti",
      "Envoyez-vous des emails à vous-même résumant chaque incident (horodatage)",
      "Demandez des confirmations écrites pour toutes les décisions vous concernant",
      "Enregistrez (si légal dans votre pays) ou prenez des notes détaillées de réunions",
      "Constituez un réseau de témoins de confiance en dehors de l'entreprise",
      "Consultez un médecin du travail pour traçabilité de l'impact sur votre santé",
      "Gardez tous les emails, même ceux qui semblent anodins"
    ],
    whatNotToDo: [
      "NE PAS confronter seul votre harceleur (peut aggraver)",
      "NE PAS ignorer en espérant que ça passe (ça empire généralement)",
      "NE PAS en parler uniquement aux RH sans copie écrite de votre démarche",
      "NE PAS accepter de 'discussions informelles' sans témoin ou trace",
      "NE PAS démissionner sous pression (perte de droits)",
      "NE PAS vous isoler complètement (gardez contact avec syndicat, avocat, proches)"
    ],
    relatedGuides: [
      { title: 'Documenter le harcèlement moral', href: '/guides#harcelement' },
      { title: 'Modèle de journal de bord', href: '/guides#journal-bord' },
      { title: 'Vos recours contre les représailles', href: '/securite#represailles' }
    ]
  },
  {
    id: 'pression-psychologique',
    title: 'Manipulation et pression psychologique',
    category: 'Représailles psychologiques',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    description: "Tentatives de vous faire douter, de minimiser la gravité des faits, ou de vous convaincre de retirer votre alerte 'pour votre bien'.",
    severity: 'high',
    realExamples: [
      "'Ce n'est pas si grave', 'Tu as dû mal comprendre', 'Tu es trop sensible'",
      "'Si tu continues, ta carrière est fichue', 'Personne ne te croira'",
      "'Pense à ta famille', 'Tu vas perdre ton emploi', 'Ça va te coûter cher en avocats'",
      "Promesses de promotion ou augmentation si vous retirez votre alerte",
      "'On va arranger ça en interne, pas besoin d'avocat'",
      "Insinuations sur votre santé mentale : 'Tu as l'air stressé, prends des vacances'"
    ],
    howToProtect: [
      "Notez toutes les tentatives de dissuasion avec dates, personnes, mots exacts",
      "Répondez toujours par écrit (email) : 'Suite à notre conversation du [date]...'",
      "Consultez un avocat AVANT toute négociation avec l'employeur",
      "Parlez-en à un psychologue ou thérapeute spécialisé en trauma professionnel",
      "Rejoignez des groupes de soutien de lanceurs d'alerte",
      "Rappelez-vous pourquoi vous avez signalé (intérêt général, pas intérêt personnel)",
      "Gardez des preuves de toutes les promesses ou menaces"
    ],
    whatNotToDo: [
      "NE PAS accepter de 'transactions' ou 'accords confidentiels' sans avocat",
      "NE PAS retirer votre alerte sous pression",
      "NE PAS croire aux promesses non écrites",
      "NE PAS vous isoler (la manipulation fonctionne mieux dans l'isolement)",
      "NE PAS douter de votre perception des faits (gaslighting classique)",
      "NE PAS négocier seul face à plusieurs personnes (déséquilibre de pouvoir)"
    ],
    relatedGuides: [
      { title: 'Reconnaître la manipulation', href: '/guides#manipulation' },
      { title: 'Soutien psychologique pour lanceurs d\'alerte', href: '/guides#soutien-psy' },
      { title: 'Répondre aux pressions', href: '/guides#repondre-pressions' }
    ]
  },
  {
    id: 'metadata-traces',
    title: 'Métadonnées et traces numériques non effacées',
    category: 'Sécurité numérique',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
      </svg>
    ),
    description: "Vos documents contiennent des métadonnées invisibles (auteur, date, localisation, ordinateur utilisé) qui peuvent révéler votre identité.",
    severity: 'critical',
    realExamples: [
      "PDF créé par 'Jean Dupont' sur ordinateur 'LAPTOP-RH-01' le 15/03/2024 à 14h37",
      "Photo prise avec géolocalisation active (coordonnées GPS dans EXIF)",
      "Document Word avec historique de révisions montrant tous les auteurs",
      "Email envoyé depuis Outlook corporate avec header 'X-Originating-IP'",
      "Capture d'écran avec barre de tâches affichant 'Jean.Dupont@entreprise.com'",
      "Fichier Excel avec nom de l'auteur, département, et version du logiciel utilisé"
    ],
    howToProtect: [
      "Utilisez des outils de nettoyage de métadonnées (MAT2, ExifTool, ou intégré dans Tails OS)",
      "Convertissez vos documents en PDF/A (format archivage sans métadonnées)",
      "Désactivez la géolocalisation sur votre appareil photo",
      "Utilisez des outils comme PDF-XChange Editor pour nettoyer les métadonnées",
      "Imprimez puis scannez (détruit métadonnées mais baisse qualité)",
      "Vérifiez avec ExifTool : `exiftool -all= fichier.pdf` pour supprimer tout",
      "Utilisez des ordinateurs publics ou Tails OS pour manipuler documents sensibles"
    ],
    whatNotToDo: [
      "NE PAS envoyer directement des fichiers créés sur votre ordinateur professionnel",
      "NE PAS prendre des photos avec votre smartphone sans désactiver GPS",
      "NE PAS faire confiance au simple 'clic droit > Propriétés > Supprimer'",
      "NE PAS utiliser Google Docs/Office365 pour documents sensibles (traçabilité cloud)",
      "NE PAS oublier les métadonnées dans les images intégrées dans vos PDF",
      "NE PAS partager des captures d'écran sans flouter infos personnelles"
    ],
    relatedGuides: [
      { title: 'Nettoyer les métadonnées avec MAT2', href: '/guides#mat2' },
      { title: 'Guide Tails OS pour lanceurs d\'alerte', href: '/guides#tails' },
      { title: 'Vérifier vos documents avant envoi', href: '/guides#verifier-docs' }
    ]
  },
  {
    id: 'mots-de-passe-compromis',
    title: 'Mots de passe faibles ou réutilisés',
    category: 'Sécurité numérique',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
      </svg>
    ),
    description: "Utiliser le même mot de passe partout ou des mots de passe faibles permet à l'employeur ou hackers d'accéder à vos comptes.",
    severity: 'critical',
    realExamples: [
      "Mot de passe email perso identique à celui du travail → employeur devine et accède",
      "Mot de passe 'Entreprise2024!' pour tous vos comptes",
      "Email et mot de passe compromis dans une fuite de données LinkedIn → accès à vos autres comptes",
      "Votre mot de passe est votre date de naissance (facile à deviner depuis LinkedIn)",
      "Utilisation de questions secrètes dont les réponses sont publiques (nom de jeune fille de mère, ville de naissance)",
      "Pas de 2FA activée → accès avec juste le mot de passe"
    ],
    howToProtect: [
      "Utilisez un gestionnaire de mots de passe (Bitwarden, 1Password, KeePassXC)",
      "Générez des mots de passe aléatoires de 20+ caractères pour chaque compte",
      "Activez l'authentification à deux facteurs (2FA) PARTOUT où c'est possible",
      "Privilégiez une clé de sécurité physique (YubiKey) pour comptes critiques",
      "Changez IMMÉDIATEMENT vos mots de passe si vous soupçonnez une compromission",
      "N'utilisez JAMAIS le même mot de passe entre comptes pro et perso",
      "Vérifiez si vos emails ont fuité : https://haveibeenpwned.com"
    ],
    whatNotToDo: [
      "NE PAS utiliser des mots de passe comme 'Azerty123', 'Motdepasse!', 'Prenom2024'",
      "NE PAS réutiliser le même mot de passe sur plusieurs comptes",
      "NE PAS stocker vos mots de passe dans un fichier Word/Excel non chiffré",
      "NE PAS utiliser la fonction 'enregistrer le mot de passe' sur ordinateur partagé",
      "NE PAS répondre honnêtement aux questions secrètes (utilisez des réponses aléatoires)",
      "NE PAS partager vos mots de passe par email, SMS, ou téléphone"
    ],
    relatedGuides: [
      { title: 'Installer et utiliser Bitwarden', href: '/guides#bitwarden' },
      { title: 'Activer 2FA sur vos comptes', href: '/guides#2fa' },
      { title: 'Sécurité numérique de base', href: '/securite#bases' }
    ]
  },
  {
    id: 'preuves-mal-organisees',
    title: 'Preuves désorganisées ou stockées de manière non sécurisée',
    category: 'Organisation des preuves',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
    ),
    description: "Preuves dispersées, mal nommées, sans chronologie, ou stockées uniquement sur appareil professionnel ou cloud non chiffré.",
    severity: 'medium',
    realExamples: [
      "Toutes vos preuves sont sur OneDrive de l'entreprise (accessible par IT)",
      "Fichiers nommés 'document1.pdf', 'scan.jpg', 'sans titre (3).docx'",
      "Pas de sauvegarde : disque dur tombe en panne → tout perdu",
      "Preuves mélangées avec documents personnels sans organisation",
      "Pas de chronologie : impossible de prouver la séquence des événements",
      "Photos de documents prises avec smartphone corporate (géolocalisation + cloud auto-backup)"
    ],
    howToProtect: [
      "Créez une structure de dossiers claire : /Chrono, /Emails, /Documents, /Temoignages, /Photos",
      "Nommez vos fichiers : YYYYMMDD_Description_Source.pdf (ex: 20240315_Email_DirFinance_Fraude.pdf)",
      "Stockez sur support externe chiffré (VeraCrypt, BitLocker) ET cloud chiffré (ProtonDrive, Tresorit)",
      "Faites des sauvegardes multiples : 1 locale + 1 cloud + 1 physique chez personne de confiance",
      "Créez un document de synthèse chronologique avec index des preuves",
      "Utilisez un disque dur externe chiffré gardé HORS de chez vous (coffre, ami)",
      "Documentez la chaîne de custody (qui a accédé à quoi, quand)"
    ],
    whatNotToDo: [
      "NE PAS stocker uniquement sur ordinateur ou cloud professionnel",
      "NE PAS utiliser Google Drive/Dropbox/iCloud non chiffré pour documents sensibles",
      "NE PAS mélanger preuves et documents perso (confusion, recherche difficile)",
      "NE PAS oublier de sauvegarder régulièrement (au moins hebdomadaire)",
      "NE PAS utiliser des noms de fichiers vagues ou incompréhensibles",
      "NE PAS partager vos preuves sur messageries non chiffrées (WhatsApp, SMS)"
    ],
    relatedGuides: [
      { title: 'Organiser vos preuves méthodiquement', href: '/guides#organiser-preuves' },
      { title: 'Chiffrer vos fichiers avec VeraCrypt', href: '/guides#veracrypt' },
      { title: 'Checklist de documentation', href: '/guides#checklist-docs' }
    ]
  },
  {
    id: 'surveillance-dispositifs',
    title: 'Surveillance via appareils professionnels',
    category: 'Surveillance',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    ),
    description: "Votre employeur peut surveiller tout ce que vous faites sur ordinateur/téléphone professionnel : emails, sites visités, frappes clavier, écran.",
    severity: 'critical',
    realExamples: [
      "Logiciel de surveillance installé sur ordinateur pro (keylogger, capture d'écran)",
      "Emails professionnels lus par service IT ou direction",
      "Historique de navigation surveillé (sites visités, recherches Google)",
      "Géolocalisation du téléphone professionnel",
      "Caméras de vidéosurveillance au bureau (lecture labiale possible)",
      "Micro du téléphone/ordinateur pro activé à distance"
    ],
    howToProtect: [
      "NE JAMAIS utiliser appareils professionnels pour quoi que ce soit lié à votre alerte",
      "Utilisez votre téléphone personnel avec données mobiles (pas WiFi entreprise)",
      "Faites vos recherches sur ordinateur personnel ou bibliothèque publique",
      "Utilisez Tails OS sur clé USB pour navigation ultra-sécurisée",
      "Désactivez micro et webcam sur votre ordinateur pro (adhésif sur webcam)",
      "Communiquez uniquement via Signal/ProtonMail depuis appareil personnel",
      "Évitez de parler de votre alerte au bureau (même hors micro)"
    ],
    whatNotToDo: [
      "NE PAS googler 'comment devenir lanceur d'alerte' sur ordinateur pro",
      "NE PAS consulter ce site depuis ordinateur ou WiFi entreprise",
      "NE PAS utiliser email professionnel pour contacter avocat/journaliste",
      "NE PAS stocker preuves sur ordinateur pro (même dans dossier caché)",
      "NE PAS faire confiance au mode 'navigation privée' sur appareil pro",
      "NE PAS utiliser téléphone pro pour photos de documents sensibles"
    ],
    relatedGuides: [
      { title: 'Utiliser Tails OS pour anonymat total', href: '/guides#tails' },
      { title: 'Sécuriser vos communications', href: '/securite#communications' },
      { title: 'Détecter la surveillance', href: '/guides#detecter-surveillance' }
    ]
  },
  {
    id: 'isolement-social',
    title: 'Isolement social et épuisement',
    category: 'Santé mentale',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
    description: "Le stress, l'isolement et la pression constante peuvent mener au burn-out, dépression, ou abandon de votre démarche.",
    severity: 'high',
    realExamples: [
      "Vous ne pouvez en parler à personne par peur de fuites",
      "Votre famille ne comprend pas ou vous demande d'arrêter",
      "Insomnie, anxiété, perte de concentration",
      "Vous vous sentez seul face à toute une organisation",
      "Doutes constants : 'Est-ce que j'ai bien fait ?', 'Est-ce que ça vaut le coup ?'",
      "Épuisement financier (frais d'avocat, perte de revenus)"
    ],
    howToProtect: [
      "Consultez un psychologue ou thérapeute spécialisé en trauma professionnel",
      "Rejoignez des groupes de soutien de lanceurs d'alerte (associations, forums anonymes)",
      "Parlez-en à des proches de confiance (famille, amis) pour soutien émotionnel",
      "Établissez des limites : moments où vous ne pensez PAS à l'affaire",
      "Pratiquez auto-soins : sport, méditation, activités qui vous font du bien",
      "Documentez l'impact sur votre santé (certificats médicaux pour dossier)",
      "Préparez-vous financièrement (épargne, aide juridique gratuite)"
    ],
    whatNotToDo: [
      "NE PAS vous isoler complètement (risque de dépression)",
      "NE PAS minimiser l'impact sur votre santé mentale",
      "NE PAS arrêter de prendre soin de vous",
      "NE PAS hésiter à demander de l'aide professionnelle",
      "NE PAS laisser l'affaire consumer 100% de votre vie",
      "NE PAS ignorer les signaux de burn-out (fatigue extrême, cynisme, déconnexion)"
    ],
    relatedGuides: [
      { title: 'Soutien psychologique pour lanceurs d\'alerte', href: '/guides#soutien-psy' },
      { title: 'Associations et groupes de soutien', href: '/guides#associations' },
      { title: 'Prendre soin de sa santé mentale', href: '/guides#sante-mentale' }
    ]
  }
]

export default function MenacesPage() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'red'
      case 'high': return 'orange'
      case 'medium': return 'yellow'
      default: return 'slate'
    }
  }

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'critical': return 'Critique'
      case 'high': return 'Élevé'
      case 'medium': return 'Moyen'
      default: return 'Faible'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-12 h-12 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <h1 className="text-4xl md:text-5xl font-bold">
                Modèle de Menaces
              </h1>
            </div>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Comprendre les menaces réelles auxquelles vous pouvez faire face en tant que lanceur d'alerte.
            </p>
            <p className="text-lg text-red-200">
              Pour chaque menace : ce qu'elle est, comment vous protéger, et ce qu'il ne faut surtout pas faire.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">
                  Pourquoi un modèle de menaces ?
                </h2>
                <p className="text-red-800 leading-relaxed">
                  Connaître les menaces réelles permet de se protéger efficacement. Ce n'est pas pour vous faire peur,
                  mais pour vous préparer. Chaque menace listée ici est documentée et vient de cas réels de lanceurs d'alerte.
                  La bonne nouvelle : chaque menace a une parade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {threats.map((threat) => {
              const severityColor = getSeverityColor(threat.severity)

              return (
                <div
                  key={threat.id}
                  id={threat.id}
                  className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden"
                >
                  {/* Threat Header */}
                  <div className={`bg-${severityColor}-50 border-b border-${severityColor}-200 px-6 py-4`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-14 h-14 bg-${severityColor}-100 rounded-lg flex items-center justify-center text-${severityColor}-700`}>
                          {threat.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-block px-2 py-1 bg-${severityColor}-200 text-${severityColor}-900 text-xs font-bold rounded`}>
                              {threat.category}
                            </span>
                            <span className={`inline-block px-2 py-1 bg-${severityColor}-600 text-white text-xs font-bold rounded`}>
                              Risque {getSeverityLabel(threat.severity)}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900">
                            {threat.title}
                          </h2>
                          <p className="text-slate-700 mt-2">
                            {threat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Threat Content */}
                  <div className="px-6 py-6 space-y-6">
                    {/* Real Examples */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Exemples réels
                      </h3>
                      <ul className="space-y-2">
                        {threat.realExamples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
                            <span className="text-slate-400 font-bold mt-0.5">•</span>
                            <span className="italic">"{example}"</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Protection Measures */}
                    <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                      <h3 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Comment vous protéger
                      </h3>
                      <ul className="space-y-2">
                        {threat.howToProtect.map((measure, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-teal-900">
                            <span className="text-teal-600 font-bold mt-0.5">✓</span>
                            <span className="font-medium">{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What NOT to Do */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                        Ce qu'il ne faut SURTOUT PAS faire
                      </h3>
                      <ul className="space-y-2">
                        {threat.whatNotToDo.map((dont, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-red-900">
                            <span className="text-red-600 font-bold mt-0.5">✗</span>
                            <span className="font-medium">{dont}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Guides */}
                    <div className="pt-4 border-t border-slate-200">
                      <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        Guides associés
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {threat.relatedGuides.map((guide, idx) => (
                          <Link
                            key={idx}
                            href={guide.href}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition"
                          >
                            {guide.title}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Se protéger, c'est augmenter ses chances de réussite
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Chaque menace a une parade. Consultez nos guides pratiques pour mettre en place les bonnes protections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Guides de protection
            </Link>
            <Link
              href="/securite"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sécurité & Droits
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
