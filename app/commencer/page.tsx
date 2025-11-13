import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comment Commencer - La Puce à L\'oreille',
  description: 'Guide complet pour débuter votre démarche de lanceur d\'alerte en toute sécurité. Les 5 étapes essentielles pour structurer, documenter et partager votre témoignage.',
  keywords: ['guide lanceur alerte', 'commencer whistleblowing', 'étapes lanceur alerte', 'protection témoignage', 'documentation preuves'],
}

export default function CommencerPage() {
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
              Comment Commencer
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-200 mb-8">
            Un guide étape par étape pour structurer votre démarche en toute sécurité et confiance.
          </p>
          <div className="bg-teal-900 bg-opacity-50 border border-teal-500 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-teal-100">
                <strong>100% Confidentiel</strong> — Vous pouvez suivre ce guide sans partager aucune information personnelle. Toutes les ressources sont accessibles anonymement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Vous êtes au bon endroit
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700">
              Révéler une information sensible dans le secteur privé peut être intimidant. Vous avez peut-être des doutes, des questions, ou simplement besoin de clarté sur vos droits et vos options.
            </p>
            <p className="text-lg text-slate-700">
              Ce guide vous accompagne à travers <strong>5 étapes essentielles</strong> pour structurer votre démarche de manière sûre, documentée et efficace — que vous choisissiez de signaler en interne, à une autorité, ou publiquement.
            </p>
          </div>
        </div>

        {/* The 5 Steps */}
        <div className="space-y-6">

          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <span className="text-2xl font-bold text-teal-700">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Comprendre vos droits
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Avant toute chose, il est crucial de comprendre le cadre légal qui protège les lanceurs d'alerte en France et dans votre contexte professionnel.
              </p>

              <h4 className="font-semibold text-slate-900 mb-2">Points clés :</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">La loi Sapin II (2016) et la directive européenne (2019) protègent les lanceurs d'alerte</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Protection contre le licenciement, les représailles et la discrimination</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Canaux de signalement : interne, externe (autorités), ou public selon la situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Conditions : bonne foi, information sur un risque ou préjudice pour l'intérêt général</span>
                </li>
              </ul>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-teal-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  Ressources recommandées
                </h5>
                <ul className="space-y-1 text-sm text-teal-800">
                  <li>• Guide juridique complet sur vos droits</li>
                  <li>• Livre blanc : Les Lanceurs d'Alerte dans le Secteur Privé</li>
                  <li>• Analyse comparative des protections légales</li>
                </ul>
              </div>

              <Link
                href="/securite"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Explorer vos droits en détail
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <span className="text-2xl font-bold text-teal-700">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Structurer votre histoire
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Une bonne structure narrative rend votre témoignage plus clair, crédible et percutant. Il ne s'agit pas seulement de raconter ce qui s'est passé, mais de le présenter de manière cohérente.
              </p>

              <h4 className="font-semibold text-slate-900 mb-2">Éléments clés d'une bonne structure :</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-700 font-semibold">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Le Contexte</h5>
                    <p className="text-sm text-slate-600">Qui êtes-vous (rôle, pas identité), où travaillez-vous, quel est votre domaine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-700 font-semibold">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Les Faits</h5>
                    <p className="text-sm text-slate-600">Quoi, quand, où, qui — chronologie précise et factuelle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-700 font-semibold">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900">L'Impact</h5>
                    <p className="text-sm text-slate-600">Pourquoi c'est grave — conséquences pour les personnes, l'organisation, la société</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-700 font-semibold">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Vos Observations</h5>
                    <p className="text-sm text-slate-600">Ce que vous avez personnellement vu, entendu ou vécu</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-slate-900 mb-2">Conseils pratiques :</h5>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>✓ Restez factuel — évitez les émotions excessives ou les jugements</li>
                  <li>✓ Soyez précis — dates, lieux, montants, noms (si pertinent)</li>
                  <li>✓ Distinguez ce que vous savez de première main vs ce qu'on vous a rapporté</li>
                  <li>✓ Organisez chronologiquement pour plus de clarté</li>
                </ul>
              </div>

              <Link
                href="/guides#templates"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Accéder aux templates narratifs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <span className="text-2xl font-bold text-teal-700">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Organiser vos preuves
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Les preuves donnent du poids à votre témoignage. Plus elles sont organisées et documentées, plus votre démarche sera crédible et efficace.
              </p>

              <h4 className="font-semibold text-slate-900 mb-3">Types de preuves à collecter :</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    Documents écrits
                  </h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Emails et correspondances</li>
                    <li>• Notes de réunion</li>
                    <li>• Rapports internes</li>
                    <li>• Contrats ou accords</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                    </svg>
                    Données numériques
                  </h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Fichiers Excel ou CSV</li>
                    <li>• Captures d'écran</li>
                    <li>• Logs système</li>
                    <li>• Enregistrements audio/vidéo</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Témoignages
                  </h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Témoins directs</li>
                    <li>• Déclarations écrites</li>
                    <li>• Conversations pertinentes</li>
                    <li>• Références croisées</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Chronologie
                  </h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Timeline détaillée</li>
                    <li>• Dates clés horodatées</li>
                    <li>• Journal personnel</li>
                    <li>• Évolution des événements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Important : Sécurité des données
                </h5>
                <ul className="space-y-1 text-sm text-amber-900">
                  <li>✓ Ne collectez que ce qui est légalement accessible</li>
                  <li>✓ Stockez vos preuves de manière sécurisée (encryption)</li>
                  <li>✓ Faites des copies de sauvegarde (sur plusieurs supports)</li>
                  <li>✓ Consultez un avocat avant de partager des données sensibles</li>
                </ul>
              </div>

              <Link
                href="/guides#checklists"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Checklist de documentation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <span className="text-2xl font-bold text-teal-700">4</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Publier en sécurité
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Une fois votre dossier structuré, vous devez décider <strong>comment</strong> et <strong>à qui</strong> partager votre information. Cette décision est cruciale pour votre sécurité et l'efficacité de votre action.
              </p>

              <h4 className="font-semibold text-slate-900 mb-3">Les trois canaux de signalement :</h4>
              <div className="space-y-4 mb-6">
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-slate-900">1. Signalement Interne</h5>
                      <p className="text-sm text-slate-600 mt-1">À votre employeur via un canal dédié (RH, compliance, ou dispositif d'alerte interne)</p>
                      <div className="mt-2 text-sm">
                        <p className="text-green-700 font-medium">✓ Avantages :</p>
                        <ul className="text-slate-600 ml-4 mt-1 space-y-0.5">
                          <li>• Protection légale immédiate</li>
                          <li>• Possibilité de résolution rapide</li>
                          <li>• Moins de risques d'exposition publique</li>
                        </ul>
                        <p className="text-amber-700 font-medium mt-2">⚠ Limites :</p>
                        <ul className="text-slate-600 ml-4 mt-1 space-y-0.5">
                          <li>• L'entreprise peut minimiser ou ignorer</li>
                          <li>• Risque de représailles malgré la protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-slate-900">2. Signalement Externe (Autorités)</h5>
                      <p className="text-sm text-slate-600 mt-1">À une autorité compétente : Défenseur des droits, autorité de régulation, justice</p>
                      <div className="mt-2 text-sm">
                        <p className="text-green-700 font-medium">✓ Avantages :</p>
                        <ul className="text-slate-600 ml-4 mt-1 space-y-0.5">
                          <li>• Investigation officielle</li>
                          <li>• Protection renforcée</li>
                          <li>• Possible si le canal interne a échoué</li>
                        </ul>
                        <p className="text-amber-700 font-medium mt-2">⚠ Limites :</p>
                        <ul className="text-slate-600 ml-4 mt-1 space-y-0.5">
                          <li>• Procédure plus lente</li>
                          <li>• Moins de contrôle sur le processus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-slate-900">3. Divulgation Publique</h5>
                      <p className="text-sm text-slate-600 mt-1">Aux médias, ONG, ou publication directe (dernier recours)</p>
                      <div className="mt-2 text-sm">
                        <p className="text-green-700 font-medium">✓ Avantages :</p>
                        <ul className="text-slate-600 ml-4 mt-1 space-y-0.5">
                          <li>• Maximum de visibilité et pression</li>
                          <li>• Possible en cas de danger imminent ou d'échec des autres canaux</li>
                        </ul>
                        <p className="text-red-700 font-medium mt-2">⚠ Risques importants :</p>
                        <ul className="text-slate-600 ml-4 mt-1 space-y-0.5">
                          <li>• Protection légale conditionnée au respect strict du cadre</li>
                          <li>• Exposition personnelle maximale</li>
                          <li>• Possible poursuites si conditions non remplies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-teal-900 mb-2">Recommandation générale :</h5>
                <p className="text-sm text-teal-800">
                  La loi prévoit un parcours graduel : commencez par le canal interne (si sûr), puis externe si nécessaire, et enfin public uniquement dans des cas exceptionnels (danger imminent, intérêt général majeur, échec des autres voies). <strong>Consultez un avocat spécialisé</strong> avant toute divulgation publique.
                </p>
              </div>

              <Link
                href="/securite#canaux"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Guide détaillé des canaux
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  <span className="text-2xl font-bold text-teal-700">5</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Vous protéger personnellement
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                Révéler une information sensible peut avoir des conséquences sur votre vie professionnelle et personnelle. Voici comment minimiser les risques et vous protéger.
              </p>

              <h4 className="font-semibold text-slate-900 mb-3">Protection juridique :</h4>
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Consultez un avocat spécialisé</strong> en droit du travail / lanceurs d'alerte dès que possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Documentez toute forme de représailles (emails, témoins, changements de poste)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Conservez des preuves de vos communications avec l'employeur ou les autorités</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Connaissez vos recours en cas de licenciement abusif ou discrimination</span>
                  </li>
                </ul>
              </div>

              <h4 className="font-semibold text-slate-900 mb-3">Protection numérique :</h4>
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Utilisez des outils de communication chiffrée (Signal, ProtonMail)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Stockez vos preuves de manière sécurisée (disques durs chiffrés, cloud sécurisé)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Évitez d'utiliser les outils de l'entreprise pour vos communications sensibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Faites des copies de sauvegarde régulières et stockez-les séparément</span>
                  </li>
                </ul>
              </div>

              <h4 className="font-semibold text-slate-900 mb-3">Soutien psychologique et social :</h4>
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>Parlez-en à des personnes de confiance (famille, amis proches)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>Rejoignez des groupes de soutien pour lanceurs d'alerte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>Consultez un psychologue si nécessaire — le stress peut être important</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>Préparez-vous mentalement à un processus potentiellement long</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  En cas de danger immédiat
                </h5>
                <p className="text-sm text-red-900">
                  Si vous êtes victime de menaces, harcèlement ou violences, contactez immédiatement les autorités (police, Défenseur des droits). Votre sécurité personnelle passe avant tout.
                </p>
              </div>

              <Link
                href="/securite#protection"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
              >
                Guide complet de protection
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Next Steps CTA */}
        <div className="mt-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à passer à l'action ?</h2>
          <p className="text-xl mb-6 text-teal-50">
            Vous avez maintenant une vue d'ensemble des 5 étapes essentielles. Explorez nos ressources pour aller plus loin.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/guides"
              className="bg-white text-teal-700 px-6 py-4 rounded-lg hover:bg-teal-50 transition font-semibold text-center"
            >
              Templates & Guides
            </Link>
            <Link
              href="/securite"
              className="bg-white text-teal-700 px-6 py-4 rounded-lg hover:bg-teal-50 transition font-semibold text-center"
            >
              Droits & Sécurité
            </Link>
            <Link
              href="/contact"
              className="bg-teal-800 text-white px-6 py-4 rounded-lg hover:bg-teal-900 transition font-semibold text-center border-2 border-white"
            >
              Poser une question
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-slate-100 rounded-xl p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Ressources complémentaires</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Livres blancs</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Les Lanceurs d'Alerte dans le Secteur Privé</li>
                <li>• Les Points de Douleur des Lanceurs d'Alerte</li>
                <li>• Breaking Barriers: Empowering Whistleblowers</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Analyses & Réflexions</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Méthodologies de documentation</li>
                <li>• Études de cas anonymisées</li>
                <li>• Cadre légal international</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
