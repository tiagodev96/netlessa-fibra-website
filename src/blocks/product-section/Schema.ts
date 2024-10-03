import { Block } from 'payload'

export const ProductSection: Block = {
  slug: 'product_section',
  labels: {
    singular: 'Seção de produtos',
    plural: 'Seções de produtos',
  },
  fields: [
    {
      name: 'tag',
      label: 'Tag',
      type: 'text',
      required: true,
    },
    {
      name: 'section_title',
      label: 'Título da seção',
      type: 'text',
      required: true,
    },
    {
      name: 'section_description',
      label: 'Descrição da seção',
      type: 'textarea',
      required: true,
    },
    {
      name: 'cta',
      label: 'Chamada para ação',
      type: 'array',
      fields: [
        {
          name: 'text',
          label: 'Texto do botão',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
