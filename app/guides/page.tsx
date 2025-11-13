import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guides & Modèles - La Puce à L\'oreille',
  description: 'Templates narratifs, checklists de documentation, guides de sécurité et outils pratiques pour structurer votre démarche de lanceur d\'alerte.',
  keywords: ['template lanceur alerte', 'checklist documentation', 'guide sécurité', 'modèle témoignage', 'outils whistleblower'],
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">
              Guides & Modèles
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl">
            Des outils pratiques pour structurer votre histoire, organiser vos preuves et naviguer votre démarche en toute confiance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ressources pratiques pour votre démarche
          </h2>
          <p className="text-lg text-slate-700 mb-4">
            Cette page regroupe des templates, checklists et guides conçus pour vous aider à structurer votre témoignage, documenter vos preuves et protéger vos communications. Tous les outils sont gratuits et anonymes.
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <p className="text-teal-900 flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>
                <strong>Note :</strong> Ces ressources sont des guides généraux. Pour un conseil juridique personnalisé, consultez toujours un avocat spécialisé en droit du travail ou en protection des lanceurs d'alerte.
              </span>
            </p>
          </div>
        </div>

        {/* Section 1: Narrative Templates */}
        <section id="templates" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Templates Narratifs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Template 1: Basic Testimony */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Modèle de Témoignage de Base</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-4">
                  Structure simple pour raconter votre histoire de manière claire et factuelle.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Sections incluses :</h4>
                <ul className="space-y-1 mb-4 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Contexte professionnel (rôle, secteur, période)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Faits observés (chronologie détaillée)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Impact et conséquences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Preuves disponibles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Actions déjà entreprises
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger le template (.docx)
                </button>
                <p className="text-xs text-slate-500 mt-2 text-center">Format Microsoft Word / Google Docs</p>
              </div>
            </div>

            {/* Template 2: Chronological Timeline */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Chronologie Détaillée</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-4">
                  Template pour organiser les événements par ordre chronologique avec dates précises.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Fonctionnalités :</h4>
                <ul className="space-y-1 mb-4 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Tableau chronologique avec colonnes (date, événement, témoins, preuves)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Codes couleur pour catégoriser les événements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Champs pour liens vers preuves documentaires
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Section pour notes et observations
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger le template (.xlsx)
                </button>
                <p className="text-xs text-slate-500 mt-2 text-center">Format Excel / Google Sheets</p>
              </div>
            </div>

            {/* Template 3: Evidence Organization */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Registre de Preuves</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-4">
                  Système de classification pour organiser et référencer toutes vos preuves.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Colonnes incluses :</h4>
                <ul className="space-y-1 mb-4 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    ID unique pour chaque preuve
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    Type de document (email, photo, enregistrement, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    Date et source
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    Résumé et pertinence
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    Statut de vérification
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger le template (.xlsx)
                </button>
                <p className="text-xs text-slate-500 mt-2 text-center">Format Excel / Google Sheets</p>
              </div>
            </div>

            {/* Template 4: Communication Log */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Journal de Communications</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-4">
                  Template pour documenter toutes vos communications liées à votre signalement.
                </p>
                <h4 className="font-semibold text-slate-900 mb-2">Contenu :</h4>
                <ul className="space-y-1 mb-4 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Date et heure précises
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Personnes impliquées (noms, rôles)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Canal utilisé (email, téléphone, réunion)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Résumé de l'échange
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Actions convenues ou réponses reçues
                  </li>
                </ul>
                <button className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger le template (.docx)
                </button>
                <p className="text-xs text-slate-500 mt-2 text-center">Format Microsoft Word / Google Docs</p>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Checklists */}
        <section id="checklists" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Checklists Pratiques</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Checklist 1: Before You Start */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Avant de Commencer</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>☐ Consulté un avocat spécialisé</li>
                <li>☐ Compris mes droits légaux</li>
                <li>☐ Identifié le canal de signalement approprié</li>
                <li>☐ Évalué les risques personnels</li>
                <li>☐ Préparé un plan de protection</li>
                <li>☐ Informé mes proches de confiance</li>
                <li>☐ Sécurisé mes communications</li>
              </ul>
              <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition text-sm font-medium">
                Télécharger PDF
              </button>
            </div>

            {/* Checklist 2: Evidence Collection */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Collecte de Preuves</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>☐ Emails et correspondances</li>
                <li>☐ Documents internes (rapports, notes)</li>
                <li>☐ Captures d'écran horodatées</li>
                <li>☐ Enregistrements (si légaux)</li>
                <li>☐ Témoignages écrits de collègues</li>
                <li>☐ Données financières ou techniques</li>
                <li>☐ Chronologie complète des événements</li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                Télécharger PDF
              </button>
            </div>

            {/* Checklist 3: Digital Security */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Sécurité Numérique</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>☐ Email chiffré configuré (ProtonMail)</li>
                <li>☐ Messagerie sécurisée (Signal)</li>
                <li>☐ VPN activé pour navigation</li>
                <li>☐ Stockage cloud sécurisé</li>
                <li>☐ Mots de passe forts et uniques</li>
                <li>☐ Authentification à deux facteurs</li>
                <li>☐ Sauvegardes chiffrées multiples</li>
              </ul>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium">
                Télécharger PDF
              </button>
            </div>

            {/* Checklist 4: Communication Strategy */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Stratégie de Communication</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>☐ Identifié le destinataire approprié</li>
                <li>☐ Préparé un résumé clair (1 page)</li>
                <li>☐ Structuré le dossier complet</li>
                <li>☐ Anticipé les questions probables</li>
                <li>☐ Défini mes limites de divulgation</li>
                <li>☐ Établi un plan de suivi</li>
                <li>☐ Préparé une réponse aux médias (si nécessaire)</li>
              </ul>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium">
                Télécharger PDF
              </button>
            </div>

            {/* Checklist 5: Personal Protection */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Protection Personnelle</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>☐ Documenté toute forme de représailles</li>
                <li>☐ Conservé copies de tous mes documents RH</li>
                <li>☐ Noté tous changements inhabituels au travail</li>
                <li>☐ Identifié témoins potentiels</li>
                <li>☐ Consulté soutien psychologique</li>
                <li>☐ Préparé plan financier d'urgence</li>
                <li>☐ Informé syndicat ou représentant (si applicable)</li>
              </ul>
              <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition text-sm font-medium">
                Télécharger PDF
              </button>
            </div>

            {/* Checklist 6: Post-Disclosure */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Après le Signalement</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-4">
                <li>☐ Conservé preuve de transmission</li>
                <li>☐ Établi échéancier de suivi</li>
                <li>☐ Documenté toute réponse reçue</li>
                <li>☐ Surveillé changements dans mon environnement</li>
                <li>☐ Maintenu journal des événements</li>
                <li>☐ Évalué besoin d'escalade</li>
                <li>☐ Préservé confidentialité autant que possible</li>
              </ul>
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-medium">
                Télécharger PDF
              </button>
            </div>

          </div>
        </section>

        {/* Section 3: Security Guides */}
        <section id="security-guides" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Guides de Sécurité</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Security Guide 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Sécuriser vos Communications</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Guide complet pour protéger vos emails, messages et appels téléphoniques.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Contenu du guide :</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Configurer ProtonMail pour emails chiffrés</li>
                  <li>• Utiliser Signal pour messagerie sécurisée</li>
                  <li>• Choisir et configurer un VPN fiable</li>
                  <li>• Naviguer anonymement avec Tor</li>
                  <li>• Éviter les pièges de surveillance</li>
                </ul>
              </div>
              <Link
                href="/securite#communications"
                className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Lire le guide complet →
              </Link>
            </div>

            {/* Security Guide 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Stockage Sécurisé de Preuves</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Comment organiser et protéger vos documents sensibles.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Contenu du guide :</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Chiffrer vos fichiers locaux</li>
                  <li>• Utiliser des services cloud sécurisés</li>
                  <li>• Créer des sauvegardes multiples</li>
                  <li>• Protéger vos métadonnées</li>
                  <li>• Gérer vos mots de passe en sécurité</li>
                </ul>
              </div>
              <Link
                href="/securite#stockage"
                className="block w-full bg-purple-600 text-white text-center px-4 py-3 rounded-lg hover:bg-purple-700 transition font-medium"
              >
                Lire le guide complet →
              </Link>
            </div>

            {/* Security Guide 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Protection de l'Identité</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Techniques pour préserver votre anonymat et éviter l'identification.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Contenu du guide :</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Rédiger sans révéler votre style</li>
                  <li>• Supprimer métadonnées des documents</li>
                  <li>• Éviter les détails qui vous identifient</li>
                  <li>• Utiliser des outils d'anonymisation</li>
                  <li>• Gérer les contacts avec médias/autorités</li>
                </ul>
              </div>
              <Link
                href="/securite#anonymat"
                className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Lire le guide complet →
              </Link>
            </div>

            {/* Security Guide 4 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Détecter les Représailles</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Comment identifier et documenter les actes de représailles.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">Contenu du guide :</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Types de représailles (directes et indirectes)</li>
                  <li>• Documenter les changements de traitement</li>
                  <li>• Constituer un dossier de preuves</li>
                  <li>• Identifier témoins et alliés</li>
                  <li>• Recours juridiques disponibles</li>
                </ul>
              </div>
              <Link
                href="/securite#represailles"
                className="block w-full bg-amber-600 text-white text-center px-4 py-3 rounded-lg hover:bg-amber-700 transition font-medium"
              >
                Lire le guide complet →
              </Link>
            </div>

          </div>
        </section>

        {/* Download All Resources CTA */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 text-white text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-teal-200" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" />
          </svg>
          <h2 className="text-3xl font-bold mb-3">Pack Complet de Ressources</h2>
          <p className="text-xl mb-6 text-teal-50 max-w-2xl mx-auto">
            Téléchargez tous les templates, checklists et guides en un seul fichier ZIP pour un accès hors ligne.
          </p>
          <button className="bg-white text-teal-700 px-8 py-4 rounded-lg hover:bg-teal-50 transition font-bold text-lg inline-flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger le Pack Complet (15 MB)
          </button>
          <p className="text-sm text-teal-100 mt-3">
            Dernière mise à jour : Novembre 2025 • Format : ZIP (PDF, DOCX, XLSX)
          </p>
        </div>

        {/* Next Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Link href="/commencer" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Comment Commencer</h3>
            <p className="text-sm text-slate-600">Guide complet des 5 étapes pour structurer votre démarche</p>
          </Link>

          <Link href="/securite" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Sécurité & Droits</h3>
            <p className="text-sm text-slate-600">Comprendre vos protections légales et comment vous sécuriser</p>
          </Link>

          <Link href="/contact" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Anonyme</h3>
            <p className="text-sm text-slate-600">Posez vos questions de manière confidentielle</p>
          </Link>
        </div>

      </div>
    </div>
  )
}
