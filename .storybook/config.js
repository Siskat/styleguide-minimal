import { configure } from '@storybook/angular';
import '../projects/styleguide/src/styles.scss';

// automatically import all files ending in *.stories.ts
configure([
    require.context('../projects/zip-styleguide/src/', true, /\.stories\.ts$/),
], module);

