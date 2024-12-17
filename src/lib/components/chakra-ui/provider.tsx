'use client';

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

const config = defineConfig({
	theme: {
		tokens: {
			colors: {
				primary: {
					value: '{colors.blue.500}',
					dark: {
						value: '{colors.blue}'
					},
					outline: {
						value: '{colors.blue.600}'
					}
				}
			}
		},
		semanticTokens: {
			colors: {
				primary: {
					solid: { value: '{colors.blue}' },
					contrast: { value: '{colors.blue.100}' },
					fg: { value: '{colors.blue.700}' },
					muted: { value: '{colors.blue.100}' },
					subtle: { value: '{colors.blue.200}' },
					emphasized: { value: '{colors.blue.300}' },
					focusRing: { value: '{colors.blue.500}' }
				}
			}
		}
	}
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
