import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Scénarios Anonymes - La Puce à L\'oreille',
  description: 'Cas réels anonymisés de lanceurs d\'alerte du secteur privé. Trouvez une situation similaire à la vôtre et découvrez les étapes recommandées.',
  robots: 'index, follow',
}

interface Scenario {
  id: string
  title: string
  category: string
  situation: string
  risks: string[]
  protections: string[]
  mistakes: string[]
  steps: string[]
  relatedGuides: { title: string; href: string }[]
}

const scenarios: Scenario[] = [
  {
    id: 'fraude-comptable',
    title: 'Employé du privé — Fraude comptable',
    category: 'Fraude financière',
    situation: 'Vous travaillez dans une PME et avez découvert que votre supérieur falsifie les états financiers pour masquer des pertes importantes. Vous avez accès aux documents originaux et aux versions modifiées.',
    risks: [
      'Licenciement déguisé (« restructuration »)',
      'Mise au placard ou mutation forcée',
      'Diffamation professionnelle',
      'Poursuites en diffamation si vous rendez public'
    ],
    protections: [
      'Article L.1161-1 du Code du travail (protection contre représailles)',
      'Loi Sapin II si montant > 100 000€',
      'Possibilité de saisir le Défenseur des droits',
      'Protection pénale si vous signaler au Procureur'
    ],
    mistakes: [
      'Ne PAS confronter votre supérieur seul',
      'Ne PAS copier les documents sur votre email personnel (peut être requalifié en vol)',
      'Ne PAS publier sur les réseaux sociaux avant signalement officiel',
      'Ne PAS attendre que la fraude soit découverte par d\'autres'
    ],
    steps: [
      'Photographier les documents avec votre téléphone personnel (pas votre téléphone pro)',
      'Rédiger un récit chronologique précis (dates, montants, personnes impliquées)',
      'Vérifier si votre entreprise a un système d\'alerte interne (obligatoire si > 50 salariés)',
      'Si pas de système interne ou s\'il est compromis, signaler au Procureur de la République',
      'Envoyer une copie au Défenseur des droits pour traçabilité',
      'Consulter un avocat spécialisé avant toute action publique'
    ],
    relatedGuides: [
      { title: 'Comment organiser vos preuves', href: '/guides#organiser-preuves' },
      { title: 'Modèle de signalement au Procureur', href: '/guides#modele-procureur' },
      { title: 'Vos droits selon Sapin II', href: '/securite#sapin-2' }
    ]
  },
  {
    id: 'harcelement-moral',
    title: 'Cadre moyen — Harcèlement moral systémique',
    category: 'Harcèlement',
    situation: 'Vous êtes manager et avez constaté un système de harcèlement moral organisé par la direction RH pour pousser certains employés à démissionner. Vous avez des emails, des témoignages de victimes, et des quotas de « départs négociés ».',
    risks: [
      'Perte de poste de management',
      'Vous-même victime de harcèlement en représailles',
      'Rupture conventionnelle forcée',
      'Blacklistage dans votre secteur'
    ],
    protections: [
      'Article 222-33-2 du Code pénal (harcèlement moral est un délit)',
      'Protection du lanceur d\'alerte même si pas directement victime',
      'Possibilité de saisir l\'inspection du travail',
      'Témoignages de victimes peuvent constituer un faisceau de preuves'
    ],
    mistakes: [
      'Ne PAS utiliser votre email professionnel pour communiquer avec les victimes',
      'Ne PAS promettre aux victimes que vous pouvez les protéger',
      'Ne PAS enregistrer des conversations sans consentement (illégal)',
      'Ne PAS attendre que le harcèlement mène à un suicide ou burn-out grave'
    ],
    steps: [
      'Documenter chaque cas: dates, témoins, emails, actions RH',
      'Demander aux victimes si elles consentent à être citées (avec anonymisation possible)',
      'Compiler les quotas de « départs » si accessibles',
      'Signaler à l\'inspection du travail ET au Procureur (harcèlement moral est pénal)',
      'Prévoir une stratégie de sortie si vous êtes vous-même menacé',
      'Consulter un avocat en droit du travail avant de signaler'
    ],
    relatedGuides: [
      { title: 'Documenter le harcèlement moral', href: '/guides#harcelement' },
      { title: 'Signaler à l\'inspection du travail', href: '/guides#inspection-travail' },
      { title: 'Protection contre les représailles', href: '/securite#represailles' }
    ]
  },
  {
    id: 'pratiques-dangereuses',
    title: 'Sous-traitant — Pratiques dangereuses non signalées',
    category: 'Santé et sécurité',
    situation: 'Vous travaillez comme sous-traitant dans une usine chimique et avez constaté que des normes de sécurité sont régulièrement ignorées. Plusieurs quasi-accidents ont eu lieu, mais la direction cache les rapports pour éviter les inspections.',
    risks: [
      'Rupture immédiate de votre contrat de sous-traitance',
      'Poursuites pour « atteinte à la réputation » de l\'entreprise',
      'Difficultés à retrouver des missions dans le secteur',
      'Pression sur votre entreprise de sous-traitance pour vous sanctionner'
    ],
    protections: [
      'Droit d\'alerte pour danger grave et imminent (même en tant que sous-traitant)',
      'Protection pénale si vous signalez une infraction (risque pour la vie d\'autrui)',
      'Article 40 du Code de procédure pénale (obligation de signaler un crime/délit)',
      'Possibilité de saisir l\'inspection du travail, DREAL, ou ICPE'
    ],
    mistakes: [
      'Ne PAS signaler uniquement à votre employeur (société de sous-traitance)',
      'Ne PAS continuer à travailler si danger imminent pour votre vie',
      'Ne PAS prendre de photos avec un téléphone géolocalisable sur le site',
      'Ne PAS accepter de « prime de silence » ou arrangement à l\'amiable'
    ],
    steps: [
      'Activer le droit de retrait si danger immédiat (article L.4131-1)',
      'Documenter les violations: photos (sans géolocalisation), témoignages, rapports internes',
      'Signaler simultanément à: inspection du travail, DREAL, Procureur',
      'Prévenir votre propre entreprise par écrit (email recommandé)',
      'Garder une trace de toutes vos communications',
      'Consulter un avocat spécialisé en droit de la santé au travail'
    ],
    relatedGuides: [
      { title: 'Droit de retrait: mode d\'emploi', href: '/guides#droit-retrait' },
      { title: 'Signaler un danger grave', href: '/guides#danger-grave' },
      { title: 'Vos droits en tant que sous-traitant', href: '/securite#sous-traitant' }
    ]
  },
  {
    id: 'corruption-contrats',
    title: 'Consultant — Corruption dans l\'attribution de marchés',
    category: 'Corruption',
    situation: 'Vous êtes consultant externe et avez découvert qu\'un directeur d\'achat accepte des pots-de-vin pour attribuer des contrats publics à des entreprises privées. Vous avez des emails compromettants et des traces bancaires indirectes.',
    risks: [
      'Fin immédiate de votre mission de conseil',
      'Poursuites pour « violation du secret des affaires »',
      'Réputation ternie dans le milieu du conseil',
      'Risque de contre-attaque juridique pour diffamation'
    ],
    protections: [
      'Loi Sapin II (corruption = infraction majeure)',
      'Protection du lanceur d\'alerte si canal conforme (AFA, Procureur)',
      'Article 40 CPP: obligation de signaler un crime/délit dont vous avez connaissance',
      'Possibilité de saisir l\'Agence Française Anticorruption (AFA)'
    ],
    mistakes: [
      'Ne PAS tenter de négocier votre silence contre un avantage',
      'Ne PAS copier les emails sur votre ordinateur personnel (risque de vol de données)',
      'Ne PAS « enquêter » vous-même pour obtenir plus de preuves (peut être requalifié)',
      'Ne PAS publier avant signalement officiel (perte de protection)'
    ],
    steps: [
      'Photographier les emails compromettants (écran, pas copie de fichiers)',
      'Rédiger un récit factuel: qui, quoi, quand, montants, preuves',
      'Signaler à l\'AFA (Agence Française Anticorruption) via leur portail',
      'Signaler en parallèle au Procureur de la République',
      'NE PAS en parler à vos collègues ou clients avant signalement',
      'Consulter un avocat spécialisé en droit pénal des affaires'
    ],
    relatedGuides: [
      { title: 'Signaler une corruption (AFA)', href: '/guides#afa-corruption' },
      { title: 'Protection Sapin II expliquée', href: '/securite#sapin-2' },
      { title: 'Organiser vos preuves numériques', href: '/guides#preuves-numeriques' }
    ]
  },
  {
    id: 'discrimination-systeme',
    title: 'RH junior — Discrimination systémique à l\'embauche',
    category: 'Discrimination',
    situation: 'Vous travaillez au service RH et avez découvert que votre directeur RH élimine systématiquement les candidatures de personnes d\'origine maghrébine. Vous avez des statistiques, des emails internes, et des consignes écrites.',
    risks: [
      'Licenciement pour « perte de confiance »',
      'Accusation de « déloyauté » envers l\'entreprise',
      'Difficultés à retrouver un poste RH (secteur où la réputation compte)',
      'Pression psychologique intense'
    ],
    protections: [
      'Article 225-1 du Code pénal (discrimination = délit pénal)',
      'Protection du lanceur d\'alerte même si vous travaillez au service RH',
      'Possibilité de saisir le Défenseur des droits',
      'Protection contre le licenciement si signalement de bonne foi'
    ],
    mistakes: [
      'Ne PAS confronter votre directeur RH directement',
      'Ne PAS utiliser les statistiques d\'embauche sans les anonymiser',
      'Ne PAS publier sur LinkedIn ou réseaux sociaux avant signalement officiel',
      'Ne PAS attendre que la discrimination soit médiatisée'
    ],
    steps: [
      'Compiler les statistiques d\'embauche (% de candidatures vs % d\'embauches par origine)',
      'Anonymiser les noms des candidats rejetés',
      'Capturer les emails/consignes discriminatoires (photos d\'écran)',
      'Signaler au Défenseur des droits (compétent en matière de discrimination)',
      'Signaler au Procureur si vous avez des preuves solides',
      'Consulter un avocat spécialisé en droit de la non-discrimination'
    ],
    relatedGuides: [
      { title: 'Documenter une discrimination', href: '/guides#discrimination' },
      { title: 'Saisir le Défenseur des droits', href: '/guides#defenseur-droits' },
      { title: 'Protection contre le licenciement', href: '/securite#licenciement' }
    ]
  },
  {
    id: 'manipulation-donnees',
    title: 'Data analyst — Manipulation de données clients',
    category: 'Fraude et vie privée',
    situation: 'Vous êtes analyste de données et avez découvert que votre entreprise vend illégalement des données personnelles de clients à des tiers sans consentement. Vous avez des logs système, des contrats de vente, et des emails de la direction commerciale.',
    risks: [
      'Licenciement immédiat pour « violation de confidentialité »',
      'Poursuites pour « violation du secret des affaires »',
      'Difficultés à retrouver un poste dans le secteur tech/data',
      'Risque de poursuites SLAPP (procédures-bâillons)'
    ],
    protections: [
      'RGPD: violation grave = obligation de signaler à la CNIL',
      'Protection du lanceur d\'alerte si signalement de bonne foi',
      'Article 226-16 du Code pénal (détournement de fichiers personnels)',
      'Possibilité de saisir la CNIL directement'
    ],
    mistakes: [
      'Ne PAS copier les bases de données clients (même pour prouver)',
      'Ne PAS accéder à des logs auxquels vous n\'avez pas accès normal (risque de piratage)',
      'Ne PAS publier des captures d\'écran avec des données personnelles visibles',
      'Ne PAS « nettoyer » les logs pour effacer vos traces (obstruction à la justice)'
    ],
    steps: [
      'Capturer les emails/contrats de vente de données (pas les données elles-mêmes)',
      'Rédiger un récit technique: quel système, quelles données, à qui, depuis quand',
      'Signaler à la CNIL via leur portail officiel',
      'Signaler au Procureur si montants importants ou récidive',
      'NE PAS en parler à vos collègues IT/data avant signalement',
      'Consulter un avocat spécialisé en RGPD et protection des données'
    ],
    relatedGuides: [
      { title: 'Signaler une violation RGPD', href: '/guides#rgpd-cnil' },
      { title: 'Protection des lanceurs d\'alerte tech', href: '/securite#tech' },
      { title: 'Organiser vos preuves numériques', href: '/guides#preuves-numeriques' }
    ]
  }
]

export default function ScenariosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Scénarios Anonymes
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Voici 6 cas réels anonymisés de lanceurs d'alerte du secteur privé.
              Chaque scénario inclut la situation, les risques, les protections applicables,
              et les étapes recommandées.
            </p>
            <p className="text-lg text-teal-200">
              Trouvez une situation similaire à la vôtre pour comprendre vos options.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden"
              >
                {/* Scenario Header */}
                <div className="bg-teal-50 border-b border-teal-100 px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        {scenario.title}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">
                        {scenario.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scenario Content */}
                <div className="px-6 py-6 space-y-6">
                  {/* Situation */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      La situation
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  {/* Two Column Layout for Risks and Protections */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Risks */}
                    <div>
                      <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Risques réels
                      </h3>
                      <ul className="space-y-2">
                        {scenario.risks.map((risk, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-red-500 font-bold mt-1">•</span>
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Protections */}
                    <div>
                      <h3 className="text-lg font-bold text-teal-700 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Protections applicables
                      </h3>
                      <ul className="space-y-2">
                        {scenario.protections.map((protection, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-teal-500 font-bold mt-1">✓</span>
                            <span>{protection}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mistakes to Avoid */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                      </svg>
                      Erreurs à éviter absolument
                    </h3>
                    <ul className="space-y-2">
                      {scenario.mistakes.map((mistake, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-red-900">
                          <span className="text-red-600 font-bold mt-1">✗</span>
                          <span className="font-medium">{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps to Take */}
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Étapes recommandées (dans l'ordre)
                    </h3>
                    <ol className="space-y-3">
                      {scenario.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                          <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Related Guides */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                      Ressources liées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {scenario.relatedGuides.map((guide, idx) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Votre situation ne figure pas ici ?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Chaque cas est unique. Consultez nos guides généraux ou contactez-nous de manière anonyme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Voir tous les guides
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact anonyme
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
