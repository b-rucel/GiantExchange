import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import BaseButton from '../src/components/ui-components/Buttons/BaseButton.vue';
import BaseLink from '../src/components/ui-components/Links/BaseLink.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('BaseButton', () => ({
    components: { BaseButton },
    template: '<BaseButton @click="action">BaseButton</BaseButton>',
    methods: { action: action('onClick') },
  }));

storiesOf('Link', module)
  .add('BaseLink', () => ({
    components: { BaseLink },
    template: '<BaseLink>BaseLink</BaseLink>',
  }));
