import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | ToolifyAI";
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      <main className="container py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 mb-4">
            <Scale className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Legal Terms</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Terms of
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Last updated: March 15, 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These Terms of Service ("Terms") govern your access to and use of ToolifyAI's website 
                and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p>
                If you disagree with any part of these terms, then you may not access the service. 
                These Terms apply to all visitors, users, and others who access or use the service.
              </p>
            </CardContent>
          </Card>

          {/* Use License */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Permission is granted to temporarily access the materials on ToolifyAI's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not 
                a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding the password 
                and for all activities that occur under your account.
              </p>
              <p>
                You agree not to disclose your password to any third party and to take sole responsibility 
                for any activities or actions under your account, whether or not you have authorized such 
                activities or actions.
              </p>
            </CardContent>
          </Card>

          {/* User Content */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">User-Generated Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our service allows you to post, link, store, share, and otherwise make available certain 
                information, text, graphics, or other material ("Content"). You are responsible for the 
                Content that you post to the service.
              </p>
              <p>
                By posting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                reproduce, modify, and distribute such Content for the purpose of operating and promoting 
                our service.
              </p>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                  Prohibited Content
                </p>
                <p className="text-sm">
                  You may not post Content that is illegal, harmful, threatening, abusive, harassing, 
                  defamatory, vulgar, obscene, or otherwise objectionable.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The service and its original content, features, and functionality are and will remain the 
                exclusive property of ToolifyAI and its licensors. The service is protected by copyright, 
                trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service 
                without our prior written consent.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The materials on ToolifyAI's website are provided on an 'as is' basis. ToolifyAI makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, fitness 
                for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, ToolifyAI does not warrant or make any representations concerning the accuracy, 
                likely results, or reliability of the use of the materials on its website or otherwise 
                relating to such materials or on any sites linked to this site.
              </p>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Limitations of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In no event shall ToolifyAI or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising 
                out of the use or inability to use the materials on ToolifyAI's website, even if ToolifyAI 
                or a ToolifyAI authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
              <p>
                Because some jurisdictions do not allow limitations on implied warranties, or limitations 
                of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We may terminate or suspend your account and bar access to the service immediately, without 
                prior notice or liability, for any reason whatsoever, including without limitation if you 
                breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the service will immediately cease. If you wish to 
                terminate your account, you may simply discontinue using the service.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                These Terms shall be interpreted and governed by the laws of the United States, without 
                regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing 
                to access or use our service after those revisions become effective, you agree to be bound 
                by the revised terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                Email: legal@toolifyai.com<br />
                Address: 123 Innovation Street, Tech City, TC 12345, United States
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Terms;
