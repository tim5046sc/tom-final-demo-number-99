import * as FEAAS from '@sitecore-feaas/sdk/react';
import { useRef } from 'react';

// Component: Article list
// Variant:   ❗️❗️❗️ DON'T TOUCH. Article component
// URL:       https://feaas-components-qa.vercel.app/components/FoKkF9HIJN-yf4
const MyComponent = ({data}) =>
  <FEAAS.Component
    variantId="qf7o_yW2ey-yf4"
    componentId="FoKkF9HIJN-yf4"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data} />

// Component: Promo with image
// Variant:   Red background
// URL:       https://feaas-components-qa.vercel.app/components/5bMim6pSBc-yf4
const MyComponent2 = ({data}) =>
  <FEAAS.Component
    variantId="MMAqLcCkwA-yf4"
    componentId="5bMim6pSBc-yf4"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data} />

// Component: Text banner
// Variant:   Red banner
// URL:       https://feaas-components-qa.vercel.app/components/LzqMLbjmkD
const MyComponent3 = ({data}) => {
  return <FEAAS.Component
    variantId="otYfJmOEIn"
    componentId="LzqMLbjmkD"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    processData={(_element, data) => {
      if (location.search.includes('offer')) {
        const datasourceName = Object.keys(data)[0];
        return {
          ...data,
          [datasourceName]: {
            ...data[datasourceName],
            name: 'UP to 70% OFF PRE-BUILD COMPLETE SKATEBOARDS',
            cta: 'Get limited offer!'
          }
        }
      }
    }}
    onRender={(element) => {
      if (location.search.includes('offer')) {
        const section = element.querySelector('.-fill--red');
        section?.classList.remove('-fill--red')
        section?.classList.add('-fill--green')
      }
    }}
    data={data} />
}


const MyComponent4 = ({data}) =>
  <FEAAS.Component
    variantId="sJ1Oe4nqJm-yf4"
    componentId="nTvEkscQYK-yf4"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data} />


const Default: () => JSX.Element = () => {

  return <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', rowGap: '100px'}}>
  <FEAAS.Stylesheet
    libraryId="tom-cool-demo-yf4"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net" />
  <MyComponent data={{"r0UvRHfiF2-yf4":[{"title":"Best Pro Skate Shoes of 2022","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/22SHOESART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/best-pro-skate-shoes-of-2022.html"},{"title":"Articles How To Apply Griptape To A Skateboard Deck","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/APPLYGRART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-apply-griptape-to-a-skateboard-deck.html"},{"title":"Why You Should Wear Vans Skate Classics Shoes","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/VANSCLART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/why-you-should-wear-vans-skate-classics-shoes.html"},{"title":"How To Choose A Pre-Built Complete Skateboard","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/COMPART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-complete-skateboard.html"},{"title":"How To Choose The Best Skateboard Wheel | Durometer","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/DUROART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-%7C-durometer.html"},{"title":"How To Choose The Best Skateboard Wheel | Shape","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/SHAPEART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-shape.html"},{"title":"How To Choose The Best Skateboard Wheel | Size","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/WHSIZEART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-size.html"},{"title":"How To Choose Skateboard Wheels","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/WHEELART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-skateboard-wheels.html"}]}} />
    
  <MyComponent2 data={{}} />
  <MyComponent3 data={{"SCtFlkpcph":{"name":"UP TO 50% OFF PRE-BUILT COMPLETE SKATEBOARDS","cta":"Start saving now","href":"http://google.com","className":"--fill-red"}}} />

  <MyComponent4 data={{"yD_2MhIswx-yf4":[{"Product_title":"Verb Reverb Black/Cream Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/VBRVBX80CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Creature Ripped Logo Micro Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/CERM75CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Darkstar Warrior Youth Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/DSWYCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Supply Orbit Logo Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSOL80CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Almost Light Bright Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/ALLBCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Supply Orbit Logo Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSOL77CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Blind OG Stand Out Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/BNOSOCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Real Island Oval Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/RLILDO75CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Happy Flower Child Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/HPFCCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Supply Insignia Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSIC77CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Blind Repeat Rail Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/BNRRSTCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_clearance_tag":"Clearance","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Real Be Free MD Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/RLBFRE77CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Happy Butter Free Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/HPBFCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"Enjoi Chopper Green Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/EICGRCMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_tag_new":"New","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"},{"Product_title":"The Heart Squad Brazil Complete","Product_image-src":"https://img.skatewarehouse.com/cache/205/THSBRZ75CMP-1.jpg","Product_price":"$54.98","Product_descritpion":"8.25 x 31.5","Product_link-href":"https://www.skatewarehouse.com/Blind_OG_Stand_Out_Complete/descpage-BNOSOCMP.html"}]}} />


  </div>

}

export default Default;

