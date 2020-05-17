import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console';
import '../src/index.css';

const { withPropsTable } = require('storybook-addon-react-docgen');

addDecorator(withPropsTable);
addDecorator(withA11y);
addDecorator(withKnobs);
