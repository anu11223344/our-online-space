import { Instagram } from "lucide-react";

/**
 * Instagram live-feed embed.
 *
 * Instagram does not offer a free official feed embed, so the live grid uses a
 * SnapWidget (or LightWidget) iframe. To activate it:
 *   1. Create a free widget at https://snapwidget.com for @innerhorizon.in
 *   2. Copy the iframe URL they generate
 *   3. Paste it into INSTAGRAM_WIDGET_URL below
 * Until then, the section shows a link to the Instagram profile.
 */
const INSTAGRAM_WIDGET_URL = "";

const InstagramFeed = () => {
  if (INSTAGRAM_WIDGET_URL) {
    return (
      <iframe
        src={INSTAGRAM_WIDGET_URL}
        title="Inner Horizon on Instagram"
        className="w-full border-0"
        style={{ height: 480 }}
        loading="lazy"
        allowTransparency
      />
    );
  }

  return (
    <a
      href="https://www.instagram.com/innerhorizon.in"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Inner Horizon on Instagram"
      className="interactive-card mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-sage-border bg-card p-8 text-center"
    >
      <Instagram className="h-10 w-10 text-healing-sage" aria-hidden="true" />
      <p className="text-lg font-semibold text-foreground">@innerhorizon.in</p>
      <p className="text-sm text-muted-foreground">
        See the latest posts on Instagram
      </p>
    </a>
  );
};

export default InstagramFeed;
