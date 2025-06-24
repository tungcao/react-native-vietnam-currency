# react-native-vietnam-currency

A simple and flexible utility for formatting Vietnamese Đồng (₫) in React Native — with built-in support for splitting currency and unit, so you can style them differently (e.g., smaller font size for the ₫ symbol).

✨ Features

- Format number → Vietnamese currency (1.500.000 ₫)
- Cleanly separate amount and unit for flexible UI styling
- Optionally parse back to raw numbers
- No native dependencies, pure JS

## Installation
```sh
npm install react-native-vietnam-currency
```

## Usage
```tsx
import { Vnd } from 'react-native-vietnam-currency';

<Vnd value={1500000} />
<Vnd value={1500000} unitStyle={{ fontSize: 10 }} style={{ fontSize: 18 }} />
```

## Props
| Prop             | Type                | Required | Description                                                        |
|------------------|---------------------|----------|--------------------------------------------------------------------|
| `value`          | `number or string`  | ✅ Yes   | The amount to display as Vietnamese currency (e.g. 1500000).       |
| `style`          | `TextStyle`         | ❌ No    | Style applied to the currency number.                              |
| `unitStyle`      | `TextStyle`         | ❌ No    | Style applied to the unit `₫`, commonly smaller font.              |
| `containerStyle` | `ViewStyle`         | ❌ No    | Optional container style for layout customization.                 |

## License
MIT
