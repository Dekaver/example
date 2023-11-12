// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    usePrimeVue: true,
    options: {
      options: {
        unstyled: true,
        ripple: true,
        inputStyle: 'filled'
      }
    },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      include: [
        'Accordion',
        'AccordionTab',
        'AutoComplete',
        'Avatar',
        'Badge',
        'Breadcrumb',
        'Button',
        'Calendar',
        'Carousel',
        'CascadeSelect',
        'Checkbox',
        'Chip',
        'ColorPicker',
        'Column',
        'ColumnGroup',
        'ConfirmDialog',
        'ContextMenu',
        'DataView',
        'Dialog',
        'Divider',
        'Dropdown',
        'Fieldset',
        'FileUpload',
        'FullCalendar',
        'Galleria',
        'Inplace',
        'InputSwitch',
        'InputText',
        'InputTextarea',
        'Knob',
        'Lightbox',
        'Listbox',
        'MegaMenu',
        'Menubar',
        'Menu',
        'Message',
        'MultiSelect',
        'OrderList',
        'OverlayPanel',
        'Paginator',
        'Panel',
        'PanelMenu',
        'Password',
        'PickList',
        'ProgressBar',
        'RadioButton',
        'Rating',
        'Row',
        'SelectButton',
        'SlideMenu',
        'Slider',
        'SplitButton',
        'Splitter',
        'Steps',
        'TabMenu',
        'TabView',
        'TabPanel',
        'Tag',
        'Terminal',
        'TieredMenu',
        'Timeline',
        'Toast',
        'ToggleButton',
        'Toolbar',
        'Tooltip',
        'Tree',
        'TreeTable',
      ],
    },
    directives: {
      name: undefined,
      prefix: '',
      include: ['Ripple', 'Tooltip']    /* Used as v-pripple and v-ptooltip */
    },
    composables: {
      include: ['useStyle']

    },

  },
  css: [
    'primevue/resources/themes/lara-dark-teal/theme.css',
    'primeicons/primeicons.css',
    '~/assets/css/layout-light.css',
    '~/assets/main.css'],
  devtools: { enabled: true }
})
