import { Block } from 'payload'

export const ContactSectionBlock: Block = {
  slug: 'contact_section',
  labels: {
    singular: 'Seção de contato',
    plural: 'Seções de contato',
  },
  fields: [
    {
      name: 'image',
      label: 'Imagem',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
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
  ],
}
