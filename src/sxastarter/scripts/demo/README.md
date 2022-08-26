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
- Take out JSX and put it into the page

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

###. Product list
    Using: Product list

    Narrative: 
        - Components can be controlled by external JS and CSS to provide animations

    TODO: Find decent animation


### Carousel with buttons
    Using: Brand carousel

    Narrative:
        - External components can code can be embedded into editor via web components
        - Styled content can be dropped into the component
        - Component can route different types of content based on slot
        - Code works directly in editor
        - Content is still stylable

    1) Updating button style
    2) cmd+click card, updating card style to "Gray gradient"
    
    Demonstrates:
        - Support for external web components
        - Putting styled content into a web component
        - Slots feature to customize elements separately from buttons

    TODO: Button slot (via publishing)
    TODO: Fix data-attributes
