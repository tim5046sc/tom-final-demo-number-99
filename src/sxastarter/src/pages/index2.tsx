import * as FEAAS from '@sitecore-feaas/sdk/react';
import { useEffect, useRef } from 'react';

// Component: Article list
// Variant:   ❗️❗️❗️ DON'T TOUCH. Article component
// URL:       https://feaas-components-qa.vercel.app/components/FoKkF9HIJN-yf5
const MyComponent = ({ data }) => (
  <FEAAS.Component
    variantId="qf7o_yW2ey-yf5"
    componentId="FoKkF9HIJN-yf5"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data}
  />
);

const MyComponent2 = ({ data }) => (
  <FEAAS.Component
    variantId="MMAqLcCkwA-yf5"
    componentId="5bMim6pSBc-yf5"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data}
  />
);

// Component: Text banner
// Variant:   Green banner
// URL:       https://feaas-components-qa.vercel.app/components/LzqMLbjmkD-yf5
const MyComponent3 = ({ data }) => (
  <FEAAS.Component
    variantId="Y03eladrK1-yf5"
    componentId="LzqMLbjmkD-yf5"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    // changes data to show better offer
    processData={(_element, data) => {
      if (location.search.includes('offer')) {
        const datasourceName = Object.keys(data)[0];
        return {
          ...data,
          [datasourceName]: {
            ...data[datasourceName],
            name: 'UP to 70% OFF PRE-BUILD COMPLETE SKATEBOARDS',
            cta: 'Get limited offer!',
          },
        };
      }
    }}
    // post-processes element to change style guide predefined class
    onRender={(element) => {
      if (location.search.includes('offer')) {
        const section = element.querySelector('.-fill--green');
        section?.classList.remove('-fill--green');
        section?.classList.add('-fill--red');
      }
    }}
    data={data}
  />
);
// Component: Product List
// Variant:   Name of a new variant
// URL:       https://feaas-components-qa.vercel.app/components/nTvEkscQYK-yf3
const MyComponent4 = ({data}) =>
  <FEAAS.Component
    variantId="sJ1Oe4nqJm-yf3"
    componentId="nTvEkscQYK-yf3"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data} />

const AnimatedCards = ({ children }: { children: unknown }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        var observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            var target = entry.target;
            if (entry.intersectionRatio >= 0.5) {
            target.classList.add('visible');
            } else {
            target.classList.remove('visible');
            }
        });
        }, {
            rootMargin: '100px',
            threshold: .7
            });
        function observe() {
            var sections = ref.current?.querySelectorAll('[class*="-card"][data-path-scope]');
            Array.prototype.forEach.call(sections, (section) => {
                observer.observe(section);
            });
        }
        const mutations = new MutationObserver(observe);
        observe();
        if (ref.current)
            mutations.observe(ref.current, {subtree: true, childList: true});
        return () => {
            observer.disconnect()
            mutations.disconnect();
        }
    }, [ref.current]);
    
    const cssText = `
    .animated-cards  [class*="-card"][data-path-scope]:not(.visible) {
        transition: transform 0.15s, opacity .1s;
        transform: translateY(50px);
        opacity: 0;
    }
    .animated-cards [class*="-card"] {
        transition: transform 0.95s, opacity 1.6s;
    }    
    `
    return <div ref={ref} className='animated-cards'>
        <style>{cssText}</style>    
        {children}
    </div>;
    }

const Default: () => JSX.Element = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', rowGap: '100px' }}
    >
      <FEAAS.Stylesheet
        libraryId="tom-cool-demo-yf5"
        hostname="https://feaascomponentsapiqa.blob.core.windows.net"
      />
      <FEAAS.Component
        variantId="brand-carousel-yf5"
        componentId="_vWlie5YY1-yf5"
        version="published"
        hostname="https://feaascomponentsapiqa.blob.core.windows.net"
        data={{'brandslist-yf5': [{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/BAKER.png","Brand_title":"Baker","Brand_link-href":"https://www.skatewarehouse.com/Baker/catpage-BAKER.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/INDEPENDENT.png","Brand_title":"Independent","Brand_link-href":"https://www.skatewarehouse.com/Independent/catpage-INDEPENDENT.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/NIKE.png","Brand_title":"Nike SB","Brand_link-href":"https://www.skatewarehouse.com/Nike_SB/catpage-NIKE.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/SPITFIRE.png","Brand_title":"Spitfire","Brand_link-href":"https://www.skatewarehouse.com/Spitfire/catpage-SPITFIRE.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/SANTACRUZ.png","Brand_title":"Santa Cruz","Brand_link-href":"https://www.skatewarehouse.com/Santa_Cruz/catpage-SANTACRUZ.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/PRIMITIVE.png","Brand_title":"Primitive","Brand_link-href":"https://www.skatewarehouse.com/Primitive/catpage-PRIMITIVE.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/VANS.png","Brand_title":"Vans","Brand_link-href":"https://www.skatewarehouse.com/Vans/catpage-VANS.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/DICKIES67.png","Brand_title":"Dickies","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/TOYMACHINE.png","Brand_title":"Toy Machine","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/THRASHER.png","Brand_title":"Trasher","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/GIRL.png","Brand_title":"Girls","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/ADIDAS.png","Brand_title":"Adidas","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/ANTIHERO.png","Brand_title":"Anti Hero","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/ENJOI.png","Brand_title":"Enjoi","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/BONES.png","Brand_title":"Bones Wheels","Brand_link-href":"https://www.skatewarehouse.com"}]}}
      />
      <MyComponent
        data={{
          'r0UvRHfiF2-yf5': [
            {
              title: 'Best Pro Skate Shoes of 2022',
              'hero-mage-src':
                'https://img.skatewarehouse.com/fpcache/246/cat_banners/22SHOESART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/best-pro-skate-shoes-of-2022.html',
            },
            {
              title: 'Articles How To Apply Griptape To A Skateboard Deck',
              'hero-mage-src':
                'https://img.skatewarehouse.com/fpcache/246/cat_banners/APPLYGRART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/how-to-apply-griptape-to-a-skateboard-deck.html',
            },
            {
              title: 'Why You Should Wear Vans Skate Classics Shoes',
              'hero-mage-src':
                'https://img.skatewarehouse.com/fpcache/246/cat_banners/VANSCLART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/why-you-should-wear-vans-skate-classics-shoes.html',
            },
            {
              title: 'How To Choose A Pre-Built Complete Skateboard',
              'hero-mage-src': 'https://img.skatewarehouse.com/fpcache/246/cat_banners/COMPART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/how-to-choose-complete-skateboard.html',
            },
            {
              title: 'How To Choose The Best Skateboard Wheel | Durometer',
              'hero-mage-src': 'https://img.skatewarehouse.com/fpcache/246/cat_banners/DUROART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-%7C-durometer.html',
            },
            {
              title: 'How To Choose The Best Skateboard Wheel | Shape',
              'hero-mage-src':
                'https://img.skatewarehouse.com/fpcache/246/cat_banners/SHAPEART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-shape.html',
            },
            {
              title: 'How To Choose The Best Skateboard Wheel | Size',
              'hero-mage-src':
                'https://img.skatewarehouse.com/fpcache/246/cat_banners/WHSIZEART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-size.html',
            },
            {
              title: 'How To Choose Skateboard Wheels',
              'hero-mage-src':
                'https://img.skatewarehouse.com/fpcache/246/cat_banners/WHEELART.jpg',
              'link-href':
                'https://www.skatewarehouse.com/news/articles/how-to-choose-skateboard-wheels.html',
            },
          ],
        }}
      />

      <MyComponent2 data={{}} />

      <MyComponent3
        data={{
          j1fOa434Cw: {
            name: 'TODAY: UP TO 50% OFF PRE-BUILT COMPLETE SKATEBOARDS',
            cta: 'Start saving now',
            href: 'http://google.com',
          },
        }}
      />

      

      <AnimatedCards>
        <MyComponent4 data={{"yD_2MhIswx-yf3":[{"Product_title":"Verb Reverb Black/Cream Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/VBRVBX80CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Creature Ripped Logo Micro Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/CERM75CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Darkstar Warrior Youth Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/DSWYCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Supply Orbit Logo Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSOL80CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Almost Light Bright Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/ALLBCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Supply Orbit Logo Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSOL77CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Blind OG Stand Out Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/BNOSOCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Real Island Oval Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/RLILDO75CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Happy Flower Child Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/HPFCCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Supply Insignia Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSIC77CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Blind Repeat Rail Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/BNRRSTCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Real Be Free MD Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/RLBFRE77CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Happy Butter Free Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/HPBFCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Enjoi Chopper Green Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/EICGRCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Squad Brazil Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSBRZ75CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"}]}} />
      </AnimatedCards>
    </div>
  );
};

export default Default;

