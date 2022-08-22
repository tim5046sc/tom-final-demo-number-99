/* eslint-disable @typescript-eslint/no-explicit-any */
import API from '@sitecore-feaas/api';
import { kebabCase } from 'lodash';
// import fs from 'node:fs';
// const file = fs.readFileSync(__dirname + '/my_custom_component.js');

class ComponentsCli {
  api: API;
  components: { [id: string]: any };
  datasources: { [id: string]: any };
  library: any;
  collection: any;
  constructor() {
    this.api = new API({
      hostname: 'http://components-api-dev.sitecore-staging.cloud',
      apiKey: 'my-api-key',
      verbose: true,
    });
    this.components = {};
    this.datasources = {};
  }

  async createCollection(name: string) {
    this.library = await this.api.libraries.get('our-wonderful-library');
    this.collection = await this.library.collections.save({
      id: kebabCase(name),
      name,
    });
  }

  async registerCustomComponent(name: string, file: any) {
    // Upload local file as web component
    await this.api.uploadBlob('webcomponents', name, file, {
      headers: {
        'Content-Type': 'text/javascript',
      },
    });
  }

  async createComponent(opts: any, collection: any) {
    const { id, name, description } = opts;
    this.components[id] = await collection.components.save({
      id,
      name,
      description,
    });
  }

  async createDatasource(opts: any) {
    const { id, name, description, sample } = opts;
    this.datasources[id] = await this.library.datasources.save({
      id,
      name,
      description,
      sample,
    });
  }

  async createVariant(componentId: string, opts: any) {
    const { refId, name, status, view } = opts;
    // Load current variants
    await this.components[componentId].variants.fetch();

    // Create a new variant and publish it
    await this.components[componentId].establishVariant({
      refId,
      name,
      status,
      view,
    });
    await this.components[componentId].saveVariants();
  }

  // // Load current variants
  // await dominator1.variants.fetch();

  // // Add new variant and publish it
  // await dominator1.establishVariant({
  //   refId: 'dominator1-variant1',
  //   name: 'Just embed1',
  //   status: 'published',
  //   view: `
  //     <div class="-card">
  //       <my-custom-component data-embed-src="https://feaascomponentsapidev.blob.core.windows.net/webcomponents/my_custom_component.js" class="-embed" data-path-attributes="dominatorData"></my-custom-component>
  //     </div>
  //   `,
  // });

  // // Add new component into that collection
  // const dominator1 = await collection.components.save({
  //   id: 'our-dominator1',
  //   name: 'World dominator',
  //   description: 'Simple variant with web component',
  // });

  // Datasource that will act as attributes definition
  // await library.datasources.save({
  //   id: 'dominatorData',
  //   name: 'Dominator Datasource',
  //   description: 'Example attributes for Dominator',
  //   sample: {
  //     name: 'YarikZ',
  //     goal: 'Explode the planet',
  //     status: 'progressing',
  //     items: [
  //       {
  //         'title-text': 'Hello world Hello Thomas 2r23r',
  //         html: '<div class="-card--solid-color-cards -fill--light-blue"><button class="-button">Hola</button> <p><a href="#">Link</a> Text</div></p>',
  //         open: true,
  //       },
  //       {
  //         'title-text': 'Bye world',
  //         html: 'Mystical island',
  //       },
  //     ],
  //     items2: [
  //       {
  //         'title-text': 'Cherry pop',
  //         html: '<div class="-card--solid-color-cards -fill--light-blue"><button class="-button">Hola</button> <p><a href="#">Link</a> Text</div></p>',
  //       },
  //       {
  //         'title-text': 'Berry',
  //         html: '<div class="-card--solid-color-cards -fill--light-blue"><button class="-button">Hola</button> <p><a href="#">Link</a> Text</div></p>',
  //       },
  //       {
  //         'title-text': 'Pear',
  //         html: '<div class="-card--solid-color-cards -fill--light-blue"><button class="-button">Hola</button> <a href="#">Link</a> Text</div>',
  //         open: true,
  //       },
  //       {
  //         'title-text': 'Coolio',
  //         html: 'Mystical island',
  //       },
  //     ],
  //   },
  // });

  // Load current variants
  // await dominator1.variants.fetch();

  // Add new variant and publish it
  // await dominator1.establishVariant({
  //   refId: 'dominator1-variant1',
  //   name: 'Just embed1',
  //   status: 'published',
  //   view: `
  //     <div class="-card">
  //       <my-custom-component data-embed-src="https://feaascomponentsapidev.blob.core.windows.net/webcomponents/my_custom_component.js" class="-embed" data-path-attributes="dominatorData"></my-custom-component>
  //     </div>
  //   `,
  // });

  // Add another variant and stage it
  // const variant2 = await dominator1.establishVariant({
  //   refId: 'dominator1-variant2',
  //   name: 'Has content',
  //   status: 'saved',
  //   view: `
  //   <section class="-section--gradient-sections">
  //     <div class="-card--white-card-with-drop-shadow">
  //       <h2>Data: <var data-path="dominatorData.name" data-path-placeholder="Oh well"></var></h2>
  //       <p>Updates are published can be mixed with html!</p>
  //     </div>
  //     <bx-accordion class="-embed" data-embed-src="https://1.www.s81c.com/common/carbon/web-components/version/v1.21.0/accordion.min.js" style="background: #fff">
  //       <bx-accordion-item data-path-scope="dominatorData.items.*" data-path-attributes="dominatorData.items.*">
  //       </bx-accordion-item>
  //     </bx-accordion>
  //   </section>
  //   `,
  // });
  // variant2.stage();

  // Save updates
  // await dominator1.saveVariants();

  // Copy styles from demo library
  // const demoLibrary = await api.libraries.get('demo-site1');
  // const demoStyles = await demoLibrary.stylesheet.get();
  // await library.stylesheet.save({
  //   source: demoStyles.source,
  //   css: demoStyles.css,
  // });
}

const cli = new ComponentsCli();
cli.createCollection('tom collection');
