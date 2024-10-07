import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testemunho',
    plural: 'Testemunhos',
  },
  fields: [
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
      name: 'user_testimonials',
      label: 'Testemunhos',
      type: 'array',
      fields: [
        {
          name: 'rating',
          label: 'Avaliação',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
        },
        {
          name: 'name',
          label: 'Nome',
          type: 'text',
          required: true,
        },
        {
          name: 'comment',
          label: 'Comentário',
          type: 'textarea',
          required: true,
        },
        {
          name: 'neighbourhood',
          label: 'Bairro',
          type: 'text',
          required: true,
        },
        {
          name: 'avatar',
          label: 'Avatar',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
