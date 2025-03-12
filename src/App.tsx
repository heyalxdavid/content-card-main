import React from 'react';
import { Card } from './components/Card/Card';
import { Zap, Palette, Image, Maximize2, Minimize2, Clock, Info, Bell, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Fullbleed Images</h2>
          <div className="space-y-8">
            <Card
              heading="Vertical Fullbleed"
              subheading="Edge-to-Edge Visual Impact"
              body="This card demonstrates a fullbleed image in a vertical layout. The large image extends to the edges of the card, creating a dramatic visual effect perfect for showcasing photography."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="large"
              fullbleed={true}
              layout="vertical"
              buttons={[
                { label: 'View Gallery', variant: 'primary' }
              ]}
            />

            <Card
              heading="Horizontal Fullbleed"
              subheading="Side-to-Edge Impact"
              body="In this horizontal layout, the fullbleed image creates a seamless edge-to-edge effect on the left side of the card. This design is particularly effective for wide-format photography or when you want to create a strong visual hierarchy."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="large"
              fullbleed={true}
              layout="horizontal"
              imagePosition="left"
              buttons={[
                { label: 'Explore More', variant: 'primary' }
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Footer Variations</h2>
          <div className="space-y-8">
            <Card
              heading="Simple Footer"
              subheading="Basic Information Display"
              body="This card demonstrates a simple footer with just text. Footers are perfect for displaying metadata, timestamps, or additional context about the content."
              buttons={[
                { label: 'Learn More', variant: 'primary' }
              ]}
              footer={{
                text: 'Last updated 2 days ago'
              }}
            />

            <Card
              heading="Footer with Icon"
              subheading="Enhanced Visual Context"
              body="Adding an icon to the footer helps provide visual context and makes the information more scannable. This pattern works well for status updates or time-sensitive information."
              layout="vertical"
              alignment="center"
              buttons={[
                { label: 'View Details', variant: 'primary' }
              ]}
              footer={{
                icon: Clock,
                text: 'Updated 5 minutes ago'
              }}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Badge Variations</h2>
          <div className="space-y-8">
            <Card
              heading="Single Badge"
              subheading="Focused Status"
              body="A single badge is perfect for highlighting the most important status or category of content. It's clean and doesn't compete for attention with other elements."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              badges={[
                { label: 'Featured', variant: 'primary' }
              ]}
              buttons={[
                { label: 'Learn More', variant: 'primary' }
              ]}
            />

            <Card
              heading="Multiple Badges"
              subheading="Dual Classification"
              body="Using two badges allows for multiple classifications or statuses. The primary badge draws immediate attention while the secondary provides additional context."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              badges={[
                { label: 'New', variant: 'primary' },
                { label: 'Premium', variant: 'secondary' }
              ]}
              buttons={[
                { label: 'Get Started', variant: 'primary' }
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Image Options</h2>
          <div className="space-y-8">
            <Card
              heading="Large Image Size"
              subheading="Maximum Visual Impact"
              body="The large image size option provides maximum visual impact, perfect for showcasing high-quality photography or detailed illustrations. This setting is ideal for hero sections or featured content."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="large"
              buttons={[
                { label: 'View Example', variant: 'primary' }
              ]}
            />

            <Card
              heading="Large Image Size"
              subheading="Maximum Visual Impact"
              body="The large image size option provides maximum visual impact, perfect for showcasing high-quality photography or detailed illustrations. This setting is ideal for hero sections or featured content."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="large"
              layout="horizontal"
              buttons={[
                { label: 'View Example', variant: 'primary' }
              ]}
            />

            <Card
              heading="Medium Image Size"
              subheading="Balanced Presentation"
              body="Medium image size offers a balanced approach, providing enough visual interest while maintaining focus on the content. This is our most versatile option, suitable for most use cases."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              buttons={[
                { label: 'Learn More', variant: 'primary' }
              ]}
            />

            <Card
              heading="Medium Image Size"
              subheading="Balanced Presentation"
              body="Medium image size offers a balanced approach, providing enough visual interest while maintaining focus on the content. This is our most versatile option, suitable for most use cases."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              layout="horizontal"
              buttons={[
                { label: 'Learn More', variant: 'primary' }
              ]}
            />

            <Card
              heading="Small Primary Icon Size"
              subheading="Bold Icon Display"
              body="Large icons make a strong visual statement and work well as the primary visual element. They're perfect for feature highlights or when you want to emphasize a specific concept or action."
              icon={Palette}
              iconSize="large"
              buttons={[
                { label: 'Explore Icons', variant: 'primary' }
              ]}
            />

            <Card
              heading="Medium Utility Icon Size"
              subheading="Subtle Visual Element"
              body="Small icons provide a subtle visual accent without overwhelming the content. They're ideal for supporting information or when you want to maintain focus on the text content."
              icon={Minimize2}
              iconSize="small"
              buttons={[
                { label: 'See Details', variant: 'primary' }
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Image Position</h2>
          <div className="space-y-8">
            <Card
              heading="Top Image Position"
              subheading="Default Vertical Layout"
              body="This card demonstrates the default top image position in a vertical layout. The image spans the full width of the card above the content."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imagePosition="top"
              layout="vertical"
              imageSize="large"
              buttons={[
                { label: 'Learn More', variant: 'primary' }
              ]}
            />

            <Card
              heading="Left Image Position"
              subheading="Horizontal Layout"
              body="This card shows the image positioned on the left side in a horizontal layout, creating a balanced side-by-side arrangement with the content."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imagePosition="left"
              layout="horizontal"
              imageSize="large"
              buttons={[
                { label: 'Explore', variant: 'primary' }
              ]}
            />

            <Card
              heading="Right Image Position"
              subheading="Horizontal Layout"
              body="Here the image is positioned on the right side in a horizontal layout, offering an alternative composition that can help direct attention to the content first."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imagePosition="right"
              layout="horizontal"
              imageSize="large"
              buttons={[
                { label: 'View Details', variant: 'primary' }
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Alignment</h2>
          <div className="space-y-8">
            <Card
              heading="Left Alignment"
              subheading="New Trends and Best Practices"
              body="Stay ahead of the curve with our comprehensive guide to modern design principles. Learn about emerging trends and timeless practices that shape great user experiences."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              alignment="left"
              buttons={[
                { label: 'Explore', variant: 'primary' },
                { label: 'Learn More', variant: 'secondary' }
              ]}
            />

            <Card
              heading="Center Alignment"
              subheading="New Trends and Best Practices"
              body="Stay ahead of the curve with our comprehensive guide to modern design principles. Learn about emerging trends and timeless practices that shape great user experiences."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              alignment="center"
              buttons={[
                { label: 'Explore', variant: 'primary' },
                { label: 'Learn More', variant: 'secondary' }
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-secondary mb-6">Alignment Dont's</h2>
          <div className="space-y-8">
            <Card
              heading="Design Principles 2024"
              subheading="New Trends and Best Practices"
              body="Stay ahead of the curve with our comprehensive guide to modern design principles. Learn about emerging trends and timeless practices that shape great user experiences."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              alignment="center"
              layout='horizontal'
              buttons={[
                { label: 'Explore', variant: 'primary' },
                { label: 'Learn More', variant: 'secondary' }
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Card Interaction</h2>
          <div className="space-y-8">
            <Card
              heading="Clickable Card"
              subheading="Interactive Experience"
              body="This card is clickable and will respond to user interaction. Click anywhere on the card to trigger an action. The cursor will change to indicate interactivity."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              onClick={() => console.log('Card clicked')}
              buttons={[
                { label: 'Explore', variant: 'primary' },
               
              ]}
            />

            <Card
              heading="Non-Clickable Card"
              subheading="Static Display"
              body="This card is non-clickable and serves as a static display element. While the buttons remain interactive, the card itself doesn't respond to clicks. Notice the absence of hover effects and cursor changes."
              imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
              imageSize="medium"
              buttons={[
                { label: 'Explore', variant: 'primary' },
                
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;