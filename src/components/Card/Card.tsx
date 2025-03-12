import React from 'react';
import { cn } from '../../lib/utils';
import { XIcon as Icon } from 'lucide-react';

export type BadgeProps = {
  label: string;
  variant?: 'primary' | 'secondary';
};

export type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
};

export type FooterProps = {
  text: string;
  icon?: Icon;
};

export type CardProps = {
  layout?: 'vertical' | 'horizontal';
  alignment?: 'center' | 'left';
  imagePosition?: 'top' | 'left' | 'right';
  badges?: BadgeProps[];
  eyebrow?: string;
  heading: string;
  subheading?: string;
  body: string;
  buttons?: ButtonProps[];
  imageSrc?: string;
  icon?: Icon;
  iconSize?: 'small' | 'large';
  imageSize?: 'medium' | 'large';
  fullbleed?: boolean;
  bordered?: boolean;
  className?: string;
  onClick?: () => void;
  showFooter?: boolean;
  showButtons?: boolean;
  showBadges?: boolean;
  showImage?: boolean;
  showIcon?: boolean;
  footer?: FooterProps;
};

export const Card: React.FC<CardProps> = ({
  layout = 'vertical',
  alignment = 'left',
  imagePosition = 'top',
  badges = [],
  eyebrow,
  heading,
  subheading,
  body,
  buttons = [],
  imageSrc,
  icon: IconComponent,
  iconSize = 'large',
  imageSize = 'medium',
  fullbleed = false,
  bordered = true,
  className,
  onClick,
  showFooter = true,
  showButtons = true,
  showBadges = true,
  showImage = true,
  showIcon = true,
  footer,
}) => {
  const isHorizontal = layout === 'horizontal';
  const effectiveImagePosition = isHorizontal ? imagePosition : 'top';
  const imageOrder = effectiveImagePosition === 'right' ? 'order-1 md:order-2' : 'order-1';
  const contentOrder = effectiveImagePosition === 'right' ? 'order-2 md:order-1' : 'order-2';

  const getImageSizeClasses = () => {
    if (IconComponent) {
      return iconSize === 'large' ? 'w-[60px] h-[60px]' : 'w-[28px] h-[28px]';
    }

    const verticalSizeClasses = imageSize === 'large' 
      ? (fullbleed ? 'max-h-[200px]' : 'max-h-[180px]')
      : (fullbleed ? 'max-h-[160px]' : 'max-h-[140px]');

    const horizontalSizeClasses = imageSize === 'large' 
      ? 'w-full md:w-[40%]' 
      : 'w-full md:w-[30%]';

    return isHorizontal 
      ? `${verticalSizeClasses} ${horizontalSizeClasses} md:max-h-none` 
      : verticalSizeClasses;
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    onClick?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  const shouldShowMedia = (showImage && imageSrc) || (showIcon && IconComponent);

  return (
    <div
      data-testid="card-container"
      className={cn(
        'rounded-2xl overflow-hidden bg-white will-change-transform group relative',
        'before:absolute before:inset-0 before:rounded-2xl before:border before:border-gray-200 before:pointer-events-none before:z-10',
        onClick && [
          'hover:before:border-2 hover:before:border-text-primary',
          'cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none'
        ],
        isHorizontal ? 'flex flex-col md:flex-row md:items-stretch' : 'flex flex-col',
        alignment === 'center' && 'text-center',
        !fullbleed && 'p-6',
        showFooter && footer && 'pb-20',
        className
      )}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
    >
      {shouldShowMedia && (
        <div
          className={cn(
            'relative overflow-hidden transform-gpu shrink-0',
            !fullbleed && 'rounded-xl',
            isHorizontal ? [
              imageOrder,
              getImageSizeClasses(),
              'aspect-[16/9] md:aspect-auto',
              !fullbleed && 'mb-6 md:mb-0 md:mr-6',
              effectiveImagePosition === 'right' && !fullbleed && 'md:mr-0 md:ml-6'
            ] : [
              'w-full',
              getImageSizeClasses(),
              !IconComponent && 'aspect-[16/9]',
              !isHorizontal && effectiveImagePosition === 'top' && !fullbleed && 'mb-6',
              IconComponent && alignment === 'center' && 'flex justify-center'
            ],
            alignment === 'center' && !fullbleed && 'mx-auto'
          )}
        >
          {IconComponent && showIcon ? (
            <IconComponent 
              className={cn(
                'text-primary',
                'w-full h-full'
              )}
            />
          ) : showImage && imageSrc ? (
            <img
              src={imageSrc}
              alt={heading}
              role="img"
              className={cn(
                'object-cover w-full h-full',
                isHorizontal && 'md:absolute md:inset-0'
              )}
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
      )}

      <div
        className={cn(
          'flex flex-col flex-1',
          contentOrder,
          isHorizontal ? 'w-full md:flex-1' : 'w-full',
          alignment === 'center' && 'items-center',
          fullbleed && 'p-6'
        )}
      >
        {showBadges && badges.length > 0 && (
          <div 
            className={cn(
              'mb-5 w-full flex',
              badges.length === 2 ? 'justify-between' : null,
              badges.length === 1 && alignment === 'center' ? 'justify-center' : null,
              badges.length === 1 && alignment === 'left' ? 'justify-start' : null,
              badges.length !== 2 ? 'gap-2' : null
            )}
          >
            {badges.map((badge, index) => (
              <span
                key={index}
                className={cn(
                  'h-[20px] flex items-center text-[12px] font-medium uppercase py-[2px] px-[4px] rounded-[4px]',
                  badge.variant === 'primary' 
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-text-primary'
                )}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-1">
          {eyebrow && (
            <span className="text-[14px] font-normal text-text-secondary tracking-wide">
              {eyebrow}
            </span>
          )}
          <h3 className="text-[20px] font-semibold text-text-primary leading-tight">
            {heading}
          </h3>
          {subheading && (
            <h4 className="text-[16px] font-normal text-text-primary leading-snug">
              {subheading}
            </h4>
          )}
        </div>
        
        <p className="mt-3 text-[16px] text-text-primary leading-relaxed">
          {body}
        </p>
        
        {showButtons && buttons && buttons.length > 0 && (
          <div 
            data-testid="button-container"
            className={cn(
              'mt-5 flex flex-col md:inline-flex md:flex-row flex-wrap gap-4',
              alignment === 'center' && 'items-center md:justify-center w-full md:w-auto'
            )}
          >
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={cn(
                  'px-4 py-2 rounded-[4px] font-medium transition-all duration-200 transform-gpu inline-flex relative z-10 w-full md:w-auto justify-center text-[16px]',
                  button.variant === 'primary'
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md'
                    : 'border border-gray-300 text-text-primary hover:bg-gray-50 hover:border-gray-400'
                )}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {showFooter && footer && (
        <div className={cn(
          "absolute bottom-0 left-0 right-0 bg-[#F0F4F6] flex items-center px-6 py-4",
          isHorizontal && "md:absolute md:bottom-0 md:left-0 md:right-0"
        )}>
          {footer.icon && (
            <footer.icon className="w-[20px] h-[20px] text-text-primary mr-2 shrink-0" />
          )}
          <span className="text-[14px] text-text-primary">{footer.text}</span>
        </div>
      )}
    </div>
  );
};