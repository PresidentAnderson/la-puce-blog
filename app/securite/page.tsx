import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sécurité & Droits - La Puce à L\'oreille',
  description: 'Comprendre vos droits en tant que lanceur d\'alerte, les protections légales disponibles, et les mesures de sécurité pour protéger votre identité et vos communications.',
  keywords: ['droits lanceur alerte', 'protection whistleblower', 'loi Sapin II', 'sécurité numérique', 'protection juridique'],
}

export default function SecuritePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">
              Sécurité & Droits
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl">
            Connaître vos droits, comprendre les protections légales, et sécuriser votre démarche.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Section 1: Legal Rights */}
        <section id="droits" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Vos Droits Légaux</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Le Cadre Juridique en France</h3>

            <div className="space-y-6">
              {/* Loi Sapin II */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Loi Sapin II (2016)</h4>
                <p className="text-slate-700 mb-4">
                  La loi relative à la transparence, à la lutte contre la corruption et à la modernisation de la vie économique a créé un statut protecteur pour les lanceurs d'alerte en France.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-900 mb-2">Points clés :</h5>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Protection contre le licenciement, les sanctions, et toute mesure discriminatoire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Nullité de toute mesure prise en représailles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Irresponsabilité pénale et civile (sauf mauvaise foi)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Garantie de confidentialité de l'identité du lanceur d'alerte</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Directive Européenne */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Directive Européenne 2019/1937</h4>
                <p className="text-slate-700 mb-4">
                  La directive européenne sur la protection des personnes qui signalent des violations du droit de l'Union renforce les protections à l'échelle de l'UE.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-900 mb-2">Apports majeurs :</h5>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Élargissement du champ d'application (violations du droit UE)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Obligation pour les entreprises de +50 salariés d'avoir un canal interne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Protection étendue aux facilitateurs et collègues du lanceur d'alerte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Interdiction des clauses de confidentialité empêchant les signalements</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Conditions */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Conditions pour Bénéficier de la Protection
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-amber-900 mb-2">✓ Critères requis :</h5>
                    <ul className="space-y-1 text-sm text-amber-800">
                      <li>• Bonne foi (croyance raisonnable)</li>
                      <li>• Information concernant un crime, délit ou violation grave</li>
                      <li>• Menace ou préjudice pour l'intérêt général</li>
                      <li>• Information portée à la connaissance de manière désintéressée</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-amber-900 mb-2">✗ Ce qui n'est PAS protégé :</h5>
                    <ul className="space-y-1 text-sm text-amber-800">
                      <li>• Signalement de mauvaise foi ou mensonger</li>
                      <li>• Simple conflit interpersonnel</li>
                      <li>• Revendications salariales classiques</li>
                      <li>• Information obtenue illégalement ou sous secret défense</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Reporting Channels */}
        <section id="canaux" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Les Canaux de Signalement</h2>
          </div>

          <div className="space-y-6">
            {/* Internal Channel */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-blue-700 font-bold">1</span>
                  Canal Interne
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-4">
                  Signalement au sein de votre organisation via le dispositif d'alerte interne (obligatoire pour les entreprises de plus de 50 salariés).
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Avantages
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        Protection juridique immédiate
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        Possibilité de résolution rapide
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        Confidentialité garantie par la loi
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        Moins d'exposition publique
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        Démarche souvent encouragée par la jurisprudence
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Limites et Risques
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        L'entreprise peut minimiser ou ignorer
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        Risque de pressions subtiles malgré la protection
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        Manque de transparence sur le traitement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        Délais parfois très longs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        Peut ne pas convenir si la direction est impliquée
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-900 mb-2">À qui s'adresser en interne ?</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Service RH ou Compliance</li>
                    <li>• Référent désigné (si l'entreprise en a nommé un)</li>
                    <li>• Plateforme ou adresse email dédiée</li>
                    <li>• Manager hiérarchique (si pertinent et non impliqué)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* External Channel */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-purple-700 font-bold">2</span>
                  Canal Externe (Autorités)
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-4">
                  Signalement à une autorité administrative, judiciaire ou à un organe de l'Union européenne.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Quand utiliser ce canal ?</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Absence de canal interne dans l'entreprise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Échec du signalement interne (pas de suite dans les délais)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Représailles après signalement interne</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Risque de destruction de preuves si signalement interne</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Danger imminent ou urgent pour l'intérêt général</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Autorités compétentes :</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">→</span>
                        <div>
                          <strong>Défenseur des droits</strong>
                          <p className="text-xs text-slate-600">Protection générale des lanceurs d'alerte</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">→</span>
                        <div>
                          <strong>Procureur de la République</strong>
                          <p className="text-xs text-slate-600">Infractions pénales</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">→</span>
                        <div>
                          <strong>Inspection du travail</strong>
                          <p className="text-xs text-slate-600">Violations du code du travail</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">→</span>
                        <div>
                          <strong>AMF (Autorité des marchés financiers)</strong>
                          <p className="text-xs text-slate-600">Délits boursiers et financiers</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">→</span>
                        <div>
                          <strong>AFA (Agence française anticorruption)</strong>
                          <p className="text-xs text-slate-600">Corruption et trafic d'influence</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">→</span>
                        <div>
                          <strong>CNIL</strong>
                          <p className="text-xs text-slate-600">Violations de données personnelles</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-purple-900">
                    <strong>Important :</strong> Le signalement externe est protégé même sans passage préalable par le canal interne dans certaines situations (danger imminent, risque de représailles, absence de canal interne).
                  </p>
                </div>
              </div>
            </div>

            {/* Public Disclosure */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-red-700 font-bold">3</span>
                  Divulgation Publique
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-4">
                  Révélation de l'information aux médias, ONG, ou au public (dernier recours).
                </p>

                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    ATTENTION : Conditions très strictes
                  </h4>
                  <p className="text-red-800 mb-3">
                    La divulgation publique ne bénéficie de la protection légale que si <strong>TOUTES</strong> ces conditions sont réunies :
                  </p>
                  <ul className="space-y-2 text-sm text-red-900">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>Signalement interne ET externe déjà effectués sans suite appropriée dans les délais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">OU</span>
                      <span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>Danger imminent ou manifeste pour l'intérêt général</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">OU</span>
                      <span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>Risque de représailles en cas de signalement externe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">OU</span>
                      <span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">4.</span>
                      <span>Faible perspective que le signalement externe soit effectif en raison des circonstances particulières</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Avantages potentiels
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Maximum de visibilité publique</li>
                      <li>• Pression médiatique et sociale</li>
                      <li>• Mobilisation de l'opinion publique</li>
                      <li>• Possible si autres voies ont échoué</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Risques majeurs
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Perte de protection si conditions non remplies</li>
                      <li>• Exposition personnelle maximale</li>
                      <li>• Poursuites possibles (diffamation, violation secret)</li>
                      <li>• Stigmatisation professionnelle</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                  <p className="text-sm text-amber-900 font-semibold">
                    ⚖️ Recommandation forte : Consultez IMPÉRATIVEMENT un avocat spécialisé avant toute divulgation publique. Les conséquences d'une divulgation mal encadrée peuvent être irréversibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Digital Security */}
        <section id="securite-numerique" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Sécurité Numérique</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Communications */}
            <div id="communications" className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Communications Chiffrées</h3>
              </div>
              <p className="text-slate-700 mb-4 text-sm">
                Protégez vos échanges avec des outils de communication sécurisés.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">📧 ProtonMail</h4>
                  <p className="text-xs text-slate-600">Email chiffré de bout en bout, basé en Suisse</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">💬 Signal</h4>
                  <p className="text-xs text-slate-600">Messagerie instantanée sécurisée recommandée par les experts</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">🌐 VPN</h4>
                  <p className="text-xs text-slate-600">Masquer votre adresse IP (NordVPN, ProtonVPN, etc.)</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">🔒 Tor Browser</h4>
                  <p className="text-xs text-slate-600">Navigation anonyme pour accès ultra-sensible</p>
                </div>
              </div>
            </div>

            {/* Storage */}
            <div id="stockage" className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Stockage Sécurisé</h3>
              </div>
              <p className="text-slate-700 mb-4 text-sm">
                Protégez vos documents et preuves avec un stockage chiffré.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">💾 Disque Dur Chiffré</h4>
                  <p className="text-xs text-slate-600">VeraCrypt pour créer un volume crypté</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">☁️ Cloud Sécurisé</h4>
                  <p className="text-xs text-slate-600">Tresorit, pCloud (avec chiffrement client)</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">🔑 Gestionnaire de Mots de Passe</h4>
                  <p className="text-xs text-slate-600">1Password, Bitwarden pour sécuriser vos accès</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">🗂️ Sauvegardes Multiples</h4>
                  <p className="text-xs text-slate-600">Règle 3-2-1: 3 copies, 2 supports, 1 hors site</p>
                </div>
              </div>
            </div>

            {/* Anonymity */}
            <div id="anonymat" className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Protection de l'Identité</h3>
              </div>
              <p className="text-slate-700 mb-4 text-sm">
                Techniques pour préserver votre anonymat.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Supprimer les métadonnées des fichiers (EXIF, propriétés)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Éviter détails personnels identifiants dans vos documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ne pas utiliser les outils de l'entreprise pour communications sensibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Utiliser email jetable ou pseudonyme pour contact initial</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Éviter d'accéder depuis votre réseau habituel ou appareil professionnel</span>
                </li>
              </ul>
            </div>

            {/* Retaliation Detection */}
            <div id="represailles" className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900">Détecter les Représailles</h3>
              </div>
              <p className="text-slate-700 mb-4 text-sm">
                Signes de représailles à documenter immédiatement.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠</span>
                  <span>Changement de poste, rétrogradation, mutation non justifiée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠</span>
                  <span>Modification des conditions de travail (horaires, tâches, objectifs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠</span>
                  <span>Isolation professionnelle, exclusion de réunions ou projets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠</span>
                  <span>Évaluation négative soudaine ou injustifiée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠</span>
                  <span>Harcèlement moral ou pressions psychologiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠</span>
                  <span>Non-renouvellement de contrat, licenciement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠</span>
                  <span>Sanctions disciplinaires disproportionnées</span>
                </li>
              </ul>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-900">
                  <strong>Action :</strong> Documentez chaque incident avec dates, témoins, et preuves écrites. Consultez rapidement un avocat.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Legal Resources */}
        <section id="protection" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Ressources Juridiques</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Organisations de Soutien</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-slate-900">Défenseur des droits</h4>
                  <p className="text-sm text-slate-600">Institution indépendante pour protéger vos droits</p>
                  <a href="https://www.defenseurdesdroits.fr" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline">
                    defenseurdesdroits.fr →
                  </a>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-slate-900">Maison des Lanceurs d'Alerte</h4>
                  <p className="text-sm text-slate-600">Association de soutien et accompagnement</p>
                  <a href="https://mlalerte.org" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline">
                    mlalerte.org →
                  </a>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-slate-900">Transparency International France</h4>
                  <p className="text-sm text-slate-600">Lutte contre la corruption</p>
                  <a href="https://transparency-france.org" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline">
                    transparency-france.org →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Trouver un Avocat Spécialisé</h3>
              <p className="text-slate-700 mb-4 text-sm">
                Il est crucial de consulter un avocat spécialisé en droit du travail et protection des lanceurs d'alerte.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">Ordre des Avocats</h4>
                  <p className="text-xs text-slate-600">Annuaire d'avocats par spécialité</p>
                  <a href="https://www.cnb.avocat.fr" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    cnb.avocat.fr →
                  </a>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">Aide Juridictionnelle</h4>
                  <p className="text-xs text-slate-600">Si revenus modestes, aide financière possible</p>
                  <a href="https://www.service-public.fr/particuliers/vosdroits/F18074" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    service-public.fr →
                  </a>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">Consultations Gratuites</h4>
                  <p className="text-xs text-slate-600">Maisons de justice et du droit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'aide ou de conseils ?</h2>
          <p className="text-xl mb-6 text-teal-50 max-w-2xl mx-auto">
            Si vous avez des questions sur vos droits ou votre sécurité, n'hésitez pas à nous contacter de manière anonyme.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-lg hover:bg-teal-50 transition font-bold text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Poser une question anonyme
          </Link>
        </div>

      </div>
    </div>
  )
}
