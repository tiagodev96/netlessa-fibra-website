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
      name: 'address',
      label: 'Endereço',
      type: 'text',
      required: true,
    },
    {
      name: 'phone_number',
      label: 'Telefone',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      required: true,
    },
    {
      name: 'pages',
      label: 'Páginas',
      type: 'relationship',
      hasMany: true,
      relationTo: 'pages',
    },
    {
      name: 'legal_pages',
      label: 'Páginas legais',
      type: 'relationship',
      hasMany: true,
      relationTo: 'pages',
    },
    {
      name: 'socials',
      label: 'Redes sociais',
      type: 'array',
      fields: [
        {
          name: 'social_name',
          label: 'Nome da rede',
          type: 'text',
        },
        {
          name: 'icon',
          label: 'Ícone',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
    },
    {
      name: 'copyright',
      label: 'Direitos autorais',
      type: 'text',
      required: true,
    },
  ],
}
