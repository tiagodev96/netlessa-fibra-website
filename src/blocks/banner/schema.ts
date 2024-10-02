import { Block } from 'payload'

export const Banner: Block = {
  slug: 'banner',
  labels: {
    singular: 'Banner',
    plural: 'Banners',
  },
  fields: [
    {
      name: 'carousel',
      label: 'Carrossel de imagens',
      type: 'array',
      labels: {
        singular: 'Imagem',
        plural: 'Imagens',
      },
      fields: [
        {
          name: 'content_image',
          label: 'Imagem de conteúdo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'ctas',
          label: 'Chamadas para ação',
          type: 'array',
          fields: [
            {
              name: 'label',
              label: 'Texto do botão',
              type: 'text',
              required: true,
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
              required: true,
            },
          ],
        },
        {
          name: 'background',
          label: 'Imagem de fundo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
