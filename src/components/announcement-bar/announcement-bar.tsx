import { PrismicRichText, ResponsiveContainer } from '@ionic-internal/ionic-ds';
import { h, Prop, Component, Host, getAssetPath } from '@stencil/core';
import { slugify } from 'src/utils/common';

import { trackClick } from '../../utils/analytics';

// interface AnnouncementBarProps {
//   prismicData: {
//     button_text: string;
//     text: any;
//     link: {
//       url: string;
//     };
//     theme: string;
//   };
// }

@Component({
  tag: 'announcement-bar',
  styleUrl: 'announcement-bar.scss',
  assetsDirs: ['assets-announcement-bar'],
  scoped: true,
})
export class AnnouncementBar {
  @Prop() prismicData;

  render() {
    const {
      link: { url },
      button_text,
      button_arrow,
      text,
      theme,
    } = this.prismicData;

    const themeSlug = slugify(theme);

    return (
      <Host
        class={{
          'ui-announcement-bar': true,
          [`ui-announcement-bar--${themeSlug}`]: Boolean(theme),
        }}
        style={{
          '--asset-path': `url('${getAssetPath(
            `./assets-announcement-bar/bg-${themeSlug}.png`,
          )}')`,
        }}
      >
        <a
          href={url}
          target="_blank"
          onClick={event => trackClick('Capacitor Announcement Bar CTA', event)}
          rel="noopener"
          class="link-wrapper"
        >
          <ResponsiveContainer>
            <PrismicRichText richText={text} />
            <button>
              {button_text}
              {button_arrow && <span class="arrow"> -&gt;</span>}
            </button>
          </ResponsiveContainer>
        </a>
      </Host>
    );
  }
}
