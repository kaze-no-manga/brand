#!/usr/bin/env node

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { type FaviconOptions, favicons } from 'favicons';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const source = join(projectRoot, 'assets/square/kaze-logo-square.png');
const outputDir = join(projectRoot, 'assets/favicons');

const configuration: FaviconOptions = {
  path: '/favicons/',
  appName: 'Kaze no Manga',
  appShortName: 'Kaze',
  appDescription: 'Wind of Manga - Your manga reading platform',
  developerName: 'Kaze no Manga Team',
  developerURL: undefined,
  dir: 'auto',
  lang: 'en-US',
  background: '#8b5cf6',
  theme_color: '#8b5cf6',
  appleStatusBarStyle: 'black-translucent',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  start_url: '/',
  preferRelatedApplications: false,
  relatedApplications: undefined,
  version: '1.0',
  pixel_art: false,
  loadManifestWithCredentials: false,
  manifestMaskable: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    favicons: true,
    windows: true,
    yandex: false,
  },
};

async function generateFavicons(): Promise<void> {
  try {
    console.log('🎨 Generating favicons from:', source);

    const response = await favicons(source, configuration);

    // Create output directory
    await mkdirSync(outputDir, { recursive: true });

    // Write images
    for (const image of response.images) {
      const imagePath = join(outputDir, image.name);
      await writeFileSync(imagePath, image.contents);
      console.log(`✅ Generated: ${image.name}`);
    }

    // Write files (manifest, etc.)
    for (const file of response.files) {
      const filePath = join(outputDir, file.name);
      await writeFileSync(filePath, file.contents);
      console.log(`✅ Generated: ${file.name}`);
    }

    // Write HTML snippet for reference
    const htmlPath = join(outputDir, 'html-snippet.html');
    await writeFileSync(htmlPath, response.html.join('\n'));
    console.log('✅ Generated: html-snippet.html');

    console.log(`\n🎉 Favicons generated successfully in: ${outputDir}`);
    console.log('📋 Copy the contents of html-snippet.html to your HTML <head>');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
