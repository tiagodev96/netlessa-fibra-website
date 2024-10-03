import { Block } from 'payload'

export const ClientServiceSection: Block = {
  slug: 'client_service_section',
  labels: {
    singular: 'Seção de serviços ao cliente',
    plural: 'Seções de serviços ao cliente',
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
      type: 'text',
      required: true,
    },
    {
      name: 'cta',
      label: 'Chamada para ação',
      maxRows: 2,
      type: 'array',
      fields: [
        {
          name: 'icon',
          label: 'Ícone',
          type: 'upload',
          relationTo: 'media',
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
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
