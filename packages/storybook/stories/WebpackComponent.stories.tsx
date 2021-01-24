import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import WebpackComponent from '@jduenas/wp-component'

export default {
  title: 'Example/WebpackComponent',
  component: WebpackComponent,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story = (args) => <WebpackComponent />

export const Primary = Template.bind({})
