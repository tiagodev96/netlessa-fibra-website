import { Block } from 'payload'

export const BlogSectionSchema: Block = {
  slug: 'blog_section',
  labels: {
    singular: 'Seção do blog',
    plural: 'Seções do blog',
  },
  fields: [
    {
      name: 'tag',
      label: 'Tag',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'text',
      required: true,
    },
    {
      name: 'posts',
      label: 'Postagens',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 2,
    },
  ],
}
