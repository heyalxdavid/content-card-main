import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Zap, Star, Info } from 'lucide-react';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    alignment: {
      control: 'radio',
      options: ['center', 'left'],
    },
    imagePosition: {
      control: 'radio',
      options: ['top', 'left', 'right'],
    },
    imageSize: {
      control: 'radio',
      options: ['medium', 'large'],
    },
    iconSize: {
      control: 'radio',
      options: ['small', 'large'],
    },
    fullbleed: {
      control: 'boolean',
    },
    bordered: {
      control: 'boolean',
    },
    showFooter: {
      control: 'boolean',
      description: 'Toggle footer visibility',
    },
    showButtons: {
      control: 'boolean',
      description: 'Toggle buttons visibility',
    },
    showBadges: {
      control: 'boolean',
      description: 'Toggle badges visibility',
    },
    showImage: {
      control: 'boolean',
      description: 'Toggle image visibility',
    },
    showIcon: {
      control: 'boolean',
      description: 'Toggle icon visibility',
    },
    footer: {
      control: 'object',
      description: 'Optional footer configuration',
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    eyebrow: 'Eyebrow',
    heading: 'Modern Design System',
    subheading: 'Built for scale',
    body: 'A flexible and extensible card component that adapts to various layouts and content types. Perfect for displaying featured content, products, or articles.',
    imageSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
    buttons: [
      { label: 'Learn More', variant: 'primary' },
      { label: 'View Demo', variant: 'secondary' },
    ],
    badges: [
      { label: 'New', variant: 'primary' },
      { label: 'Featured', variant: 'secondary' },
    ],
    imageSize: 'medium',
    onClick: () => console.log('Card clicked'),
    showFooter: true,
    showButtons: true,
    showBadges: true,
    showImage: true,
    showIcon: false,
    footer: {
      icon: Info,
      text: 'Last updated 2 days ago',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Basic existence checks
    const card = canvas.getByTestId('card-container');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('role', 'article');

    // Image check
    const image = canvas.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Modern Design System');

    // Heading checks
    expect(canvas.getByRole('heading', { name: /Modern Design System/i })).toBeInTheDocument();
    expect(canvas.getByText(/Built for scale/i)).toBeInTheDocument();

    // Badge checks
    const badges = canvas.getAllByRole('status');
    expect(badges).toHaveLength(2);
    expect(badges[0]).toHaveTextContent('New');
    expect(badges[1]).toHaveTextContent('Featured');

    // Button checks
    const buttonContainer = canvas.getByTestId('button-container');
    const buttons = within(buttonContainer).getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('Learn More');
    expect(buttons[1]).toHaveTextContent('View Demo');

    // Footer check
    expect(canvas.getByText(/Last updated 2 days ago/i)).toBeInTheDocument();
  }
};

export const LargeImageCard: Story = {
  args: {
    ...DefaultCard.args,
    imageSize: 'large',
    fullbleed: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...DefaultCard.args,
    imageSrc: undefined,
    icon: Zap,
    iconSize: 'large',
  },
};

export const SmallIcon: Story = {
  args: {
    ...DefaultCard.args,
    imageSrc: undefined,
    icon: Star,
    iconSize: 'small',
  },
};

export const HorizontalWithImageLeft: Story = {
  args: {
    ...DefaultCard.args,
    layout: 'horizontal',
    imagePosition: 'left',
  },
};

export const HorizontalWithImageRight: Story = {
  args: {
    ...DefaultCard.args,
    layout: 'horizontal',
    imagePosition: 'right',
  },
};

export const VerticalCentered: Story = {
  args: {
    ...DefaultCard.args,
    layout: 'vertical',
    alignment: 'center',
  },
};

export const MinimalCard: Story = {
  args: {
    heading: 'Simple Card',
    body: 'A minimal card design without images or additional elements.',
    buttons: [{ label: 'Get Started', variant: 'primary' }],
    badges: [{ label: 'Simple', variant: 'secondary' }],
    onClick: () => console.log('Minimal card clicked'),
    showFooter: true,
    showButtons: true,
    showBadges: true,
    showImage: false,
    showIcon: false,
    footer: {
      text: 'No additional information needed',
    },
  },
};

export const NoFooter: Story = {
  args: {
    ...DefaultCard.args,
    showFooter: false,
  },
};

export const NoButtons: Story = {
  args: {
    ...DefaultCard.args,
    showButtons: false,
  },
};

export const NoBadges: Story = {
  args: {
    ...DefaultCard.args,
    showBadges: false,
  },
};

export const NoImage: Story = {
  args: {
    ...DefaultCard.args,
    showImage: false,
  },
};

export const NoIcon: Story = {
  args: {
    ...WithIcon.args,
    showIcon: false,
  },
};

export const ResponsiveBreakpoints: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
    docs: {
      description: {
        story: 'This story demonstrates how the card adapts across different viewport sizes. The card switches from vertical to horizontal layout at the medium (md) breakpoint.',
      },
    },
  },
  args: {
    eyebrow: 'Responsive Design',
    heading: 'Adaptive Layout',
    subheading: 'Mobile-first approach',
    body: 'This card demonstrates responsive behavior across different viewport sizes. On mobile devices (< 768px), it uses a vertical layout with the image on top. On larger screens (≥ 768px), it switches to a horizontal layout with the image on the left.',
    imageSrc: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=2061&auto=format&fit=crop',
    layout: 'horizontal',
    imagePosition: 'left',
    badges: [
      { label: 'Responsive', variant: 'primary' },
      { label: 'Adaptive', variant: 'secondary' },
    ],
    buttons: [
      { label: 'Explore Features', variant: 'primary' },
      { label: 'Documentation', variant: 'secondary' },
    ],
    onClick: () => console.log('Responsive card clicked'),
    showFooter: true,
    showButtons: true,
    showBadges: true,
    showImage: true,
    showIcon: true,
    footer: {
      icon: Info,
      text: 'Optimized for all screen sizes',
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-[1200px] mx-auto">
        <Story />
      </div>
    ),
  ],
};