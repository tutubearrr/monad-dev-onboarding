'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TemplateSelector from '@/components/TemplateSelector'
import DeploymentForm from '@/components/DeploymentForm'
import DeploymentStatus from '@/components/DeploymentStatus'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [deploymentStatus, setDeploymentStatus] = useState<any>(null)
  const [isDeploying, setIsDeploying] = useState(false)

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template)
    setDeploymentStatus(null)
  }

  const handleDeploy = async (formData: any) => {
    setIsDeploying(true)
    setDeploymentStatus({
      status: 'pending',
      message: 'Preparing deployment...',
    })

    try {
      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setDeploymentStatus({
        status: 'deploying',
        message: 'Deploying contract to Monad...',
        txHash: '0x' + Math.random().toString(16).slice(2, 66),
      })

      await new Promise(resolve => setTimeout(resolve, 3000))

      const contractAddress = '0x' + Math.random().toString(16).slice(2, 42)
      
      setDeploymentStatus({
        status: 'success',
        message: 'Contract deployed successfully!',
        contractAddress,
        txHash: '0x' + Math.random().toString(16).slice(2, 66),
        explorerUrl: `${process.env.NEXT_PUBLIC_EXPLORER_URL}/address/${contractAddress}`,
      })
    } catch (error: any) {
      setDeploymentStatus({
        status: 'error',
        message: error.message || 'Deployment failed',
      })
    } finally {
      setIsDeploying(false)
    }
  }

  const handleReset = () => {
    setSelectedTemplate(null)
    setDeploymentStatus(null)
    setIsDeploying(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-monad-dark via-purple-900 to-monad-dark">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!selectedTemplate && !deploymentStatus && (
          <>
            <Hero />
            <TemplateSelector onSelect={handleTemplateSelect} />
            <Features />
          </>
        )}

        {selectedTemplate && !deploymentStatus && (
          <DeploymentForm
            template={selectedTemplate}
            onDeploy={handleDeploy}
            onBack={handleReset}
            isDeploying={isDeploying}
          />
        )}

        {deploymentStatus && (
          <DeploymentStatus
            status={deploymentStatus}
            onReset={handleReset}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}
