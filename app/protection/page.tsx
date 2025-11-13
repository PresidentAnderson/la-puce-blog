import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comment Nous Vous Protégeons - La Puce à L\'oreille',
  description: 'Infrastructure de sécurité, politique de confidentialité, et mesures techniques pour protéger votre anonymat et vos données.',
  keywords: ['protection données', 'anonymat', 'sécurité infrastructure', 'confidentialité', 'zero-logging'],
}

export default function ProtectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">
              Comment Nous Vous Protégeons
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-teal-100">
            Transparence totale sur notre infrastructure de sécurité et nos pratiques de confidentialité.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Core Commitment */}
        <div className="bg-teal-600 text-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Engagement Fondamental</h2>
          <p className="text-xl text-teal-50 mb-6">
            Nous ne pouvons pas divulguer ce que nous ne collectons pas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Zéro Collecte</h3>
              <p className="text-sm text-teal-50">Aucune donnée personnelle requise pour utiliser la plateforme</p>
            </div>
            <div className="bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Zéro Logging</h3>
              <p className="text-sm text-teal-50">Nous ne conservons aucun journal de connexion ou d'activité</p>
            </div>
            <div className="bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Zéro Partage</h3>
              <p className="text-sm text-teal-50">Aucune donnée vendue, louée ou partagée avec des tiers</p>
            </div>
          </div>
        </div>

        {/* Infrastructure Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
            </svg>
            Infrastructure Technique
          </h2>

          <div className="space-y-6">
            {/* Hosting */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Hébergement Sécurisé</h3>
                  <p className="text-slate-700 mb-3">
                    Plateforme hébergée sur <strong>Vercel</strong> avec infrastructure distribuée mondialement (Edge Network).
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm">Avantages de sécurité :</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>✓ HTTPS obligatoire (chiffrement TLS 1.3)</li>
                      <li>✓ Protection DDoS intégrée</li>
                      <li>✓ Isolation des applications</li>
                      <li>✓ Certification SOC 2 Type II</li>
                      <li>✓ Conformité GDPR</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* No Analytics Tracking */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Analytics Respectueuses de la Vie Privée</h3>
                  <p className="text-slate-700 mb-3">
                    Nous utilisons <strong>Vercel Analytics</strong> - une solution analytics sans cookies, anonyme et respectueuse de la vie privée.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm">Ce que nous NE collectons PAS :</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>✗ Aucune adresse IP</li>
                      <li>✗ Aucun cookie de tracking</li>
                      <li>✗ Aucune donnée personnelle identifiable</li>
                      <li>✗ Aucun suivi inter-sites</li>
                      <li>✗ Aucune empreinte numérique (fingerprinting)</li>
                    </ul>
                    <p className="text-xs text-purple-700 mt-2">
                      Seules des métriques agrégées et anonymes (nombre de pages vues, pays d'origine) sont collectées pour améliorer la plateforme.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Source */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Code Open Source</h3>
                  <p className="text-slate-700 mb-3">
                    Le code source de cette plateforme est <strong>entièrement public</strong> sur GitHub.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm">Pourquoi c'est important :</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>✓ Transparence totale sur notre fonctionnement</li>
                      <li>✓ Audit possible par des experts en sécurité</li>
                      <li>✓ Aucune fonctionnalité cachée</li>
                      <li>✓ Communauté peut contribuer aux améliorations</li>
                    </ul>
                  </div>
                  <a
                    href="https://github.com/PresidentAnderson/la-puce-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Voir le code source sur GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Independence */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Indépendance Totale
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-lg text-slate-700 mb-6">
              La Puce à L'oreille est une <strong>plateforme indépendante</strong>, sans affiliation gouvernementale, corporative ou politique.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Nous SOMMES
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Indépendants de tout gouvernement</li>
                  <li>✓ Sans but lucratif</li>
                  <li>✓ Financés uniquement par des contributions privées</li>
                  <li>✓ Neutres politiquement</li>
                  <li>✓ Axés sur l'intérêt public</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Nous NE SOMMES PAS
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✗ Affiliés à un gouvernement</li>
                  <li>✗ Liés à une entreprise</li>
                  <li>✗ Financés par des publicités</li>
                  <li>✗ Engagés politiquement</li>
                  <li>✗ Détenteurs de vos données</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Cadre Légal
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ce que nous pouvons et ne pouvons pas faire légalement</h3>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-amber-900 mb-2">⚖️ Obligation légale de divulgation</h4>
                <p className="text-sm text-amber-800">
                  Si nous recevons une <strong>assignation légale valide</strong> (tribunal, autorité compétente), nous sommes tenus par la loi de coopérer.
                  <strong className="block mt-2">CEPENDANT :</strong> Comme nous ne collectons aucune donnée personnelle, nous n'avons rien à divulguer.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">🔒 Protection par conception (Privacy by Design)</h4>
                <p className="text-sm text-blue-800">
                  Notre approche : <strong>ne pas collecter = ne pas pouvoir divulguer</strong>. C'est la meilleure protection que nous puissions offrir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Recommend */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ce Que Nous Recommandons</h2>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <p className="text-slate-800 mb-4">
              Bien que nous prenions toutes les mesures possibles pour protéger votre vie privée, <strong>votre sécurité ultime dépend aussi de vos propres pratiques</strong>.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-slate-900">Utilisez un VPN</h4>
                  <p className="text-sm text-slate-700">Pour masquer votre adresse IP de votre fournisseur d'accès Internet</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-slate-900">Navigation privée ou Tor</h4>
                  <p className="text-sm text-slate-700">Pour des consultations ultra-sensibles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-slate-900">Appareil personnel uniquement</h4>
                  <p className="text-sm text-slate-700">Ne jamais utiliser un ordinateur ou téléphone professionnel</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-slate-900">Consultez nos guides de sécurité</h4>
                  <p className="text-sm text-slate-700">
                    <Link href="/securite" className="text-teal-700 hover:underline font-medium">
                      Page Sécurité & Droits →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Report */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Rapport de Transparence</h2>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">0</div>
                <p className="text-sm text-slate-600">Demandes légales reçues</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">0</div>
                <p className="text-sm text-slate-600">Données personnelles collectées</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">0</div>
                <p className="text-sm text-slate-600">Données partagées avec des tiers</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 text-center">
              Dernière mise à jour : Novembre 2025
            </p>
          </div>
        </section>

        {/* Questions */}
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Des questions sur notre sécurité ?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Nous croyons en la transparence totale. Si vous avez des questions sur nos pratiques de sécurité ou de confidentialité, n'hésitez pas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Nous contacter
          </Link>
        </div>

      </div>
    </div>
  )
}
