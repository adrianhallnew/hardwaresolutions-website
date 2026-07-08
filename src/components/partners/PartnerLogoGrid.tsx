import type { Partner } from "@/content/types";

function PartnerLogo({ partner }: { partner: Partner }) {
  const content = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={partner.logo} alt={partner.name} className="partner-logo-img h-12 w-auto" />
  );

  return (
    <div className="group flex flex-col items-center gap-2">
      {partner.url ? (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
        >
          {content}
        </a>
      ) : (
        content
      )}
      {partner.tier && <span className="text-caption text-ink-muted">{partner.tier}</span>}
    </div>
  );
}

export function PartnerLogoGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid grid-cols-3 gap-8 md:grid-cols-5">
      {partners.map((partner) => (
        <PartnerLogo key={partner.id} partner={partner} />
      ))}
    </div>
  );
}
