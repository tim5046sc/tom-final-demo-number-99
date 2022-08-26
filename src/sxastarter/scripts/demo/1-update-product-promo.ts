import API from '@sitecore-feaas/api'
import options from './_options';

export default async function Script() {
  const api = new API(options)
  function ID(id: string) {
    return id + options.suffix
  }

  const library = await api.libraries.get({ id: ID(options.libraryId) })
  const collections = await library.collections.fetch()
  const collection = collections.find((c) => c.name == 'Promo components');
  const component = collection?.components.find((c) => c.name == 'Promo with image');
  await component?.variants.fetch();
  const variants = component?.getVariants();
  const whitePromo = variants?.find((v) => v.name == 'White background');
  

  const newVersion = whitePromo?.saveData({
    view: `
    <style>/* Type: dimensions Id: DDq8VpicyV-dimensions Title: dimensions Instance Id: DDq8VpicyV */ .-dimensions--dimensions[class][class][class][data-instance-id="DDq8VpicyV"] { min-width: 1200px; max-width: 1200px; } /* Data: {"type":"dimensions","props":{"minHeight":null,"maxHeight":null,"minWidth":{"value":1200,"unit":"px"},"maxWidth":{"value":1200,"unit":"px"}},"details":{"title":"dimensions","id":"DDq8VpicyV-dimensions","instanceId":"DDq8VpicyV"}} */ /* --- */ /* Type: layout Id: default-layout Title: default-layout Instance Id: 2oWnZntiR6 */ .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] { display: flex; flex-wrap: wrap; flex-direction: row; justify-content: space-between; align-items: center; } .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] > * { ---layout--available-width: calc(100% - var(---spacing--column-gap, 0px) * 1); ---typography--paragraph-spacing: initial !important; margin-top: var(---typography--paragraph-spacing, var(---self--row-gap, 0px)); margin-left: var(---self--column-gap, 0px); flex-basis: var(---self--column-width); flex-grow: 1; } .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] > :nth-child(-n+2) { ---self--row-gap: initial; } .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] > :not(:nth-child(-n+2)) { ---self--row-gap: var(---spacing--row-gap, 0px); } .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] > :nth-child(2n + 1)) { ---self--column-gap: initial; } .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] > :not(:nth-child(2n + 1)) { ---self--column-gap: var(---spacing--column-gap, 0px); } .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] > :nth-child(2n + 1) { ---self--column-width: calc(var(---layout--available-width, 100%) / 2 * 1); } .-layout--default-layout[class][class][class][data-instance-id="2oWnZntiR6"] > :nth-child(2n + 2) { ---self--column-width: calc(var(---layout--available-width, 100%) / 2 * 1); } /* Data: {"type":"layout","details":{"title":"default-layout","description":"","exampleContent":null,"id":"default-layout","isInternal":true,"isDefault":true,"isHidden":true,"instanceId":"2oWnZntiR6"},"props":{"flexWrap":true,"columnCount":2,"weights":[1,1],"justifyContent":"stretch","alignItems":"center"}} */ /* --- */ /* Type: layout Id: default-layout Title: default-layout Instance Id: ntcRJCn5NT */ .-layout--default-layout[class][class][class][data-instance-id="ntcRJCn5NT"] { display: flex; flex-wrap: nowrap; flex-direction: column; justify-content: center; align-items: center; } .-layout--default-layout[class][class][class][data-instance-id="ntcRJCn5NT"] > * { margin-top: var(---typography--paragraph-spacing, var(---self--row-gap, 0px)); } .-layout--default-layout[class][class][class][data-instance-id="ntcRJCn5NT"] > :nth-child(-n+1) { ---self--row-gap: initial; } .-layout--default-layout[class][class][class][data-instance-id="ntcRJCn5NT"] > :not(:nth-child(-n+1)) { ---self--row-gap: var(---spacing--row-gap, 0px); } .-layout--default-layout[class][class][class][data-instance-id="ntcRJCn5NT"] > :nth-child(1n + 1)) { ---self--column-gap: initial; } .-layout--default-layout[class][class][class][data-instance-id="ntcRJCn5NT"] > :not(:nth-child(1n + 1)) { ---self--column-gap: var(---spacing--column-gap, 0px); } .-layout--default-layout[class][class][class][data-instance-id="ntcRJCn5NT"] > :nth-child(1n + 1) { ---self--column-width: calc(var(---layout--available-width, 100%) / 1 * 1); } /* Data: {"type":"layout","details":{"title":"default-layout","description":"","exampleContent":null,"id":"default-layout","isInternal":true,"isDefault":true,"isHidden":true,"instanceId":"ntcRJCn5NT"},"props":{"flexWrap":true,"columnCount":1,"weights":[1],"justifyContent":"center","alignItems":"center"}} */ /* --- */ /* Type: spacing Id: ySmCuZjCn- Title: 10px Instance Id: ntcRJCn5NT */ .-spacing--10px[class][class][class][data-instance-id="ntcRJCn5NT"] { padding-top: 30px; padding-right: 30px; padding-bottom: 30px; padding-left: 30px; } .-spacing--10px[class][class][class][data-instance-id="ntcRJCn5NT"] > * { ---spacing--row-gap: 30px; ---spacing--column-gap: 10px; } /* Data: {"type":"spacing","props":{"paddingTop":"30px","paddingBottom":"30px","paddingLeft":"30px","paddingRight":"30px","rowGap":"30px","columnGap":{"value":10,"unit":"px"},"horizontalGap":"30px"},"details":{"title":"10px","description":"","exampleContent":null,"id":"ySmCuZjCn-","isDefault":false,"instanceId":"ntcRJCn5NT"}} */ /* --- */ /* Type: layout Id: default-layout Title: default-layout Instance Id: gC_JOWJdrJ */ .-layout--default-layout[class][class][class][data-instance-id="gC_JOWJdrJ"] { display: flex; flex-wrap: nowrap; flex-direction: column; justify-content: center; align-items: center; } .-layout--default-layout[class][class][class][data-instance-id="gC_JOWJdrJ"] > * { margin-top: var(---typography--paragraph-spacing, var(---self--row-gap, 0px)); } .-layout--default-layout[class][class][class][data-instance-id="gC_JOWJdrJ"] > :nth-child(-n+1) { ---self--row-gap: initial; } .-layout--default-layout[class][class][class][data-instance-id="gC_JOWJdrJ"] > :not(:nth-child(-n+1)) { ---self--row-gap: var(---spacing--row-gap, 0px); } .-layout--default-layout[class][class][class][data-instance-id="gC_JOWJdrJ"] > :nth-child(1n + 1)) { ---self--column-gap: initial; } .-layout--default-layout[class][class][class][data-instance-id="gC_JOWJdrJ"] > :not(:nth-child(1n + 1)) { ---self--column-gap: var(---spacing--column-gap, 0px); } .-layout--default-layout[class][class][class][data-instance-id="gC_JOWJdrJ"] > :nth-child(1n + 1) { ---self--column-width: calc(var(---layout--available-width, 100%) / 1 * 1); } /* Data: {"type":"layout","details":{"title":"default-layout","description":"","exampleContent":null,"id":"default-layout","isInternal":true,"isDefault":true,"isHidden":true,"instanceId":"gC_JOWJdrJ"},"props":{"flexWrap":true,"columnCount":1,"weights":[1],"justifyContent":"center","alignItems":"center"}} */ /* --- */ /* Type: typography Id: yaDTfwZit_ Title: Extra large bold Description: Headline Example Content: Example Instance Id: TiayraCO33 */ .-typography--extra-large-bold[class][class][class][data-instance-id="TiayraCO33"] { margin-top: var(---typography--paragraph-spacing, var(---self--row-gap, 0px)); font-family: "Roboto"; font-weight: 700; font-style: normal; font-size: 70px; line-height: 3rem; letter-spacing: inherit; } :not(div):not(a) + .-typography--extra-large-bold[class][class][class][data-instance-id="TiayraCO33"] { ---typography--paragraph-spacing: 1rem; } /* Data: {"type":"typography","props":{"fontVariant":{"id":"dEE_wgSpJw","name":"700"},"allowBoldAndItalic":false,"base":{"fontSize":{"value":70,"unit":"px"},"lineHeight":{"value":3,"unit":"rem"},"letterSpacing":null,"paragraphSpacing":{"value":1,"unit":"rem"}},"overrides":{}},"details":{"title":"Extra large bold","description":"Headline","exampleContent":"Example","id":"yaDTfwZit_","isDefault":false,"instanceId":"TiayraCO33"}} */</style>
<section class="-dimensions--dimensions -section--white -spacing--no-spacing" data-instance-id="DDq8VpicyV">
  <div class="-card--transparent -layout--default-layout -spacing--no-spacing" data-instance-id="2oWnZntiR6">
    <div class="-card--transparent -layout--default-layout" data-instance-id="ntcRJCn5NT">
      <p class="-text--tags-and-decorations -typography--large" data-instance-id="8lWMEhEl_k">UP TO</p>
      <p class="-text--red-text -typography--extra-large-bold" data-instance-id="TiayraCO33">50% OFF</p>
      <p class="-text--paragraph" data-instance-id="E2ska8cI9H">Pre-Built Complete Skateboards!</p>
      <div class="-card--transparent -layout--default-layout" data-instance-id="gC_JOWJdrJ">
        <p class="-button--outline" data-instance-id="UbwTScRGAp">Start Saving Now</p>
        <p class="-text--tags-and-decorations---gray -typography--extra-small" data-instance-id="4PRa-Ix-Zm">Prices as marked. Available while supplies last.</p>
      </div>
    </div>
    <div class="-card--transparent -spacing--no-spacing" data-instance-id="JsxbgdzCeT">
      <figure class="image"><img src="https://feaascomponentsapiqa.blob.core.windows.net/images/EkQINyaivcnGNdjm2xDHKzHuqZUVlXYQ.png" /></figure>
    </div>
  </div>
</section>`
  })
  newVersion?.stage();
  newVersion?.publish()

  await component?.saveVariants();
  

}

Script()


