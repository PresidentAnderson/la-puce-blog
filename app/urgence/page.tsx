import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Urgence - Si vous êtes en danger immédiat',
  description: 'Protocole d\'urgence pour les lanceurs d\'alerte en situation de danger. Actions immédiates, sécurité personnelle, et sortie rapide.',
  robots: 'noindex, nofollow', // Don't index emergency page
}

export default function UrgencePage() {
  return (
    <div className="min-h-screen bg-red-50">
      {/* Quick Exit Button - Prominent */}
      <div className="bg-red-600 text-white py-3 sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <span className="font-bold flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Page d'urgence - Si vous êtes surveillé
          </span>
          <button
            onClick={() => {
              window.history.replaceState(null, '', 'https://www.google.com')
              window.location.replace('https://www.google.com')
            }}
            className="bg-white text-red-700 px-6 py-2 rounded-lg font-bold hover:bg-red-50 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            SORTIE RAPIDE (Esc)
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Immediate Danger Section */}
        <div className="bg-white border-4 border-red-600 rounded-xl p-8 mb-8 shadow-xl">
          <h1 className="text-3xl font-bold text-red-900 mb-4 flex items-center gap-3">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Si vous êtes en danger immédiat
          </h1>
          <div className="prose prose-red max-w-none">
            <p className="text-lg text-red-800 mb-4">
              <strong>Votre sécurité personnelle passe avant tout.</strong> Si vous êtes victime de menaces, harcèlement, violences ou si vous pensez être surveillé, suivez ces étapes immédiates :
            </p>
            <ol className="text-red-900 space-y-2 text-lg">
              <li><strong>Contactez la police</strong> au 17 (ou 112 depuis un mobile)</li>
              <li><strong>Ne restez pas seul(e)</strong> - Rejoignez un lieu public ou contactez un proche</li>
              <li><strong>Documentez</strong> toute menace ou incident (heure, lieu, témoins)</li>
              <li><strong>Consultez un avocat spécialisé</strong> dès que possible</li>
            </ol>
          </div>
        </div>

        {/* Surveillance Detection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Si vous pensez être surveillé
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-2">⚠ Signes de surveillance numérique</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Ordinateur ou téléphone plus lent que d'habitude</li>
                <li>• Applications inconnues installées</li>
                <li>• Batterie qui se décharge anormalement vite</li>
                <li>• Sons étranges lors des appels téléphoniques</li>
                <li>• Emails ou messages marqués comme lus alors que vous ne les avez pas ouverts</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-2">🛡️ Actions immédiates</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• <strong>N'utilisez PAS</strong> votre ordinateur ou téléphone professionnel</li>
                <li>• Utilisez un appareil que vous seul contrôlez</li>
                <li>• Naviguez en mode privé ou avec Tor Browser</li>
                <li>• Utilisez un réseau WiFi public (pas votre domicile ou bureau)</li>
                <li>• Changez tous vos mots de passe depuis un appareil sûr</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Evidence Preservation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
            Préserver vos preuves en urgence
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-900">
              <strong>Important :</strong> Si vous pensez que vos preuves risquent d'être détruites, agissez maintenant.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Faites des copies multiples</h4>
                <p className="text-sm text-slate-600">Clé USB, disque dur externe, cloud sécurisé (Tresorit, pCloud chiffré)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Photographiez les documents papier</h4>
                <p className="text-sm text-slate-600">Avec votre téléphone personnel, sauvegardez immédiatement hors de l'entreprise</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Emails critiques : transférez-vous</h4>
                <p className="text-sm text-slate-600">Vers votre email personnel (Gmail, ProtonMail) ou imprimez-les</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Notez tout dans un journal</h4>
                <p className="text-sm text-slate-600">Dates, heures, personnes présentes, ce qui a été dit - contemporain des faits</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold">5</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Stockez hors de votre domicile si risque</h4>
                <p className="text-sm text-slate-600">Chez un proche de confiance ou dans un coffre bancaire</p>
              </div>
            </div>
          </div>
        </div>

        {/* What NOT to Do */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
            </svg>
            Ce qu'il NE FAUT PAS faire
          </h2>

          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <p className="text-sm text-red-900"><strong>❌ Ne parlez pas à vos collègues</strong> - Même si vous leur faites confiance, ils peuvent être interrogés</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <p className="text-sm text-red-900"><strong>❌ N'utilisez pas vos outils professionnels</strong> - Email, téléphone, ordinateur de l'entreprise sont surveillables</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <p className="text-sm text-red-900"><strong>❌ Ne détruisez pas de preuves</strong> - Même si elles vous incriminent, leur destruction est un délit</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <p className="text-sm text-red-900"><strong>❌ Ne partagez pas publiquement (réseaux sociaux)</strong> - Cela peut compromettre votre protection légale</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <p className="text-sm text-red-900"><strong>❌ N'agissez pas seul trop longtemps</strong> - Consultez rapidement un avocat spécialisé</p>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <svg className="w-7 h-7 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Contacts d'urgence
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-teal-400 mb-2">Urgences</h3>
              <ul className="space-y-1 text-sm">
                <li>• Police : <strong>17</strong> (ou 112 mobile)</li>
                <li>• Gendarmerie : <strong>17</strong></li>
                <li>• Urgences médicales : <strong>15</strong></li>
                <li>• Pompiers : <strong>18</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-teal-400 mb-2">Soutien spécialisé</h3>
              <ul className="space-y-1 text-sm">
                <li>• Défenseur des droits : 09 69 39 00 00</li>
                <li>• Maison des Lanceurs d'Alerte : via site web</li>
                <li>• Violences conjugales : 3919</li>
                <li>• Écoute psychologique : 01 46 21 46 46</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-teal-900 bg-opacity-50 rounded-lg p-4">
            <p className="text-sm text-teal-100">
              <strong>Note :</strong> Si vous appelez depuis votre téléphone professionnel ou un téléphone possiblement surveillé, utilisez un téléphone public ou un appareil que vous seul contrôlez.
            </p>
          </div>
        </div>

        {/* Return to Safety */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition font-semibold text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l'accueil sécurisé
          </a>
        </div>

      </div>

      {/* Keyboard shortcut for quick exit */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
              window.history.replaceState(null, '', 'https://www.google.com');
              window.location.replace('https://www.google.com');
            }
          });
        `
      }} />
    </div>
  )
}
