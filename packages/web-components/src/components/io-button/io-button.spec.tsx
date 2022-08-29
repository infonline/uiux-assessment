import { newSpecPage } from '@stencil/core/testing';
import { IoButton } from './io-button';

describe('io-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [IoButton],
      html: '<io-button></io-button>',
    });
    expect(root).toEqualHtml(`
      <io-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </io-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [IoButton],
      html: `<io-button first="Stencil" last="'Don't call me a framework' JS"></io-button>`,
    });
    expect(root).toEqualHtml(`
      <io-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </io-button>
    `);
  });
});
