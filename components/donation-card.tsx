"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { Check, ExternalLink, Loader2 } from "lucide-react"
import Image from "next/image"

const paymentMethods = [
  {
    id: "bkash",
    name: "bKash",
    logo: "/bkash-logo.png", // Added real bKash logo
    color: "bg-pink-50",
    number: "01304212226",
    type: "Personal",
  },
  {
    id: "nagad",
    name: "Nagad",
    logo: "/nagad-logo.png", // Added real Nagad logo
    color: "bg-orange-50",
    number: "01304212226",
    type: "Personal",
  },
  {
    id: "rocket",
    name: "Rocket",
    logo: "/rocket-logo.png", // Added real Rocket logo
    color: "bg-purple-50",
    number: "",
    type: "Personal",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    icon: "🏦",
    color: "bg-emerald-600",
    details: {
      bankName: "",
      accountName: "Al-Khidmah Organization",
      accountNumber: "",
      branch: "",
      routingNumber: "",
    },
  },
]

export function DonationCard() {
  const { t } = useLanguage()
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    transactionId: "",
  })

  const selectedPayment = paymentMethods.find((m) => m.id === selectedMethod)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedAmount || !selectedMethod || !formData.name || !formData.email || !formData.phone || !formData.transactionId) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-payment-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          transactionId: formData.transactionId,
          paymentMethod: selectedPayment?.name || selectedMethod,
          amount: selectedAmount,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit payment details")
      }

      setSubmitStatus("success")
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        transactionId: "",
      })
      // Reset selections after 3 seconds
      setTimeout(() => {
        setSelectedAmount(null)
        setSelectedMethod(null)
        setShowForm(false)
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error submitting payment details:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleShowForm = () => {
    if (selectedAmount && selectedMethod) {
      setShowForm(true)
    }
  }

  return (
    <section id="donation-form" className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-accent/20 via-background to-accent/10 border-2 border-primary/20 shadow-2xl">
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                {t("donationCard.title")}
              </h2>
              <p className="text-muted-foreground text-lg">{t("donationCard.subtitle")}</p>
            </div>

            {/* Quick Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3 text-foreground">
                {t("donationCard.selectAmount")} <span className="text-destructive">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[500, 1000, 2000, 5000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                      selectedAmount === amount
                        ? "border-primary bg-primary text-primary-foreground shadow-lg scale-105"
                        : "border-border hover:border-primary/50 bg-card"
                    }`}
                  >
                    ৳{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder={t("donationCard.customAmount")}
                className="w-full mt-3 px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none bg-background"
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
              />
            </div>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3 text-foreground">
                {t("donationCard.selectPayment")} <span className="text-destructive">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all group ${
                      selectedMethod === method.id
                        ? "border-primary bg-primary/10 shadow-lg scale-105"
                        : "border-border hover:border-primary/50 bg-card"
                    }`}
                  >
                    {selectedMethod === method.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    <div className="text-center">
                      {method.logo ? (
                        <div
                          className={`w-12 h-12 mx-auto mb-2 rounded-lg ${method.color} flex items-center justify-center p-2`}
                        >
                          <Image
                            src={method.logo || "/placeholder.svg"}
                            alt={method.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-12 h-12 mx-auto mb-2 rounded-lg ${method.color} flex items-center justify-center text-2xl`}
                        >
                          {method.icon}
                        </div>
                      )}
                      <p className="font-semibold text-sm">{method.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Details Display */}
            {selectedPayment && (
              <div className="mb-8 animate-fade-in-up">
                <div className="bg-card border-2 border-primary/30 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-lg mb-4 text-primary flex items-center gap-2">
                    {selectedPayment.logo ? (
                      <Image
                        src={selectedPayment.logo || "/placeholder.svg"}
                        alt={selectedPayment.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{selectedPayment.icon}</span>
                    )}
                    {t("donationCard.paymentDetails")} - {selectedPayment.name}
                  </h3>

                  {selectedPayment.number ? (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                        <span className="text-muted-foreground">{t("donationCard.accountType")}</span>
                        <span className="font-semibold">{selectedPayment.type}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                        <span className="text-muted-foreground">{t("donationCard.accountNumber")}</span>
                        <span className="font-mono font-bold text-lg text-primary">{selectedPayment.number}</span>
                      </div>
                      {selectedAmount && (
                        <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/30">
                          <span className="text-muted-foreground">{t("donationCard.amountToPay")}</span>
                          <span className="font-bold text-xl text-primary">৳{selectedAmount.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    selectedPayment.details && (
                      <div className="space-y-3">
                        {selectedPayment.details.bankName && (
                          <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                            <span className="text-muted-foreground">{t("donationCard.bankName")}</span>
                            <span className="font-semibold">{selectedPayment.details.bankName}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                          <span className="text-muted-foreground">{t("donationCard.accountName")}</span>
                          <span className="font-semibold">{selectedPayment.details.accountName}</span>
                        </div>
                        {selectedPayment.details.accountNumber && (
                          <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                            <span className="text-muted-foreground">{t("donationCard.accountNumber")}</span>
                            <span className="font-mono font-bold text-primary">
                              {selectedPayment.details.accountNumber}
                            </span>
                          </div>
                        )}
                        {selectedPayment.details.branch && (
                          <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                            <span className="text-muted-foreground">{t("donationCard.branch")}</span>
                            <span className="font-semibold">{selectedPayment.details.branch}</span>
                          </div>
                        )}
                        {selectedPayment.details.routingNumber && (
                          <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                            <span className="text-muted-foreground">{t("donationCard.routingNumber")}</span>
                            <span className="font-mono font-semibold">{selectedPayment.details.routingNumber}</span>
                          </div>
                        )}
                        {selectedAmount && (
                          <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/30">
                            <span className="text-muted-foreground">{t("donationCard.amountToPay")}</span>
                            <span className="font-bold text-xl text-primary">৳{selectedAmount.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    )
                  )}

                  <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                    <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                      {t("donationCard.instructions")}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Form or Submit Button */}
            {!showForm ? (
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleShowForm}
                  disabled={!selectedAmount || !selectedMethod}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {t("donationCard.submitButton")}
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">{t("donationCard.taxNote")}</p>
              </div>
            ) : (
              <div className="mt-8 animate-fade-in-up">
                <div className="bg-card border-2 border-primary/30 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-lg mb-6 text-primary">
                    {t("donationCard.form.title")}
                  </h3>
                  
                  {submitStatus === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-green-600 font-semibold text-lg">
                        {t("donationCard.form.success")}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitDetails} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          {t("donationCard.form.name")} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t("donationCard.form.namePlaceholder")}
                          required
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          {t("donationCard.form.email")} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t("donationCard.form.emailPlaceholder")}
                          required
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          {t("donationCard.form.phone")} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t("donationCard.form.phonePlaceholder")}
                          required
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="transactionId" className="text-sm font-medium text-foreground">
                          {t("donationCard.form.transactionId")} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="transactionId"
                          name="transactionId"
                          type="text"
                          value={formData.transactionId}
                          onChange={handleInputChange}
                          placeholder={t("donationCard.form.transactionIdPlaceholder")}
                          required
                          className="w-full"
                        />
                      </div>

                      {submitStatus === "error" && (
                        <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                          <p className="text-sm text-destructive">
                            {t("donationCard.form.error")}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setShowForm(false)
                            setSubmitStatus("idle")
                          }}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.transactionId}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              {t("donationCard.form.submitting")}
                            </>
                          ) : (
                            t("donationCard.submitButton")
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
