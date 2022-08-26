> npx ts-node --project=tsconfig.scripts.json scripts/demo/0-clone-lib.ts   

# 1. Embedding article list
Using Article list

## Demonstrates: 
- Layout feature
- Data mapping
- Live update

## Narrative:
- It's easy to add components on the page. 
- Components use data
- Can visually edit component, e.g. layout settings
- Can add extra mapping
- Can publish and see effect on the site


### 1.1 Embed to page
- Copy paste code from Embed dialog (not codepen)
- Paste into top level of a file
- Take out JSX and put it into the pag

### 1.2 Map image to link
- Click on the image
- Go to Link
- Go to Mapped link
- Choose "Link-Href" property

### 1.3 Switch between 3 and 4 columns
- DONT FORGET TO STAGE & PUBLISH
- Go back to app, refresh page  


# 2. Editing component and variations
Using: Promo with image

## Demonstrates:
- Swapping variants
- Semantic html - can swap columns by rearranging content
- Programmatic access/publication
- Live update from code to target website


## Narrative: 
- Components have variants
- Can easily switch between variants
- Dont have to use visual editor
- Can update variants and publish directly to site
- React or editor wont even know

### 1. Embed Product with Image (red)
- Copy paste code from Embed dialog (not codepen)
- Paste into top level of a file
- IMPORTANT: Rename MyComponent to MyComponent2
- Take out JSX and put it into the page
- Refresh page to see red variant

### 2. Swap red with white:
- Go to Embed dialog for white variant
- Copy `variantId`
- Go back to page code, swap old variantId with new
- Refresh page to see white variant now

### Swap columns in code 
- Go to `scripts/demo/1-update-product-promo.ts`
- In HTML swap two divs with `-card` classes
- Run script: 
    > npx ts-node --project=tsconfig.scripts.json scripts/demo/1-update-product-promo.ts
- Refresh page

    
# 3. Using component as a view
Using: Text banner

## Demonstrates:
- Passing data externally
- Modifying style guide classes
- External logic to customize view

## Narrative:
- Components can be designed static, then turned into dynamic
- Components can be used for external data
- App can decide when and what to show
- Changes can be purposeful based on user behavior (Personalization)
- Code can directly adjust components html 

### 1.Map data visually
- Go to datasources
- Create new datasource called `Offer`
- Paste sample:
        > {"name": "TODAY: UP TO 50% OFF PRE-BUILT COMPLETE SKATEBOARDS", "cta": "Start saving now", "href": "http://google.com"}
- Go to Text banner component
- Click on red component "UP TO 50%..."
- Click Gear icon to configure element
- Click Text -> Mapped text -> Choose Offer datasource -> Name property
- Click on "Start saving now" button
- Click Gear icon to configure element
- Click Text -> Mapped text -> Choose Offer datasource -> Cta property
- Click Back icon
- Click Link -> Mapped link -> Href

### Embed component
- DONT FORGET TO STAGE & PUBLISH
- Copy paste code from Embed dialog (not codepen)
- Paste into top level of a file
- Take out JSX and put it into the page
- IMPORTANT: Rename MyComponent to MyComponent3
- Refresh page

### Customize component logic
- Go to page file
- Add attributes to MyComponent3
```js:
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
            const section = element.querySelector('.-fill--red');
            section?.classList.remove('-fill--red')
            section?.classList.add('-fill--green')
        }
    }}
```

##4. Product list
Using: Product list

### Narrative: 
- Components can be controlled by external JS and CSS to provide animations
- Component can be edited and manipulated in editor later
- Easy to reconfigure components

### 4.1 Embed the component
- Go to Product list component
- Copy embed code
- Paste it to the page
- Rename to MyComponent4
- Put it on the page - it's static.
### 4.2 
- Go to page source
- Paste following code:
```ts:
    
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
```
(CONTD.)
- Wrap MyComponent4 into <AnimatedCards> lile this:
```jsx:
    <AnimatedCards>
        <MyComponent4 ... />
    </AnimatedCards>
```
- Refresh page - it shows animation on scroll

### 4.3 Edit component
- Go to Product List component in Editor
- Click on paragraph containing price
- Delete it
- Click on the button 
- Choose "Add element" -> "Variable"
- It will display configuring dialog for variable (or click variable to open it)
- Go to Text, choose "Complete skateboards", choose "Product_Price" field
- Publish component
- Update page - it shows animation with new updated component



# 5. Carousel with buttons
Using: Brand carousel

## Narrative:
- Can create/embed coded components without using builder at all
- External components  code can be embedded into editor via web components
- Styled content can be dropped into the component
- Component can route different types of content based on slot (buttons vs slides in the example)
- Code works directly in editor
- Content is still stylable/editable/repeatable

Demonstrates:
- Support for external web components
- Using styled content into a web component
- Slots feature to customize elements separately from buttons
- Embedding without "Embed dialog", directly with code


## Create component
- Run script
    > npx ts-node --project=tsconfig.scripts.json scripts/demo/1-update-product-promo.ts
    - It creates component variant that uses web component side, embeds javascript. 
    - Uses `slot` attribute for buttons so component understands
    - Passes settings as custom attributes
    - Uses custom element to initialize web component
    - Linked script will power it up

- Put it on the page:
    IMPORTANT: Change suffix `-yf5` in variantId, componentId and data

      <FEAAS.Component
        variantId="brand-carousel-yf5"
        componentId="_vWlie5YY1-yf5"
        version="published"
        hostname="https://feaascomponentsapiqa.blob.core.windows.net"
        data={{'brandslist-yf5': [{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/BAKER.png","Brand_title":"Baker","Brand_link-href":"https://www.skatewarehouse.com/Baker/catpage-BAKER.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/INDEPENDENT.png","Brand_title":"Independent","Brand_link-href":"https://www.skatewarehouse.com/Independent/catpage-INDEPENDENT.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/NIKE.png","Brand_title":"Nike SB","Brand_link-href":"https://www.skatewarehouse.com/Nike_SB/catpage-NIKE.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/SPITFIRE.png","Brand_title":"Spitfire","Brand_link-href":"https://www.skatewarehouse.com/Spitfire/catpage-SPITFIRE.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/SANTACRUZ.png","Brand_title":"Santa Cruz","Brand_link-href":"https://www.skatewarehouse.com/Santa_Cruz/catpage-SANTACRUZ.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/PRIMITIVE.png","Brand_title":"Primitive","Brand_link-href":"https://www.skatewarehouse.com/Primitive/catpage-PRIMITIVE.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/VANS.png","Brand_title":"Vans","Brand_link-href":"https://www.skatewarehouse.com/Vans/catpage-VANS.html"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/DICKIES67.png","Brand_title":"Dickies","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/TOYMACHINE.png","Brand_title":"Toy Machine","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/THRASHER.png","Brand_title":"Trasher","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/GIRL.png","Brand_title":"Girls","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/ADIDAS.png","Brand_title":"Adidas","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/ANTIHERO.png","Brand_title":"Anti Hero","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/ENJOI.png","Brand_title":"Enjoi","Brand_link-href":"https://www.skatewarehouse.com"},{"Brand_image-src":"https://img.skatewarehouse.com/fpcache/70/icons_logos/BONES.png","Brand_title":"Bones Wheels","Brand_link-href":"https://www.skatewarehouse.com"}]}}
      />

    - Buttons will be clickable
    - Slider will be draggable

## 5.2 Update component

- Go to Brand carousel component in editor
- Cmd+click double click left button
- Change text to "Previous"
- Click "Button" pill to choose style - choose other style 
- +Cmd+click double click on right button
- Change text to "Next"
- Click "Button" pill to choose style - choose other style 
- Cmd click on component listing
- Click "Button" pill to choose style - choose "Gray gradient"
- Stage & Publish
- Go to page
- Update page
- CURRENTLY WILL NOT CORRECTLY SHOW UPDATES, TBD MONDAY


TODO: Fix data-attributes
