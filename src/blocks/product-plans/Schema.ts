import { Block } from 'payload'

export const ProductPlansSchema: Block = {
  slug: 'product_plans',
  labels: {
    singular: 'Planos de Produto',
    plural: 'Planos de Produto',
  },
  fields: [
    {
      name: 'products',
      label: 'Produtos',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
      minRows: 1,
    },
  ],
}
