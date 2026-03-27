#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '../dist/usds.js'),
  path.join(__dirname, '../dist/usds.cjs'),
];

for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    // Remove any existing 'use client' at the top (to avoid duplicates)
    const cleaned = content.replace(/^"use client";\s*/m, '');
    fs.writeFileSync(file, '"use client";\n' + cleaned, 'utf8');
    console.log(`Ensured 'use client' is the first line in ${file}`);
  }
}
