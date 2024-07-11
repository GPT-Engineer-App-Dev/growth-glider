import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Workflow</h1>
            <p className="text-xl text-muted-foreground mb-6">Streamline your business processes with our cutting-edge SaaS solution.</p>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="Hero" className="w-full h-[300px] object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Easy Integration", description: "Seamlessly integrate with your existing tools" },
              { title: "Real-time Analytics", description: "Get insights into your business performance" },
              { title: "Secure & Reliable", description: "Your data is safe with our enterprise-grade security" }
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Basic", price: "$9.99", features: ["Feature 1", "Feature 2", "Feature 3"] },
            { title: "Pro", price: "$19.99", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] },
            { title: "Enterprise", price: "Custom", features: ["All Features", "Priority Support", "Custom Integration"] }
          ].map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-lg text-muted-foreground">
                We're a team of passionate individuals dedicated to creating innovative solutions
                that help businesses thrive in the digital age. Our mission is to simplify complex
                processes and empower organizations to achieve their full potential.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg" alt="About Us" className="w-full h-[300px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;