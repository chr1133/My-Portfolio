import { buttonVariants } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-950/40 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-4">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
          Let&rsquo;s build something together
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
          I&rsquo;m available for collaborations, freelance work, or full-time opportunities.
          Reach out and I&rsquo;ll get back to you as soon as possible.
        </p>
        <a href="mailto:hello@example.com" className={buttonVariants({ size: "lg" })}>
          Say hello
        </a>
      </div>
    </section>
  );
}
