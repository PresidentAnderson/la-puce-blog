'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('Erreur lors de l\'envoi du message')
      }
    } catch (error) {
      alert('Erreur: ' + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl text-gray-600">
          Une question ? Une suggestion ? N'hésitez pas à nous écrire.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
              Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Nom *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Sujet *</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Message *</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                rows={6}
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
            >
              {loading ? 'Envoi...' : 'Envoyer le message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">contact@lapuce.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Réseaux sociaux</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 transition"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 transition"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Horaires de réponse</h3>
                <p className="text-gray-600">
                  Du lundi au vendredi<br />
                  9h00 - 18h00
                </p>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-gray-600">
                  Nous nous efforçons de répondre à tous les messages dans un délai de 24 à 48 heures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
