'use client'

import Link from 'next/link'
import { useState, ReactNode } from 'react'

// Types for the wizard flow
type SituationType = 'witnessed' | 'retaliation' | 'disclosure' | 'questions' | null

interface StepContent {
  title: string
  description: string
  icon: ReactNode
}

interface PathConfig {
  title: string
  description: string
  color: string
  bgGradient: string
  steps: StepContent[]
  rights: string[]
  risks: string[]
  resources: {
    title: string
    links: { label: string; href: string }[]
  }
}

export default function CommencerPage() {
  const [currentSituation, setCurrentSituation] = useState<SituationType>(null)
  const [currentStep, setCurrentStep] = useState(0)

  // Path configurations for each situation
  const pathConfigs: Record<Exclude<SituationType, null>, PathConfig> = {
    witnessed: {
      title: "J'ai été témoin d'une faute",
      description: "Vous avez observé des pratiques illégales ou contraires à l'éthique dans votre organisation.",
      color: 'blue',
      bgGradient: 'from-blue-600 to-blue-700',
      steps: [
        {
          title: 'Évaluez la gravité',
          description: "S'agit-il d'une violation de la loi, d'un risque pour la santé/sécurité, ou d'une atteinte à l'intérêt général? Documentez précisément ce que vous avez vu.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Collectez des preuves',
          description: "Rassemblez tous les documents, emails, témoignages qui étayent vos observations. Stockez-les en sécurité hors de l'entreprise.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Consultez vos droits',
          description: "Vérifiez si votre situation entre dans le cadre de la protection des lanceurs d'alerte. Consultez un avocat spécialisé si possible.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Choisissez votre canal',
          description: "Commencez par le canal interne si sûr (RH, compliance). Si inefficace ou dangereux, passez au canal externe (autorités) puis public si nécessaire.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          )
        }
      ],
      rights: [
        'Protection contre le licenciement et les représailles',
        'Anonymat préservé si vous le souhaitez',
        'Irresponsabilité pénale pour divulgation d\'informations protégées',
        'Inversion de la charge de la preuve en cas de litige'
      ],
      risks: [
        'Possibles tensions avec vos collègues ou hiérarchie',
        'Processus potentiellement long et stressant',
        'Risque de représailles malgré les protections (à documenter)',
        'Impact sur votre carrière dans certains secteurs'
      ],
      resources: {
        title: 'Guides recommandés',
        links: [
          { label: 'Guide de documentation des preuves', href: '/guides#checklists' },
          { label: 'Vos droits en tant que témoin', href: '/securite' },
          { label: 'Modèles de signalement', href: '/guides#templates' },
          { label: 'Scénarios similaires', href: '/scenarios' }
        ]
      }
    },
    retaliation: {
      title: "J'ai subi des représailles",
      description: "Vous avez signalé une faute et vous subissez maintenant des conséquences négatives.",
      color: 'red',
      bgGradient: 'from-red-600 to-red-700',
      steps: [
        {
          title: 'Documentez tout immédiatement',
          description: "Conservez tous les emails, décisions, témoignages de collègues. Notez dates, heures, contextes de chaque incident de représailles.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Consultez un avocat d\'urgence',
          description: "Les représailles sont illégales. Un avocat spécialisé en droit du travail peut vous aider à faire valoir vos droits immédiatement.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Saisissez les autorités',
          description: "Contactez le Défenseur des droits, l'inspection du travail ou le conseil de prud'hommes selon votre situation.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Protégez-vous',
          description: "Préservez votre santé mentale, informez vos proches, rejoignez des groupes de soutien. Vous n'êtes pas seul.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          )
        }
      ],
      rights: [
        'Nullité de tout licenciement lié à votre alerte',
        'Inversion de la charge de la preuve (l\'employeur doit prouver sa bonne foi)',
        'Dommages et intérêts en cas de représailles avérées',
        'Réintégration possible dans votre poste'
      ],
      risks: [
        'Procédure judiciaire longue et éprouvante',
        'Stress et impact psychologique important',
        'Coûts juridiques (parfois pris en charge par assurances)',
        'Difficulté à retrouver un emploi pendant la procédure'
      ],
      resources: {
        title: 'Aide d\'urgence',
        links: [
          { label: 'Modèle de plainte pour représailles', href: '/guides#templates' },
          { label: 'Contacts juridiques d\'urgence', href: '/contact' },
          { label: 'Vos recours immédiats', href: '/securite#protection' },
          { label: 'Témoignages de lanceurs d\'alerte', href: '/scenarios' }
        ]
      }
    },
    disclosure: {
      title: "Je veux divulguer une information sensible",
      description: "Vous êtes prêt à révéler une information d'intérêt public de manière sécurisée.",
      color: 'purple',
      bgGradient: 'from-purple-600 to-purple-700',
      steps: [
        {
          title: 'Vérifiez la légitimité',
          description: "Assurez-vous que l'information concerne un crime, délit, menace ou préjudice pour l'intérêt général. Consultez la liste des alertes protégées.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Préparez votre dossier',
          description: "Structure narrative claire, preuves vérifiables, chronologie précise. Anonymisez ce qui peut l'être tout en gardant la crédibilité.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Sécurisez vos communications',
          description: "Utilisez Signal, ProtonMail, Tor si nécessaire. Ne communiquez jamais via les outils de votre employeur. Chiffrez vos fichiers.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Choisissez votre stratégie',
          description: "Canal interne d'abord si possible, puis autorités, et enfin médias/public uniquement si les autres échouent ou en cas d'urgence.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          )
        }
      ],
      rights: [
        'Protection totale si respect du parcours graduel (interne > externe > public)',
        'Secret des sources si divulgation à la presse',
        'Immunité pénale pour divulgation d\'informations couvertes par secret professionnel',
        'Protection étendue aux facilitateurs (avocats, journalistes)'
      ],
      risks: [
        'Exposition personnelle et professionnelle maximale',
        'Poursuites possibles si non-respect du cadre légal',
        'Impact durable sur votre réputation et carrière',
        'Stress intense et besoin de soutien psychologique'
      ],
      resources: {
        title: 'Outils de sécurité',
        links: [
          { label: 'Guide de sécurité numérique', href: '/securite#digital' },
          { label: 'Checklist avant divulgation', href: '/guides#checklists' },
          { label: 'Canaux de signalement sécurisés', href: '/securite#canaux' },
          { label: 'Contacts médias et ONG', href: '/contact' }
        ]
      }
    },
    questions: {
      title: "Je ne sais pas encore — j'ai des questions",
      description: "Vous hésitez, vous avez des doutes, ou vous voulez simplement comprendre vos options.",
      color: 'teal',
      bgGradient: 'from-teal-600 to-teal-700',
      steps: [
        {
          title: 'Évaluez votre situation',
          description: "Est-ce bien une alerte d'intérêt général ? Ou un conflit du travail classique ? Utilisez nos scénarios types pour vous situer.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Informez-vous sur vos droits',
          description: "Lisez le cadre légal, les protections disponibles, les conditions à remplir. Comprenez bien ce qui est protégé et ce qui ne l'est pas.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          )
        },
        {
          title: 'Consultez les ressources',
          description: "Parcourez nos guides, templates, études de cas. Voyez comment d'autres ont géré des situations similaires.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          )
        },
        {
          title: 'Parlez-en (de façon confidentielle)',
          description: "Contactez un avocat, une association, ou utilisez notre espace de questions anonymes. Vous n'êtes pas obligé de vous décider tout de suite.",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          )
        }
      ],
      rights: [
        'Droit de consulter un avocat en toute confidentialité',
        'Droit à l\'information sur vos protections légales',
        'Pas d\'obligation de signaler si vous ne vous sentez pas prêt',
        'Droit de poser des questions de façon anonyme'
      ],
      risks: [
        'Inaction prolongée peut aggraver la situation',
        'Difficulté de collecter des preuves après coup',
        'Stress de l\'incertitude',
        'Risque de manquer le moment opportun pour agir'
      ],
      resources: {
        title: 'Par où commencer',
        links: [
          { label: 'Scénarios types et exemples', href: '/scenarios' },
          { label: 'FAQ - Questions fréquentes', href: '/contact#faq' },
          { label: 'Comprendre vos droits', href: '/securite' },
          { label: 'Guides pratiques', href: '/guides' }
        ]
      }
    }
  }

  const handleSituationSelect = (situation: Exclude<SituationType, null>) => {
    setCurrentSituation(situation)
    setCurrentStep(0)
  }

  const handleRestart = () => {
    setCurrentSituation(null)
    setCurrentStep(0)
  }

  const handleNextStep = () => {
    if (currentSituation && currentStep < pathConfigs[currentSituation].steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Initial selection screen
  if (!currentSituation) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h1 className="text-4xl md:text-5xl font-bold">
                Vos Premières 5 Minutes
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Un guide personnalisé basé sur votre situation spécifique.
            </p>
            <div className="bg-teal-900 bg-opacity-50 border border-teal-500 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-teal-100">
                  <strong>100% Confidentiel</strong> — Rien n'est enregistré. Votre navigation reste totalement anonyme et privée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Situation Selection */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quelle situation décrit le mieux votre cas ?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Sélectionnez l'option qui correspond à votre situation pour recevoir un accompagnement personnalisé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Option 1: Witnessed */}
            <button
              onClick={() => handleSituationSelect('witnessed')}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 text-left border-2 border-transparent hover:border-blue-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    J'ai été témoin d'une faute
                  </h3>
                  <p className="text-slate-600">
                    Vous avez observé des pratiques illégales, dangereuses ou contraires à l'éthique dans votre organisation.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                Commencer ce parcours
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Option 2: Retaliation */}
            <button
              onClick={() => handleSituationSelect('retaliation')}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 text-left border-2 border-transparent hover:border-red-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition">
                  <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition">
                    J'ai subi des représailles
                  </h3>
                  <p className="text-slate-600">
                    Vous avez signalé une faute et vous subissez maintenant des conséquences négatives (harcèlement, rétrogradation, licenciement...).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-600 font-medium">
                Obtenir de l'aide immédiate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Option 3: Disclosure */}
            <button
              onClick={() => handleSituationSelect('disclosure')}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 text-left border-2 border-transparent hover:border-purple-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition">
                  <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition">
                    Je veux divulguer une information sensible
                  </h3>
                  <p className="text-slate-600">
                    Vous êtes prêt à révéler une information d'intérêt public et vous cherchez à le faire de manière sécurisée et légale.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-purple-600 font-medium">
                Guide de divulgation sécurisée
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Option 4: Questions */}
            <button
              onClick={() => handleSituationSelect('questions')}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 text-left border-2 border-transparent hover:border-teal-500 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition">
                  <svg className="w-7 h-7 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition">
                    Je ne sais pas encore — j'ai des questions
                  </h3>
                  <p className="text-slate-600">
                    Vous hésitez, vous avez des doutes, ou vous voulez simplement comprendre vos options avant de prendre une décision.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-teal-600 font-medium">
                Explorer mes options
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Guided path view
  const config = pathConfigs[currentSituation]
  const progress = ((currentStep + 1) / config.steps.length) * 100

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with progress */}
      <section className={`bg-gradient-to-br ${config.bgGradient} text-white py-8`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 text-white hover:text-slate-200 transition mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Revenir au choix
          </button>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">{config.title}</h1>
          <p className="text-lg text-slate-200 mb-6">{config.description}</p>

          {/* Progress bar */}
          <div className="bg-white bg-opacity-20 rounded-full h-2 mb-2">
            <div
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-slate-200">
            Étape {currentStep + 1} sur {config.steps.length}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current step content */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`flex-shrink-0 w-16 h-16 bg-${config.color}-100 rounded-lg flex items-center justify-center text-${config.color}-600`}>
              {config.steps[currentStep].icon}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {config.steps[currentStep].title}
              </h2>
              <p className="text-lg text-slate-700">
                {config.steps[currentStep].description}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                currentStep === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Précédent
            </button>

            {currentStep < config.steps.length - 1 ? (
              <button
                onClick={handleNextStep}
                className={`flex items-center gap-2 bg-${config.color}-600 text-white px-6 py-3 rounded-lg hover:bg-${config.color}-700 transition font-medium`}
              >
                Suivant
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <span className="text-sm text-slate-600 font-medium">Parcours terminé</span>
            )}
          </div>
        </div>

        {/* Rights section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Vos droits et protections
          </h3>
          <ul className="space-y-3">
            {config.rights.map((right, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{right}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Risks section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Risques à connaître
          </h3>
          <ul className="space-y-3">
            {config.risks.map((risk, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources section */}
        <div className={`bg-gradient-to-br ${config.bgGradient} rounded-xl shadow-lg p-8 text-white mb-6`}>
          <h3 className="text-2xl font-bold mb-4">{config.resources.title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {config.resources.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 transition px-4 py-3 rounded-lg flex items-center justify-between group"
              >
                <span className="font-medium">{link.label}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Besoin d'aide supplémentaire ?
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Notre plateforme offre des ressources complètes pour vous accompagner à chaque étape.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/guides"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
            >
              Voir tous les guides
            </Link>
            <Link
              href="/contact"
              className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition font-medium"
            >
              Poser une question
            </Link>
            <button
              onClick={handleRestart}
              className="bg-white border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:border-slate-400 transition font-medium"
            >
              Recommencer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
