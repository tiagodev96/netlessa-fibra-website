import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Produto',
    plural: 'Produtos',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'cover_image',
      label: 'Imagem de Capa',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'text',
      maxLength: 100,
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      required: true,
    },
    {
      name: 'page_product',
      label: 'Página do Produto',
      type: 'group',
      fields: [
        { name: 'tag', label: 'Tag', type: 'text', required: true },
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
      ],
    },
    {
      name: 'plans',
      label: 'Planos',
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'Nome',
          type: 'text',
          required: true,
        },
        {
          name: 'is_highlighted',
          label: 'Destacar',
          type: 'checkbox',
        },
        {
          name: 'price',
          label: 'Preço',
          type: 'number',
          required: true,
        },
        {
          name: 'features',
          label: 'Características',
          type: 'array',
          fields: [
            {
              name: 'name',
              label: 'Nome',
              type: 'text',
              required: true,
            },
            {
              name: 'icon',
              label: 'Ícone',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'whatsapp_text',
          label: 'Texto do WhatsApp',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
