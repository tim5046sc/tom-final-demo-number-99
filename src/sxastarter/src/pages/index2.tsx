import * as FEAAS from '@sitecore-feaas/sdk/react';

// Component: Article list
// Variant:   ❗️❗️❗️ DON'T TOUCH. Article component
// URL:       https://feaas-components-qa.vercel.app/components/FoKkF9HIJN-yf5
const MyComponent = ({data}) =>
  <FEAAS.Component
    variantId="qf7o_yW2ey-yf5"
    componentId="FoKkF9HIJN-yf5"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data} />

const MyComponent2 = ({data}) =>
  <FEAAS.Component
    variantId="MMAqLcCkwA-yf5"
    componentId="5bMim6pSBc-yf5"
    version="published"
    hostname="https://feaascomponentsapiqa.blob.core.windows.net"
    data={data} />

// Component: Text banner
// Variant:   Green banner
// URL:       https://feaas-components-qa.vercel.app/components/LzqMLbjmkD-yf5
const MyComponent3 = ({data}) =>
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
                    cta: 'Get limited offer!'
                }
            }
        }
    }}
    // post-processes element to change style guide predefined class
    onRender={(element) => {
        if (location.search.includes('offer')) {
            const section = element.querySelector('.-fill--green');
            section?.classList.remove('-fill--green')
            section?.classList.add('-fill--red')
        }
    }}
    data={data} />
    
    
const Default: () => JSX.Element = () => {

  return <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', rowGap: '100px'}}>

        <FEAAS.Stylesheet
        libraryId="tom-cool-demo-yf5"
        hostname="https://feaascomponentsapiqa.blob.core.windows.net" />
        <MyComponent data={{"r0UvRHfiF2-yf5":[{"title":"Best Pro Skate Shoes of 2022","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/22SHOESART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/best-pro-skate-shoes-of-2022.html"},{"title":"Articles How To Apply Griptape To A Skateboard Deck","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/APPLYGRART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-apply-griptape-to-a-skateboard-deck.html"},{"title":"Why You Should Wear Vans Skate Classics Shoes","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/VANSCLART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/why-you-should-wear-vans-skate-classics-shoes.html"},{"title":"How To Choose A Pre-Built Complete Skateboard","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/COMPART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-complete-skateboard.html"},{"title":"How To Choose The Best Skateboard Wheel | Durometer","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/DUROART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-%7C-durometer.html"},{"title":"How To Choose The Best Skateboard Wheel | Shape","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/SHAPEART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-shape.html"},{"title":"How To Choose The Best Skateboard Wheel | Size","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/WHSIZEART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-the-best-skateboard-wheel-size.html"},{"title":"How To Choose Skateboard Wheels","hero-mage-src":"https://img.skatewarehouse.com/fpcache/246/cat_banners/WHEELART.jpg","link-href":"https://www.skatewarehouse.com/news/articles/how-to-choose-skateboard-wheels.html"}]}} />

        <MyComponent2 data={{}} />

        <MyComponent3 data={{"j1fOa434Cw":{"name":"TODAY: UP TO 50% OFF PRE-BUILT COMPLETE SKATEBOARDS","cta":"Start saving now","href":"http://google.com"}}} />
        
  </div>

}

export default Default;

