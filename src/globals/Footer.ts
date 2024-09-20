import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Rodapé',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'nav',
      label: 'Navegação',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Texto',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
      minRows: 1,
    },
    {
      name: 'copyright',
      label: 'Direitos autorais',
      type: 'text',
      required: true,
    },
  ],
}
