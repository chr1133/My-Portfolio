import { prisma } from "@/lib/prisma";
import type { Certificate } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";

export async function Certificates() {
  const certificates: Certificate[] = await prisma.certificate.findMany({ orderBy: { date: "desc" } });

  if (certificates.length === 0) return null;

  return (
    <section id="certificates" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold mb-8">Certificates</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <Card key={cert.id}>
            <CardContent className="pt-6">
              <h3 className="font-medium">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(cert.date).getFullYear()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}