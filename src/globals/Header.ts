import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Cabeçalho',
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
        { name: 'icon', label: 'Ícone', type: 'upload', relationTo: 'media', required: true },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
      minRows: 1,
    },
    {
      name: 'cta',
      label: 'Botão de chamada para ação',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'Texto',
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
