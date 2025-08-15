import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { colorInput } from '@sanity/color-input'

// Import schema types
import { post } from './sanity/schemas/post'
import { category } from './sanity/schemas/category'
import { tag } from './sanity/schemas/tag'

export default defineConfig({
  name: 'maruyama-blog',
  title: 'MARUYAMA Blog',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hc6o75o9',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
    colorInput()
  ],
  
  schema: {
    types: [post, category, tag]
  }
})