import BannerBlockServer from '@/blocks/banner/Server'
import ProductSectionBlockServer from '@/blocks/product-section/Server'
import ClientServiceSectionBlockServer from '@/blocks/client-service/Server'

import { Page } from '@/payload-types'
import React, { Fragment } from 'react'
import ContactSectionBlockServer from '@/blocks/contact-section/Server'
import TestimonialsBlockSection from '@/blocks/testimonials/Server'
import BlogSectionBlock from '@/blocks/blog-section/Server'

const blockComponents = {
  banner: BannerBlockServer,
  product_section: ProductSectionBlockServer,
  client_service_section: ClientServiceSectionBlockServer,
  contact_section: ContactSectionBlockServer,
  testimonials: TestimonialsBlockSection,
  blog_section: BlogSectionBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-ignore */}
                  <Block id={blockName} {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
