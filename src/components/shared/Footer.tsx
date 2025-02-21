import React, { FC } from 'react'

export const Footer: FC = () => {
  return (
    <section className="footerContainer flex flex-wrap gap-3 md:gap-6 justify-center sm:justify-between items-center pb-4 md:pb-8 text-center  lg:mb-0">
      <span className=" text-base font-semibold text-white">Copyright © 2024 Portfolify. All Rights Reserved.</span>
    </section>
  )
}
