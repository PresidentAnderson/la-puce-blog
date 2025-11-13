import { prisma } from '@/lib/prisma'
import Link from 'next/link'

async function getRecentPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true, category: true },
    orderBy: { createdAt: 'desc' },
    take: 6,
  })
  return posts
}

export default async function HomePage() {
  const recentPosts = await getRecentPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mission Focused */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center items-center gap-2 text-sm text-teal-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Plateforme indépendante — Soutien confidentiel</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Le soutien confidentiel pour ceux qui veulent faire entendre la vérité
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed">
              Nous aidons toute personne à préparer, structurer et raconter son histoire — en toute sécurité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* PRIMARY CTA - Maximum emphasis */}
              <Link
                href="/commencer"
                className="bg-teal-500 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-teal-600 hover:scale-105 transition-all inline-flex items-center justify-center gap-3 shadow-2xl ring-4 ring-teal-300 ring-opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Commencer anonymement
              </Link>

              {/* SECONDARY CTA - Subdued */}
              <Link
                href="/contact"
                className="bg-transparent text-white border-2 border-white/40 px-6 py-3 rounded-lg font-medium hover:bg-white/10 hover:border-white/60 transition inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Poser une question anonyme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Reassurance Section - NEW */}
      <section className="py-12 bg-gradient-to-r from-teal-700 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vous n'êtes pas seul
          </h2>
          <p className="text-xl text-teal-100 mb-2 leading-relaxed">
            Chaque histoire mérite d'être entendue.
          </p>
          <p className="text-lg text-teal-200">
            Vous pouvez avancer à votre rythme, sans pression et sans jugement.
          </p>
        </div>
      </section>

      {/* Safety & Confidentiality Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Sécurité & Confidentialité
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Votre protection est notre priorité absolue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">100% Anonyme</h3>
              <p className="text-slate-700">
                Aucune donnée personnelle requise pour commencer. Pas d'inscription, pas de traçage.
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hébergement Sécurisé</h3>
              <p className="text-slate-700">
                Infrastructure cryptée et conforme aux meilleures pratiques de sécurité numérique.
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conseils Juridiques</h3>
              <p className="text-slate-700">
                Guides basés sur les meilleures pratiques légales et les droits des lanceurs d'alerte.
              </p>
            </div>
          </div>

          {/* Link to detailed protection page */}
          <div className="text-center mt-10">
            <Link
              href="/protection"
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold hover:underline"
            >
              En savoir plus sur notre infrastructure de sécurité
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - Pourquoi nous faire confiance - NEW */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparence totale sur nos engagements et nos pratiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Badge 1: Open Source */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Open Source</h3>
                  <p className="text-sm text-slate-300">Code entièrement public sur GitHub pour audit et transparence totale</p>
                </div>
              </div>
            </div>

            {/* Badge 2: Zero Logging */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Zéro Logging</h3>
                  <p className="text-sm text-slate-300">Aucun journal d'activité, aucune donnée personnelle collectée</p>
                </div>
              </div>
            </div>

            {/* Badge 3: Independent */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Indépendance</h3>
                  <p className="text-sm text-slate-300">Aucune affiliation gouvernementale, corporative ou politique</p>
                </div>
              </div>
            </div>

            {/* Badge 4: Encrypted Infrastructure */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Infrastructure Chiffrée</h3>
                  <p className="text-sm text-slate-300">HTTPS/TLS 1.3, SOC 2, GDPR - hébergement sécurisé</p>
                </div>
              </div>
            </div>

            {/* Badge 5: No Tracking */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Aucun Tracking</h3>
                  <p className="text-sm text-slate-300">Pas de cookies, pas d'IP, analytics respectueux de la vie privée</p>
                </div>
              </div>
            </div>

            {/* Badge 6: Audits */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Audits Publics</h3>
                  <p className="text-sm text-slate-300">Rapport de transparence : 0 demandes, 0 données partagées</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA to detailed page */}
          <div className="text-center mt-10">
            <Link
              href="/protection"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Comment nous vous protégeons (détails techniques)
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comment ça fonctionne
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un accompagnement étape par étape pour révéler la vérité en toute sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                number: '1',
                title: 'Comprendre vos droits',
                description: 'Articles vulgarisés et ressources juridiques adaptées à votre situation',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
              },
              {
                number: '2',
                title: 'Structurer votre histoire',
                description: 'Guides narratifs, templates et checklists pour organiser votre témoignage',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                ),
              },
              {
                number: '3',
                title: 'Organiser vos preuves',
                description: 'Conseils de documentation, segmentation et gestion de métadonnées',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                ),
              },
              {
                number: '4',
                title: 'Publier en sécurité',
                description: 'Scénarios: médias, autorités, organismes internationaux',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                ),
              },
              {
                number: '5',
                title: 'Protection personnelle',
                description: 'Sécurité physique, digitale et accompagnement psychologique',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
            ].map((step) => (
              <div key={step.number} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mt-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {step.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenarios Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trouvez une situation similaire à la vôtre
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              6 scénarios anonymes de lanceurs d'alerte du secteur privé avec les étapes recommandées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Scenario Card 1 */}
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-teal-500 transition hover:shadow-2xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Fraude comptable</h3>
                  <p className="text-xs text-teal-300 font-medium">Employé du privé</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Falsification des états financiers pour masquer des pertes importantes
              </p>
              <Link href="/scenarios#fraude-comptable" className="text-teal-400 hover:text-teal-300 font-semibold text-sm inline-flex items-center gap-1">
                Voir les étapes recommandées
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Scenario Card 2 */}
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-teal-500 transition hover:shadow-2xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Harcèlement systémique</h3>
                  <p className="text-xs text-teal-300 font-medium">Cadre moyen</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Système organisé pour pousser certains employés à démissionner
              </p>
              <Link href="/scenarios#harcelement-moral" className="text-teal-400 hover:text-teal-300 font-semibold text-sm inline-flex items-center gap-1">
                Voir les étapes recommandées
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Scenario Card 3 */}
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-teal-500 transition hover:shadow-2xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Pratiques dangereuses</h3>
                  <p className="text-xs text-teal-300 font-medium">Sous-traitant</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Normes de sécurité ignorées, rapports de quasi-accidents cachés
              </p>
              <Link href="/scenarios#pratiques-dangereuses" className="text-teal-400 hover:text-teal-300 font-semibold text-sm inline-flex items-center gap-1">
                Voir les étapes recommandées
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Scenario Card 4 */}
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-teal-500 transition hover:shadow-2xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Corruption</h3>
                  <p className="text-xs text-teal-300 font-medium">Consultant</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Pots-de-vin pour attribution de marchés publics
              </p>
              <Link href="/scenarios#corruption-contrats" className="text-teal-400 hover:text-teal-300 font-semibold text-sm inline-flex items-center gap-1">
                Voir les étapes recommandées
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Scenario Card 5 */}
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-teal-500 transition hover:shadow-2xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Discrimination</h3>
                  <p className="text-xs text-teal-300 font-medium">RH junior</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Élimination systématique de candidatures selon l'origine
              </p>
              <Link href="/scenarios#discrimination-systeme" className="text-teal-400 hover:text-teal-300 font-semibold text-sm inline-flex items-center gap-1">
                Voir les étapes recommandées
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Scenario Card 6 */}
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-teal-500 transition hover:shadow-2xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Données clients</h3>
                  <p className="text-xs text-teal-300 font-medium">Data analyst</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Vente illégale de données personnelles sans consentement
              </p>
              <Link href="/scenarios#manipulation-donnees" className="text-teal-400 hover:text-teal-300 font-semibold text-sm inline-flex items-center gap-1">
                Voir les étapes recommandées
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* View All Scenarios CTA */}
          <div className="text-center">
            <Link
              href="/scenarios"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition font-bold text-lg shadow-xl"
            >
              Voir tous les scénarios détaillés
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ressources & Accompagnement
            </h2>
            <p className="text-xl text-slate-600">
              Tout ce dont vous avez besoin pour agir en toute sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-teal-400 transition">
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ressources essentielles</h3>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Templates narratifs
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Guides de sécurité numérique
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Checklists de documentation
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fiches pratiques juridiques
                </li>
              </ul>
              <Link href="/ressources" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2">
                Accéder aux ressources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-teal-400 transition">
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Analyses & Réflexions</h3>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Études de cas anonymisées
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Analyse de scandales privés
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Méthodologies d'enquête
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Éthique du témoignage
                </li>
              </ul>
              <Link href="/blog" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2">
                Lire les analyses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-teal-400 transition">
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Accompagnement</h3>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Construire son dossier
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Protéger ses communications
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Éviter les représailles
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Définir la bonne stratégie
                </li>
              </ul>
              <Link href="/accompagnement" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2">
                Obtenir de l'aide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts - Reframed */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Publications récentes
              </h2>
              <p className="text-xl text-slate-600">
                Analyses, guides et réflexions sur la protection des lanceurs d'alerte
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-teal-400 hover:shadow-lg transition"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="text-sm text-teal-600 font-semibold">
                        {post.category.name}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mt-2 mb-2 text-slate-900">{post.title}</h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-slate-500">
                      <span>{post.author.name}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2"
              >
                Voir toutes les publications
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Mission Statement */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Un espace indépendant dédié à soutenir toute personne souhaitant partager une information d'intérêt public dans le secteur privé. Nous ne collectons aucune donnée personnelle et ne représentons aucun employeur, organisme ou média.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Qui nous aidons</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Employés du privé',
                'Consultants',
                'Travailleurs temporaires',
                'Partenaires commerciaux',
                'Sous-traitants',
                'Témoins d\'injustice grave',
              ].map((group) => (
                <div key={group} className="flex items-center gap-3 bg-slate-800 rounded-lg p-4">
                  <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-200">{group}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à faire entendre votre voix ?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Commencez par comprendre vos droits et préparer votre témoignage en toute sécurité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/commencer"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition inline-block"
            >
              Commencer maintenant
            </Link>
            <Link
              href="/contact"
              className="bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition inline-block border-2 border-white/20"
            >
              Poser une question anonyme
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
