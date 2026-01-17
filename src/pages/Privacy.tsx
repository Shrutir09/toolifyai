import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | ToolifyAI";
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      <main className="container py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 mb-4">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Privacy & Security</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Privacy
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Policy
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
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                At ToolifyAI, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <p className="text-muted-foreground">
                  We may collect personal information that you voluntarily provide to us when you register 
                  for an account, subscribe to our newsletter, submit a tool suggestion, or contact us. 
                  This may include your name, email address, and any other information you choose to provide.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Usage Data</h3>
                <p className="text-muted-foreground">
                  We automatically collect certain information when you visit our website, including your 
                  IP address, browser type, device information, pages visited, time spent on pages, and 
                  referring website addresses.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cookies and Tracking Technologies</h3>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our website and 
                  store certain information. You can instruct your browser to refuse all cookies or to 
                  indicate when a cookie is being sent.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your tool suggestions and respond to your inquiries</li>
                <li>To send you newsletters, marketing materials, and other communications</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To personalize your experience on our website</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information. However, no method of transmission over the Internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p>
                We use industry-standard encryption technologies and secure servers to protect your data. 
                Access to personal information is restricted to authorized personnel only.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate or incomplete information</li>
                <li>Right to delete your personal information</li>
                <li>Right to object to processing of your personal information</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our website may contain links to third-party websites or services. We are not responsible 
                for the privacy practices of these third parties. We encourage you to read the privacy 
                policies of any third-party services you visit.
              </p>
              <p>
                We may use third-party service providers to help us operate our website and administer 
                activities on our behalf, such as analytics, hosting, and email services.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: privacy@toolifyai.com<br />
                Address: 123 Innovation Street, Tech City, TC 12345, United States
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
