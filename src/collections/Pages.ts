import { Banner } from '@/blocks/banner/schema'
import { BlogSectionSchema } from '@/blocks/blog-section/Schema'
import { ClientServiceSection } from '@/blocks/client-service/Schema'
import { ContactSectionBlock } from '@/blocks/contact-section/Schema'
import { ProductPlansSchema } from '@/blocks/product-plans/Schema'
import { ProductSection } from '@/blocks/product-section/Schema'
import { TestimonialsBlock } from '@/blocks/testimonials/Schema'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Página',
    plural: 'Páginas',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [
        Banner,
        ProductSection,
        ClientServiceSection,
        ContactSectionBlock,
        TestimonialsBlock,
        BlogSectionSchema,
        ProductPlansSchema,
      ],
    },
  ],
}
