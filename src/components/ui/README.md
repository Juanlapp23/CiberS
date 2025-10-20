# GradualBlur Component

## Description
The GradualBlur component creates a sophisticated blur effect that gradually increases in intensity. It's useful for creating elegant transitions between sections or adding depth to UI elements.

## Installation
The component requires `mathjs` which is already included in the project dependencies.

## Usage

### Basic Usage
```jsx
import GradualBlur from './ui/GradualBlur';

function MyComponent() {
  return (
    <section style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'auto', padding: '6rem 2rem' }}>
        {/* Content Here - such as an image or text */}
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| position | "top" \| "bottom" \| "left" \| "right" | "bottom" | Edge to attach the blur overlay |
| strength | number | 2 | Base blur strength multiplier (affects each layer) |
| height | string | "6rem" | Overlay height (for top / bottom positions) |
| width | string | - | Custom width (optional) |
| divCount | number | 5 | Number of stacked blur layers (higher = smoother gradient) |
| exponential | boolean | false | Use exponential progression for stronger end blur |
| curve | "linear" \| "bezier" \| "ease-in" \| "ease-out" \| "ease-in-out" | "linear" | Distribution curve applied to layer progression |
| opacity | number | 1 | Opacity applied to each blur layer |
| animated | boolean \| "scroll" | false | Fade in (true) or reveal on scroll ("scroll") |
| duration | string | "0.3s" | Animation duration (when animated) |
| easing | string | "ease-out" | Animation easing (opacity / backdrop-filter) |
| hoverIntensity | number | - | Multiplier applied to strength while hovered |
| target | "parent" \| "page" | "parent" | Position relative to parent container or the entire page (fixed) |
| preset | "top" \| "bottom" \| "left" \| "right" \| "subtle" \| "intense" \| "smooth" \| "sharp" \| "header" \| "footer" \| "sidebar" \| "page-header" \| "page-footer" | - | Apply a predefined configuration bundle |
| responsive | boolean | false | Enable internal responsive recalculation (experimental) |
| zIndex | number | 1000 | Base z-index (page target adds +100) |
| onAnimationComplete | () => void | - | Callback fired after animated reveal completes |
| className | string | - | Additional class names appended to root element |
| style | React.CSSProperties | - | Inline style overrides merged into container style |

## Presets
The component comes with several built-in presets for common use cases:
- `top`, `bottom`, `left`, `right` - Position presets
- `subtle` - Light blur effect
- `intense` - Strong blur effect with exponential progression
- `smooth` - Smooth gradient with many layers
- `sharp` - Sharp transition with fewer layers
- `header`, `footer` - Designed for header/footer areas
- `sidebar` - Optimized for sidebar layouts
- `page-header`, `page-footer` - Full-page fixed position variants

## Examples

### Footer Blur
```jsx
<GradualBlur preset="footer" />
```

### Subtle Header Blur
```jsx
<GradualBlur 
  preset="header" 
  strength={1.5} 
  divCount={3} 
  opacity={0.8} 
/>
```

### Intense Exponential Blur
```jsx
<GradualBlur 
  position="bottom" 
  height="10rem" 
  strength={4} 
  divCount={8} 
  exponential={true} 
/>
```

## Reusability
To use this component elsewhere in your application:
1. Import it: `import GradualBlur from './ui/GradualBlur';`
2. Place it within a container with `position: 'relative'`
3. Customize using props as needed